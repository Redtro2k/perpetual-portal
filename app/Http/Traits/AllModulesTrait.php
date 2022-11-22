<?php

namespace App\Http\Traits;

use App\Models\Modules;
use Illuminate\Support\Carbon;

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
        'created_at' => $module->created_at->format('M d Y').' on '.$module->created_at->diffForHumans(),
        'files' => $module->getMedia('files')->map(fn($m) => [
            'id' => $m->id,
            'name' => $m->name,
            'url' => $m->getUrl()
        ])
    ]);
    }
    public function deleteModuleFileById($current, $id){
        $module = Modules::find($current);
        return $module->getMedia('files')->find($id)->delete();
    }

    public function getActivityById($id){
        $m = Modules::find($id);
        return $m->activities
        ->whereIn('section_id', [auth()->user()->section != null ? 'null' : auth()->user()->section->first()->id, null])
        ->map(fn($h) => [
            'id' => $h->id,
            'title' => $h->title,
            'start' => $h->start,
            'due' => $h->due,
            'questions' => $h->questionAnswer->count(),
            'checked' => $h->start >= Carbon::now() && $h->due >= Carbon::now(),
        ]);
    }
}
