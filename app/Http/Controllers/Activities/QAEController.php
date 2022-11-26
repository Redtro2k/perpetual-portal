<?php

namespace App\Http\Controllers\Activities;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Modules, Activities};
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Gate;


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
                $checkAdmin = Gate::allows('manage_teacher') == true ? auth()->user()->teacherSubject->id :  null;
                $module->activities()->create([
                    'title' => $request->title,
                    'start' => $request->dates[0],
                    'due' => $request->dates[1],
                    'section_id' => $request->isCentrilized == true ? null : $checkAdmin
                ]);
                return redirect()->route('modules.edit', $request->module_id)->with('success', 'Successfully creating new Activities');
            }
        }
    }
    public function migrateActivities(Request $request){
        $module = Modules::find($request->current_id);
        $getId = $module->activities()->create([
            'title' => $request->title,
            'start' => $request->dates[0],
            'due' => $request->dates[1],
            'section_id' => auth()->user()->teacherSubject->id
        ]);
        foreach($request->questions as $key => $item){
            $getId->questionAnswer()->create([
                'question' => $item['question'],
                'answer' =>  $item['choices'],
                'correct_answer' => $item['correct_answer'],
            ]);
        }
        return redirect()->to(route('modules.edit', $request->current_id))->with('success', 'successfully migrate '.$request->title.'.');
    }

    public function destroy(Request $request, $id){
        $module = Modules::find($request->current_modules);
        if($module){
            $checkifAdmin = $module->activities->find($id);
            if($checkifAdmin->section_id == null && Gate::allows('manage_superadmin_or_admin')){
                $checkifAdmin->delete();
                return redirect()->route('modules.edit', $request->current_modules)->with('success', 'Successfully Deleted Activities');
            }elseif($checkifAdmin->section_id != null && Gate::allows('manage_teacher')){
                $checkifAdmin->delete();
                return redirect()->route('modules.edit', $request->current_modules)->with('success', 'Successfully Deleted Activities');
            }
            else{
                return redirect()->route('modules.edit', $request->current_modules)->with('warning', 'You are not allowed to remove activities posted by the admin');
            }
        }
    }
}
