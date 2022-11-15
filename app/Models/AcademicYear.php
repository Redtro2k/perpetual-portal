<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function yearLevel(){
        return $this->belongsToMany(YearLevel::class);
    }

    public function user(){
        return $this->hasOne(User::class, 'id', 'create_by');
    }
}
