<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use App\Http\Traits\AllStudentsTraits;

class StudentSubjectController extends Controller
{
    //
    use AllStudentsTraits;
    public function show($id){
        if(Gate::allows('manage_student')){
            return Inertia::render('Students/StudentSubjectsShow', [
                'profile' => $this->getStudentSubjectByAuth()
            ]);
        }else{
            return abort(403);
        }
    }
}
