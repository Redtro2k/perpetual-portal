<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Traits\{AllSubjectTrait, AllYearLevelTrait};
use Inertia\Inertia;
use App\Models\YearLevel;

class SubjectOwnedContoller extends Controller
{
    //
    use AllSubjectTrait, AllYearLevelTrait;
    public function show($id){
      return Inertia::render('Admin/SubjectOwned/AdminSubjectOwnedShow', [
        'owned_subject' => $this->getOwnedSubjectById($id),
        'yearlevel' => $this->getFindYearLevel($id)
      ]);
    }
    public function destroy(Request $request, $id){
        $y = YearLevel::find($request->current_yearlevel);
        $y->subjects()->detach($id);
        return redirect()->route('owned-subject.show', $request->current_yearlevel)->with('success', 'Successfully detach that subjects');
    }
}
