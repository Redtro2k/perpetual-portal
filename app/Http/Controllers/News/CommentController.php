<?php

namespace App\Http\Controllers\News;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Comment;
use App\Http\Requests\Comments\CommentRequest;

class CommentController extends Controller
{
    public function show($id){
        $post = Post::where('post_token', $id)->with(['like','comment'])->get()->map(fn($p) => [
            'post_id' => $p->id,
            'description'=> $p->description,
            'title'=> $p->title,
            'comments' => Comment::where('commentable_id', $p->id)->latest()->paginate(3)->through(fn($c) => [
                'person_id' => $c->id,
                'person_comment' => $c->description,
                'person_name' => $c->user->toArray(),
                'person_created' => $c->created_at
            ])->toArray(),
            'audience' => $p->audience,
            'likes' => $p->like->count(),
            'comment' => $p->comment->count()
            ])->first();
        return Inertia::render('Users/Comments/Show', [
            'contents' => $post
        ]);
    }

    public function store(CommentRequest $request){
        $attributes = $request->validated();
        $post = Post::find($attributes['token']);
        $post->comment()->create(['user_id' => auth()->user()->id, 'description' => $attributes['comment']]);
        if($post){
            return redirect()->back();
        }else{
            return abort(400);
        }
    }

    public function destroy($id){
        $comment = Comment::Find($id)->delete();
        if($comment){
            return redirect()->back();
        }else{
            return abort(400);
        }
    }
}
