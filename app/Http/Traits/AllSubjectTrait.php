<?php
namespace App\Http\Traits;
use App\Models\Admin\AvailableSubject;
use App\Models\YearLevel;
use Spatie\QueryBuilder\QueryBuilder;


trait AllSubjectTrait{
    //list of all subject
    public function getAllSubject(){
        return AvailableSubject::all()->map(fn($m) => [
            'name' => $m->name,
            'value_units' => $m->value_units,
            'term' => $m->term,
            'images' => $m->getFirstMedia('subject')->getUrl(),
        ]);
    }

    public function getSelectedAllSubjectModules($id){
        $subject = AvailableSubject::find($id);
        if($subject){
            return $subject->modules->map(fn($m) => [
                'id' => $m->id,
                'title' => $m->name,
                'content' => $m->description,
                'grading' => $m->grading,
                'posted_by' => $m->user->first()->name,
                'created_at' => $m->created_at->format('M d Y'),
                'handout' => $m->getMedia('files')->count()
            ]);
        }else{
            return null;
        }
    }

    public function getAllSubjects($id){
        return AvailableSubject::paginate(8, ["*"], 'subjects')->through(fn($m) => [
            'id' => $m->id,
            'name' => $m->name,
            'value_units' => $m->value_units,
            'term' => $m->term,
            'images' => $m->getFirstMedia('subject')->getUrl(),
            'already_added' => $m->yearlevel()->where('id', $id)->exists()
        ])->withPath(route('yearlevel.edit', $id))->onEachSide(5);

    }
    public function getOwnedSubjectById($id){
        return AvailableSubject::with('yearlevel')->wherehas('yearlevel')->paginate(8, ["*"], 'subjects')->through(fn($m) => [
            'id' => $m->id,
            'name' => $m->name,
            'value_units' => $m->value_units,
            'images' => $m->getFirstMedia('subject')->getUrl(),
            'already_added' => $m->yearlevel()->where('id', $id)->exists()
        ])->withPath(route('yearlevel.edit', $id))->onEachSide(5);
    }
    public function getAllYearlevelSectionCreated($id){
        $yl = YearLevel::find($id);
        return $yl->section->map(fn($m) => [
                'id' => $m->id,
                'adviser' => $m->adviser_user->gender == 'male' ? 'Mr. '. $m->adviser_user->name : 'Ms. '. $m->adviser_user->name,
                'section' => $m->name,
                'students' => $m->students->count() != 0 ? $m->students->count() : 'No Students',
        ]);
    }

    public function getSectionAndCheckIfExists($yearlevel, $section){
        $y = YearLevel::find($yearlevel);
        return $y->section->find($section)->students;
    }
}
