<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
class DashboardController extends Controller
{
    public function index(){
        $posts = Post::with(['like','comment'])->latest()->paginate(2)->through(fn($page) => [
            'post_id' => $page->id,
            'post_from' => $page->postable_id,
            'author_image' => $page->postable->profile_photo_url,
            'author_name' => $page->postable->name,
            'token' => $page->post_token,
            'title' => $page->title,
            'description' => $page->description,
            'audience' => $page->audience,
            'post_created_at' => $page->created_at,
            'comments' => $page->comment->count(),
            'like' => $page->like->map(fn($l) => [
                'like_id' => $l->id,
                'by' => $l->like_by
            ])
        ]);
        return Inertia::render('Users/Dashboard', [
            'posts' => $posts
        ]);
    }
}
