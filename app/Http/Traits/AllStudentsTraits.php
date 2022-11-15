<?php

namespace App\Http\Traits;

use App\Models\User;

trait AllStudentsTraits
{
    public function getStudentSubjectByAuth($id = null)
    {
        if ($id == null) {
            $check = auth()->user()->section->first();
        } else {
            $check = User::find($id)->section->first();
        }
        //all subjects
        if ($check) {
            $ifExist = $check->sectioneable->subjects->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'content' => $m->description,
                'image' => $m->getFirstMedia('subject')->getUrl(),
                'topics' => $m->modules->count()
            ]);
            $adviser = $check->adviser_user->name;
            $yearlevel = $check->sectioneable->first();
            $collection = ([
                'subjects' => $id == null ? $ifExist : $ifExist->count(),
                'adviser' => $adviser,
                'yearlevel' => $yearlevel->name,
                'academicyear' => $yearlevel->schoolYear->first()->start . ' - ' . $yearlevel->schoolYear->first()->end
            ]);
            return $collection;
        } else {
            return null;
        }
    }
}
