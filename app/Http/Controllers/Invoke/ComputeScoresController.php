<?php

namespace App\Http\Controllers\Invoke;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Activities;

class ComputeScoresController extends Controller
{
    public function __invoke(Request $request)
    {
        $act = Activities::with('scores')->find($request->activities_id);
        $act->scores()->updateExistingPivot(auth()->user()->id, ['is_complete' => true]);
        return redirect()->back();
    }
}
