<?php

namespace App\Http\Controllers\Activities;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Modules;
use Illuminate\Support\Carbon;

class QAEController extends Controller
{
    //
    public function store(Request $request){
        $attr = $request->validate([
            'title' => 'required|string',
            'dates' => 'required',
            'isCentrilized' => 'required|boolean'
        ]);

        if($attr){
            if($request->dates[0] <= Carbon::now() || $request->dates[1] <= Carbon::now()){
                return redirect()->route('modules.edit', $request->module_id)->with('warning', 'This schedule is Invalid');
            }else{
                $module = Modules::find($request->module_id);
                $module->activities()->create([
                    'title' => $request->title,
                    'start' => $request->dates[0],
                    'due' => $request->dates[1],
                    'section_id' => $request->isCentrilized == true ? auth()->user()->teacherSubject->id : null
                ]);
                return redirect()->route('modules.edit', $request->module_id)->with('success', 'Successfully creating new Activities');
            }
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
