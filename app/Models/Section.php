<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function sectioneable(){
        return $this->morphTo();
    }

    public function adviser_user(){
        return $this->hasOne(User::class, 'id', 'adviser_id');
    }

    public function students(){
        return $this->belongsToMany(User::class);
    }
}
