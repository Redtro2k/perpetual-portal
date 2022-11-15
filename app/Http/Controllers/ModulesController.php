<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Admin\AvailableSubject;
use App\Models\Modules;
use App\Http\Requests\ModulesRequest;
use App\Http\Traits\AllModulesTrait;

class ModulesController extends Controller
{
    use AllModulesTrait;
    //
    public function create(Request $request){
        $subject = AvailableSubject::find($request->id);
        return Inertia::render('Admin/Modules/AdminAddModules', [
            'selected' => $subject
        ]);
    }
    public function store(ModulesRequest $request){
        $attr = $request->validated();
        if($request->validated()){
            $module = Modules::create([
                'name' => $request['name'],
                'description' => $request['description'],
                'grading' => $request['grading'],
                'submitted_by' => auth()->user()->id
            ]);
            $available = AvailableSubject::find($request['subject_id']);
            $available->modules()->attach($module->id);
            return redirect()->action([SubjectController::class, 'index'], ['id' => $request['subject_id']]);

        }
    }
    public function update(Request $request, $id){
        $attr = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'grading' => 'required'
        ]);
        if($attr){
            Modules::find($id)->update($attr);
            return redirect()->route('modules.edit', $id)->with('success', 'Successfully updated this module');
        }
    }
    public function edit($id){
        //
        return Inertia::render('Admin/Modules/AdminEditModules', [
            'selected' => $this->findModuleById($id),
            'activities' => $this->getActivityById($id),
        ]);
    }
    public function destroy($id){
        $mol = Modules::find($id);
        $getId = $mol->subjects->first()->id;
        $mol->delete();
        return redirect()->action([SubjectController::class, 'index'], ['id' => $getId]);
    }
}
