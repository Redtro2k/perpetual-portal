<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionAnswer extends Model
{
    use HasFactory;
    protected $casts = [
        'answer' => 'array'
    ];
    protected $guarded = [];

    public function question_answereable(){
        return $this->morphTo();
    }

    public function respondence(){
        return $this->belongsToMany(User::class)->withPivot('response', 'is_essay');
    }
}
