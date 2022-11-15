<?php

namespace App\Http\Controllers\Invoke;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\YearLevel;

class AddSubjectToYearController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $yearlevel = YearLevel::find($request->yearlevel_id);
        if($yearlevel){
            $yearlevel->subjects()->attach($request->subject_id);
            return redirect()->back()->with('success', 'Successfully Added this Subject');
        }else{
            return abort(404);
        }
    }
}
