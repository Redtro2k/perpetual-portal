<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{AcademicYear, YearLevel};

class SyncingController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Admin/SyncingAcademicYear/SyncingAY', [
            'academic_year' => AcademicYear::all()->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->start
            ])
        ]);
    }

    public function store(Request $request)
    {
        $attribute = $request->validate([
            'from_ay' => 'required',
            'to_ay' => 'required',
            'selected' => 'required'
        ]);
        if ($attribute) {
            $from = AcademicYear::whereStart($request->from_ay)->first();
            $to = AcademicYear::whereStart($request->to_ay)->first();
            $yl = YearLevel::with('schoolYear')->whereHas('schoolYear', function ($q) use ($from) {
                $q->where('id', $from->id);
            })->get();
            if (in_array("section", $request->selected)) {
                foreach ($yl as $f) {
                    $newList = $f->replicate();
                    $newList->save();
                    $newList->schoolYear()->attach($to->id);
                }
            }
            return redirect()->back()->with('success', 'Succesfully migrated to the new Academic Year');
        }
    }
}
