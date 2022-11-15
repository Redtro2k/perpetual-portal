<?php

namespace App\Http\Controllers;

use App\Models\{User, Message};
use Spatie\QueryBuilder\QueryBuilder;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;
use App\Http\Traits\{AllTeacherTraits, AllStudentsTraits, AllUsersTrait};
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\{AllRolesUser, AllUsersExport};
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
    use AllTeacherTraits, AllStudentsTraits, AllUsersTrait;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function exporting(){
        return Excel::download(new AllUsersExport(1), 'all-user.xlsx');
    }
    public function exportAllStudent(){
        return Excel::download(new AllRolesUser('student'), 'all-student.xlsx');
    }
    public function exportAllTeacher(){
        return Excel::download(new AllRolesUser('teacher'), 'all-teacher.xlsx');
    }
    public function index($show_user = null)
    {
        $result = QueryBuilder::for($this->user)
            ->allowedFilters(['name'])->allowedSorts('name', 'email')
            ->allowedFields(['name', 'id'])
            ->paginate(5)->withQueryString()->through(fn ($u) => [
                'name' => $u->name,
                'image' => $u->profile_photo_url,
                'email' => $u->email,
                'roles' => implode(',', json_decode($u->roles->pluck('name'))),
                // 'roles' => $u->roles->first()->name
            ]);
        return Inertia::render('Admin/User/AdminUserIndex', [
            'users' => $result,
            'filters' => request()->input('filter.name'),
            'show_user' => $this->user->whereName($show_user)->with('roles')->first(),
            'roles' =>  \Spatie\Permission\Models\Role::get(['id', 'name']),
            'students' => $this->userCountUserByRoles('student'),
            'teachers' => $this->userCountUserByRoles('teacher'),
            'record_user' => User::all()->count()
        ]);
    }

    public function findPeople($selected_user = null, $find_user = null){
        $r = QueryBuilder::for($this->user)
            ->allowedFilters(['name'])
            ->allowedSorts(['name'])
            ->allowedIncludes('roles')
            ->whereHas('roles', function($q){
                if(Gate::allows('manage_student')){
                    $q->where('name', 'teacher');
                }
                elseif(Gate::allows('manage_teacher')){
                    $q->where('name', 'student');
                }
            })
            ->paginate(7)->withQueryString()->through(fn($t) => [
                'id' => $t->id,
                'name' => $t->name,
                'image' => $t->profile_photo_url,
                'email' => $t->email,
                'roles' => $t->roles->first()->name,
            ]);
        $result_user = $this->user->with('roles')->find($selected_user);

        return Inertia::render('Message/FindUserIndex', [
            'users' => $r,
            'filters' => request()->input('filter.name'),
            'current_user' => $result_user
        ]);
        return $r;
    }
    public function createConvertion($find_user = null, $isOpen = false){
        $load_message = Message::find($find_user);
        $load_user = $this->user->find($find_user);
        $conversation = Message::where('messageable_id', auth()->user()->id)->orWhere('to_user_id', auth()->user()->id)->get();
        $message = collect();
        if($load_message != null){
            $message->push([
                'information' => [
                    'subject_name' => $load_message->subject,
                    'to_user_name' => $load_message->toUserInfo->name,
                    'to_user_email' => $load_message->toUserInfo->email,
                    'from_to' => $load_message->toUserInfo->id == auth()->user()->id ? 'from '. $this->user->find($load_message->messageable_id)->email : 'to '. $load_message->toUserInfo->email
                ],
                'list_message' => $load_message->contents->map(fn($m) => [
                    'author_id' => $m->id,
                    'author_name' => $m->name,
                    'author_message' => $m->pivot->content,
                    'author_created' => $m->pivot->created_at
                ])
            ]);
        }
        return Inertia::render('Message/ComposeCreate', [
            'params' => $find_user,
            'current_user' => $load_user,
            'isOpen' => $isOpen,
            'list_conversation' => $conversation->map(fn($m) => [
                'id' => $m->id,
                'subject' => $m->subject,
                'to' => $m->to_user_id == auth()->user()->id ? 'from '. $this->user::find($m->messageable->id)->name : 'to '. $this->user::find($m->to_user_id)->name,
                'to_user_id' => $m->to_user_id,
                'last_message' => $m->contents->last()->pivot->content,
                'created_at' => $m->created_at
            ]),
            'selected_conversation' => $message
        ]);
    }

    public function storeConvertion(Request $request){
        if(auth()->user()->message->where('to_user_id', $request->to_user_id)->count() == 0){
            $m = auth()->user()->message()->create(['subject' => $request->subject, 'to_user_id' => $request->to_user_id]);
            $m->contents()->attach(auth()->user()->id, ['content' => $request->content]);
            return redirect()->to('create-conversation/'.$request->to_user_id.'/false');
        }
    }

    public function replyConversation(Request $request){
        $m = Message::find($request->message_id);
        $m->contents()->attach(auth()->user()->id, ['content' => $request->content]);
        return redirect()->back();
    }

    public function create()
    {
        //
    }
    public function customRedirectRoles($role, $id){
        if($role == 'teacher'){
            return redirect()->route('teachers.edit', $id);
        }
    }

    public function store(Request $request)
    {
        if($this->user::find($request->id)->roles->count() == 1){
            return redirect()->back()->with('warning', 'its already have a role');
        }else{
            return $this->customRedirectRoles($request->roles, $request->id);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::whereName($id)->get()->first();
        $roles = Role::all();
        $collection = collect([
            'role_name' => $user->roles->count() != 0 ? $user->roles->first()->name : null,
            'roles' => $user->assignSubjects->first(),
        ]);
        if($user->hasRole('teacher')){
            $collection->put('teacher', $this->getAllHandleSubjectById($user->id, true));
        }
        if($user->hasRole('student')){
            $collection->put('student', $this->getStudentSubjectByAuth($user->id));
        }
        return Inertia::render('Admin/User/AdminUserShow', [
            'users' => $user,
            'selected_role' => $user->roles->first() ? $user->roles->first()->name : null,
            'roles' => $roles->map(fn($m) => [
                'id' => $m->id,
                'name' => $m->name
            ]),
            'user_roles' => $collection,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($name)
    {
        $user = User::whereName($name)->first(['email', 'name', 'created_at', 'last_seen', 'gender']);
        if (!$user) {
            return abort(404);
        } else {
            return Inertia::render('Admin/User/AdminUserEdit', [
                'users' => $user,
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
