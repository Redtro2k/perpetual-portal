<?php

namespace App\Http\Controllers;

use App\Models\YearLevel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Subject;
use App\Http\Requests\YearLevel\YearLevelRequest;
use App\Http\Traits\{AllYearLevelTrait, AllSubjectTrait, AllAcademicYearTrait, AllUsersTrait};



class YearLevelController extends Controller
{
    use AllYearLevelTrait, AllSubjectTrait, AllAcademicYearTrait, AllUsersTrait;
    public function index()
    {
        return Inertia::render('Admin/YearLevel/AdminYearLevelIndex', [
            'yearlevel' =>  $this->getAllYearLevelWithPaginate(),
            'academicyear' => $this->getallAcademicYear()
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
    public function store(YearLevelRequest $request)
    {
        $attribute = $request->validated();
        if($attribute){
            if($this->checkIfNameExist($request->academicYear , $request->yearlevel) == 0){
                YearLevel::create([
                    'name' => $request->yearlevel,
                    'type' => $request->type,
                    'create_by' => auth()->user()->id
                ])->schoolYear()->attach($request->academicYear);
                return redirect()->back()->with('success', 'This is Example');
            }else{
                return redirect()->back()->with('warning', $request->yearlevel.' already existed');
            }
        }
    }
    public function show(YearLevel $yearLevel)
    {

    }
    public function edit($id)
    {
        return Inertia::render('Admin/YearLevel/AdminYearLevelEdit', [
            'subjects' => $this->getAllSubjects($id),
            'yearlevel' => $this->getFindYearLevel($id),
            'year_created_by' => $this->getFindYearLevel($id)->user->first()->name,
            'teacher' => $this->getAllTeacherUser($id),
            'sections' => $this->getAllYearlevelSectionCreated($id),
        ])->with('warning', 'testing');
    }
    public function update(Request $request, YearLevel $yearLevel)
    {
        //
    }
    public function destroy($id)
    {
        $errors = [];
        $y = YearLevel::find($id);
        if($y->subjects->count() != 0 && $y->section->count() != 0){
            if($y->subjects->count() != 0){
                array_push($errors, "Subjects");
            }
            if($y->section->count() != 0){
                array_push($errors, "Section");
            }
            return redirect()->route('yearlevel.edit', $id)->with('warning', 'the '.implode(" and ", $errors). ' has already have records, please remove '. implode(" and ", $errors). ' records before you proceed.');
        }else{
            $y->delete();
            return redirect()->route('yearlevel.index');
        }
    }
}
