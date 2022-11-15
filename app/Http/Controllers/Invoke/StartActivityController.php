<?php

namespace App\Http\Controllers\Invoke;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Traits\AllActivitiesTraits;

class StartActivityController extends Controller
{
    //
    use AllActivitiesTraits;
    public function __invoke(Request $request)
    {
         $this->generateScoring($request->activities_id);
         return redirect()->back();
    }
}
