<?php

namespace App\Http\Controllers;

use App\Models\User;
use Spatie\QueryBuilder\QueryBuilder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(User $user)
    {
        $this->user = $user;
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
            ]);
        return Inertia::render('Admin/User/AdminUserIndex', [
            'users' => $result,
            'filters' => request()->input('filter.name'),
            'show_user' => $this->user->whereName($show_user)->with('roles')->first(),
            'roles' =>  \Spatie\Permission\Models\Role::get(['id', 'name'])
        ]);
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
        return $this->customRedirectRoles($request->roles, $request->id);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return dd($id);
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
