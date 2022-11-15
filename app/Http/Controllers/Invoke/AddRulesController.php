<?php

namespace App\Http\Controllers\Invoke;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AddRulesController extends Controller
{
    public function __invoke(Request $request)
    {
       $user = User::find($request->id);
       $user->assignRole($request->roles);
       return redirect()->back();
    }
}
