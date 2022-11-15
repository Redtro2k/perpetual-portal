<?php

namespace App\Http\Controllers\Activities;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Modules;

class QAEController extends Controller
{
    //
    public function store(Request $request){
        $attr = $request->validate([
            'title' => 'required|string',
            'dates' => 'required'
        ]);
        if($attr){
            $module = Modules::find($request->module_id);
            $module->activities()->create([
                'title' => $request->title,
                'start' => date('Y-m-d H:i:s', strtotime($request->dates[0])),
                'due' => date('Y-m-d H:i:s', strtotime($request->dates[1])),
            ]);
            return redirect()->route('modules.edit', $request->module_id)->with('success', 'Successfully creating new Activities');
        }
    }

    public function destroy(Request $request, $id){
        $module = Modules::find($request->current_modules);
        if($module){
            $module->activities->find($id)->delete();
            return redirect()->route('modules.edit', $request->current_modules)->with('success', 'Successfully Deleted Activities');
        }
    }
}
