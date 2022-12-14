<?php

namespace App\Http\Traits;

use App\Models\Modules;
use App\Models\Section;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Gate;


trait AllModulesTrait
{
    public function findModuleById($id)
    {
        $module = Modules::find($id);
        return collect([
            'id' => $module->id,
            'title' => $module->name,
            'created_by' => $module->user()->first()->name,
            'quarter' => $module->grading,
            'description' => $module->description,
            'created_at' => $module->created_at->format('M d Y') . ' on ' . $module->created_at->diffForHumans(),
            'files' => $module->getMedia('files')->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'url' => $m->getUrl()
            ])
        ]);
    }
    public function deleteModuleFileById($current, $id)
    {
        $module = Modules::find($current);
        return $module->getMedia('files')->find($id)->delete();
    }

    public function getActivityById($id)
    {
        $m = Modules::find($id);
        $attr = $m->activities;
        if (Gate::allows('manage_superadmin_or_admin') || Gate::allows('manage_teacher')) {
            return $attr->whereIn('section_id', [auth()->user()->teacherSubject != null ? auth()->user()->teacherSubject->id : false, null])->map(fn ($h) => [
                'id' => $h->id,
                'title' => $h->title,
                'start' => $h->start,
                'due' => $h->due,
                'status' => $h->belongsToSections != null ? $h->belongsToSections->name : 'Repost',
                'questions' => $h->questionAnswer->count(),
                'checked' => $h->start >= Carbon::now() && $h->due >= Carbon::now(),
            ]);
        }elseif(Gate::allows('manage_student')){
            return Modules::find($id)->activities()->where('given', 1)->get()->map(fn ($h) => [
                'id' => $h->id,
                'title' => $h->title,
                'start' => $h->start,
                'due' => $h->due,
                'status' => $h->belongsToSections != null ? $h->belongsToSections->name : 'Repost',
                'questions' => $h->questionAnswer->count(),
                'checked' => $h->start >= Carbon::now() && $h->due >= Carbon::now(),
            ]);
        }
    }
}
