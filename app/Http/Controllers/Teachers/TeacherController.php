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
        return Inertia::render('Teacher/AdminTeacherShow', [
            'user' => User::find($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //one errors fix after finishing the show route
        $user = $this->user->find($id);
        $school = $this->school->first();
        if(!$school){
            return redirect()->back()->with('warning', 'no school you cant update their roles');
        }
        else{
            if(json_decode($user->roles()->pluck('name')) == ['teacher']){
                return redirect()->back()->with('warning', 'already updated roles');
            }else{
                $this->teacher->create([
                    'school_uid' => $school->id,
                    'user_id' => $user->id
                ]);
                $user->update([
                    'user_uid' => $school->school_id . rand(2, 9999)
                ])->touch();
                $user->assignRole('teacher');
                return redirect()->route('teachers.show', $user->id)->with('success', ' '.$user->name.' updated roles as teacher');
            }
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
