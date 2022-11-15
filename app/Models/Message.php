<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Message extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function messageable(){
        return $this->morphTo();
    }

    public function contents(){
        return $this->belongsToMany(User::class, 'message_user', 'message_id', 'user_id')->withPivot('content')->withTimestamps();
    }
    public function toUserInfo(){
        return $this->hasOne(User::class, 'id', 'to_user_id');
    }
}
