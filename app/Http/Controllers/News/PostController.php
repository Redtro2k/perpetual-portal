<?php

namespace App\Http\Controllers\News;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\PostRequest;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Like;

class PostController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        //
        $attribute = $request->validated();
        if($attribute){
            User::find(auth()->user()->id)->posts()->create(
                [
                    'title' => $attribute['title'],
                    'description' => $attribute['description'],
                    'audience' => $attribute['audience'],
                    'post_token' => Str::random(30)
                ]
            );
            return redirect()->route('dashboard');
        }
        else{
            return abort(400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $posts = Post::find($id);
        if($posts){
            $posts->like()->delete();
            $posts->delete();
            return redirect()->back();
        }else{
            return abort(400);
        }

    }
}
