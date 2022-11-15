<?php

namespace App\Http\Controllers;

use App\Models\Modules;
use Illuminate\Http\Request;
use App\Http\Traits\AllModulesTrait;

class FilesController extends Controller
{
    //
    use AllModulesTrait;
    public function store(Request $request){
        $request->validate([
            'id' => 'required|numeric',
            'name' => 'required|string',
            'content' => 'required|mimes:pdf|max:10000',
        ]);
        if($request->hasFile('content')){
            $modules = Modules::find($request->id);
            $modules->addMediaFromRequest('content')->usingName($request->name)->toMediaCollection('files');
            if($modules){
                return redirect()->route('modules.edit', $request->id)->with('sucess', 'Successfully uploaded modules');
            }
        }
    }

    public function edit($id){
        dd($id);
    }

    public function destroy(Request $request, $id){
        $this->deleteModuleFileById($request->current_modules, $id);
        return redirect()->route('modules.edit', $request->current_modules)->with('success', 'Successfully deleted files');
    }
}
