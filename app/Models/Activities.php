<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function activiteable(){
        return $this->morphTo();
    }

    public function questionAnswer(){
        return $this->morphMany(QuestionAnswer::class, 'question_answereable');
    }

    public function scores(){
        return $this->belongsToMany(User::class, 'activity_user', 'activity_id','user_id')->withPivot('scores', 'is_complete');
    }

    public function belongsToSections(){
        return $this->hasOne(Section::class, 'id', 'section_id');
    }
}
