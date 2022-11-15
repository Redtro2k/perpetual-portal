<?php

namespace App\Http\Controllers\Teachers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Schools\School;
use App\Models\teacher as Teacher;

class TeacherController extends Controller
{
    public function __construct(School $school, Teacher $teacher, User $user)
    {
        $this->school = $school;
        $this->teacher = $teacher;
        $this->user = $user;
    }
    public function index()
    {
    }
    public function create()
    {
        return Inertia::render('Teacher/AdminTeacherCreate');
    }
    public function store(Request $request)
    {
        //
        dd($request->id);
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
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = $this->user->find($id);
        $school = $this->school->first();
        if(!$school){
            return redirect()->back()->with('warning', 'no school you cant update their roles');
        }else{
            $this->teacher->create([
                'teacher_id' => $school->school_id . rand(2, 9999),
                'school_uid' => $school->id,
                'user_id' => $user->id
            ]);
            $user->assignRole('teacher');
            return redirect()->route('manage-user.index')->with('success', ' '.$user->name.' updated roles as teacher');
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
