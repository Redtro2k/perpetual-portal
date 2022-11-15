<?php

namespace App\Http\Traits;

use App\Models\Section;

trait AllTeacherTraits
{
    public function getAllHandleSubjectById($id, $countableSubjects = false)
    {
        return Section::with('adviser_user')->whereHas('adviser_user', function ($q) use ($id, $countableSubjects) {
            $q->where('adviser_id', $id);
            })->get()->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'subjects' => !$countableSubjects ? $m->sectioneable->subjects->map(fn ($m) => [
                    'id' => $m->id,
                    'name' => $m->name,
                    'topics' => $m->modules->count(),
                    'content' => $m->description,
                ]) : $m->sectioneable->subjects->count()
            ]);
    }
}
