<?php
namespace App\Http\Traits;
use App\Models\AcademicYear;
use Carbon\Carbon;

trait AllAcademicYearTrait{
    public function getallAcademicYear(){
        return AcademicYear::all()->map(fn($m) => [
            'id' => $m->id,
            'start_end' => $m->start. ' - '. $m->end,
            'description' => $m->created_at->format('M d Y'). ', ' . $m->created_at->diffForHumans() .' created by '. $m->user->name,
            'records' => $m->yearLevel->count() <= 1 ? $m->yearLevel->count() . ' Record' : $m->yearLevel->count(). ' Records',
        ]);
    }
}

