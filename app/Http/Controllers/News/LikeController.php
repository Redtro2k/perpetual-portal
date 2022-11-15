<?php

namespace App\Http\Controllers\News;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class LikeController extends Controller
{
    //
    public function store(Request $request){
        Post::find($request->id)->like()->create(['like_by' => auth()->user()->id]);
        return redirect()->back();
    }

    public function destroy($id){
        $like = Like::find($id)->delete();
        if($like){
            return redirect()->back();
        }else{
            return abort(400);
        }
    }
}
