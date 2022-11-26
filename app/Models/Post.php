<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Like;
use App\Models\Comment;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;



class Post extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

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

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb');
    }
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('posts')->singleFile();
    }
}
