<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SubjectAssignTeacherController extends Controller
{
    //

    public function assignTeacher(Request $request){
        $rand = random_int(100000000, 999999999);
        $user = User::find($request->user_id);
        if($user->assignSubjects->count() != 0){
            return redirect()->back()->with('warning', $user->name. ' Teacher has already have been taken '. $user->assignSubjects->first()->name. ' Subject');
        }else{
            $user->user_uid = $rand;
            $user->save();
            if($user){
                $user->assignSubjects()->attach($request->subject_id, ['token' => $request->token]);
                return redirect()->back()->with('success', 'Successfully Assigning ' . $user->name .'this Subject');
            }else{
                return abort(500);
            }
        }
    }
}
