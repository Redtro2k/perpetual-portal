<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{YearLevel, Section};
use Inertia\Inertia;
use App\Http\Traits\{AllUsersTrait, AllSubjectTrait};

class YearLevelSectionController extends Controller
{
    //
    use AllUsersTrait, AllSubjectTrait;
    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'adviser_id' => 'required'
        ]);
        $yl = YearLevel::find($request->yearlevel_id);
        if(!$yl->section()->where('adviser_id', $request->adviser_id)->exists()){
            $yl->section()->create([
                'name' => $request->name,
                'adviser_id' => $request->adviser_id
            ]);
            return redirect()->route('yearlevel.edit', $request->yearlevel_id)->with('success', 'successfully assign adviser');
        }else{
            return redirect()->route('yearlevel.edit', $request->yearlevel_id)->with('warning', 'This teacher is already Adviser to other Section');
        }
    }
    public function destroy(Request $request, $id){
        $y = $this->getSectionAndCheckIfExists($request->current_yearlevel, $id);
        if($y->count() != 0){
            return redirect()->route('yearlevel.edit', $request->current_yearlevel)->with('warning', 'cannot delete because there all already student added, please clear before we proceed');
        }else{
            Section::find($id)->delete();
            return redirect()->route('yearlevel.edit', $request->current_yearlevel)->with('success', 'Successfully deleted this Sections');
        }

    }
    public function edit($id){
        return Inertia::render('Admin/Section/AdminSectionEdit', [
            'students' => $this->getAllStudentUser(),
            'owned_students' => $this->getStudentUserBySectionId($id),
            'selected_section' => $id
        ]);
    }
    public function add(Request $request){
        $section = Section::find($request->current_id);
        if($section){
            $section->students()->attach($request->item_current_id);
            return redirect()->route('enrolled-student.edit', $request->current_id)->with('success', 'Successfully Enrolled!');
        }
    }
    public function remove(Request $request, $id){
        $section = Section::find($request->section_id);
        if($section){
            $section->students()->detach($request->id);
            return redirect()->route('enrolled-student.edit', $request->section_id)->with('success', 'Successfully Remove!');
        }
    }
}
// quizzez
