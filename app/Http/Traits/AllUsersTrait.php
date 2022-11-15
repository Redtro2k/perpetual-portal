<?php
namespace App\Http\Traits;

use App\Models\Section;
use App\Models\User;
use Illuminate\Support\Facades\Gate;

trait AllUsersTrait{
    public function getAllTeacherUser($id){
        return User::with('roles')->whereHas("roles", function($q){
            $q->where('name', "teacher");
        })->orderBy('id', 'desc')->paginate(6, ["*"], 'teachers')->through(fn($m) => [
            'id' => $m->id,
            'name' => $m->name,
            'email' => $m->email,
            'image' => $m->profile_photo_url,
            'user_id' => $m->user_uid == null || $m->assignSubjects->count() != 1 ? 'Available' : $m->assignSubjects->first()->name .' teacher',
        ])->withPath('?id='.$id)->onEachSide(5);
    }
    public function getAllStudentUser(){
        return User::with('roles', 'section')->whereHas('roles', function($q){
            $q->where('name', 'student');
        })->whereDoesntHave('section', function($w){
            $w->whereNotNull('name');
        })->paginate(6, ["*"], 'users')->through(fn($m) => [
            'id' => $m->id,
            'name' => $m->name,
            'email' => $m->email,
            'image' => $m->profile_photo_url,
            'section' => $m->section->count() != 0 ? $m->section->first()->name : 'No Section'
        ]);
    }
    public function getStudentUserBySectionId($id){
        $section = Section::find($id);
        $user = User::with('roles', 'section')->whereHas('roles', function($q){
            $q->where('name', 'student');
        })
        ->whereHas('section', function($w) use($section) {
            $w->where('name', $section->name);
        })
        ->paginate(6, ["*"], 'owned')->through(fn($m) => [
            'id' => $m->id,
            'name' => $m->name,
            'email' => $m->email,
            'image' => $m->profile_photo_url,
            'section' => $m->section->count() != 0 ? $m->section->first()->name : 'No Section'
        ]);
        return $user;
   }

   public function userTeacherSubject(){
        $getUserRoles = Gate::allows('manage_teacher');
        if($getUserRoles){
            if(auth()->user()->assignSubjects->count() == 0){
                return 'You currently available, Please wait for assigning you a subjects by Admin';
            }else{
                return null;
            }
        }else{
            return false;
        }
   }
   public function userCountUserByRoles(string $role_name){
        $user = User::with('roles')->whereHas("roles", function($q) use($role_name){
            $q->where('name', $role_name);
        });
        return $user->count();
   }
}
