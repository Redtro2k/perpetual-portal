<?php

namespace App\Http\Controllers;

use App\Models\Admin\AvailableSubject as Subject;
use App\Models\{YearLevel, Section};
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\Subject\SubjectRequest;
use App\Http\Traits\{AllModulesTrait, AllUsersTrait, AllSubjectTrait, AllTeacherTraits};

class SubjectController extends Controller
{
   use AllUsersTrait, AllSubjectTrait, AllModulesTrait, AllTeacherTraits;

    public function index(Request $request)
    {
        $subject = Subject::find($request->id);
        return Inertia::render('Admin/Subjects/AdminAddSubjectIndex', [
            'subjects' => Subject::paginate(6, ["*"], 'subjects')->through(fn($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'images' => $m->getMedia('subject')->first()->getUrl(),
                'value_units' => $m->value_units,
            ])->onEachSide(5),
            'teachers' => $this->getAllTeacherUser($request->id),
            'selected_subject' => $subject,
            'selected_image' => $subject ? $subject->getFirstMedia('subject')->getUrl() : null,
            'selected_modules' => $this->getSelectedAllSubjectModules($request->id)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SubjectRequest $request)
    {
        $attribute = $request->validated();
        if($attribute){
            $subject = Subject::create([
                'name' => $attribute['name'],
                'value_units' => $attribute['value_units'],
                'description' => $attribute['description'],
                'term' => 0
            ]);
            if($request->hasFile('images') && $request->file('images')->isValid()){
                $subject->addMediaFromRequest('images')
                ->withResponsiveImages()
                ->toMediaCollection('subject');
            }
            return redirect()->route('subject.index')->with('success', 'Successfully Inserted Subjects');
        }else{
            return abort(403);
        }
    }

    public function show($id)
    {
        return Inertia::render('Teacher/Subjects/TeacherSubjectShow', [
            'handle_subjects' => $this->getAllHandleSubjectById($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $yearlevel = YearLevel::find($id);
        if($yearlevel->exists()){
            return Inertia::render('Admin/Subjects/AdminAddSubjectEdit', [
                'subjects' => $yearlevel->subject->map(fn($m) => [
                    'id' => $m->id,
                    'code' => $m->code,
                    'name' => $m->getAvailSubject->name,
                    'unit' => $m->getAvailSubject->value_units,
                    'created_by' => $m->user->first()->name
                ]),
                'selected_year_level' => $yearlevel->name
            ]);
        }else{
            return abort(404);
        }

    }
    public function update(SubjectRequest $request, Subject $subject)
    {
        $attribute = $request->validated();
        if($attribute){
            echo 'validation';
            if($request->hasFile('images')){
                echo 'with picture';
            }
        }else{
            return abort(500);
        }
        if($attribute){
            $subject = Subject::find($subject->id);
            $subject->update([
                'name' => $attribute['name'],
                'value_units' => $attribute['value_units'],
                'description' => $attribute['description'],
                'term' => 0
            ]);
            if($request->hasFile('images')){
                $subject->addMediaFromRequest('images')
                ->withResponsiveImages()
                ->toMediaCollection('subject');
            }
            return redirect()->route('subject.index')->with('success', 'Successfully edited this subject');
        }else{
            return abort(403);
        }
    }

    /**
      *
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subject $subject)
    {
        if($subject){
            $subject->delete();
            return redirect()->route('subject.index')->with('success', 'Successfully deleted this subject');
        }else{
            return abort(404);
        }
    }
}
