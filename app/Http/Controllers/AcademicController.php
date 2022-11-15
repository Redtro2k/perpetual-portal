<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Traits\AllAcademicYearTrait;
use App\Models\AcademicYear;
use App\Http\Requests\AcademicRequest;

use Inertia\Inertia;

class AcademicController extends Controller
{
    use AllAcademicYearTrait;
    //
    public function index(){
        return Inertia::render('Admin/AcademicYear/AdminAcademicYearIndex', [
            'academicyear' => $this->getallAcademicYear()
        ]);
    }
    public function store(AcademicRequest $request){
        $academicyrear = AcademicYear::create([
            'start' => $request->start,
            'end' => $request->end,
            'create_by' => auth()->user()->id
        ]);
        if($academicyrear){
            return redirect()->back()->with('success', 'Successfully created Academic year');
        }else{
            return abort(403);
        }
    }

    public function destroy($id){
        $academic = AcademicYear::find($id);
        if($academic->yearLevel()->exists()){
            return redirect()->back()->with('warning', 'This academic year has already have '.$academic->yearLevel()->count().' Year level results, clear all year level before you delete this academic year');
        }else{
           $academic->delete();
           return redirect()->back()->with('success', 'Successfully deleted this academic year');

        }
    }
}
