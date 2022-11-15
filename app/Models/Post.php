<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Like;
use App\Modles\Comment;

class Post extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function postable(){
        return $this->morphTo();
    }

    public function like(){
        return $this->morphMany(Like::class, 'likeable');
    }

    public function comment(){
        return $this->morphMany(Comment::class, 'commentable');
    }
}
