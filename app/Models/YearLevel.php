<?php

namespace App\Models;

use App\Models\Admin\AvailableSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class YearLevel extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function subjects(){
        return $this->belongsToMany(AvailableSubject::class);
    }

    public function user(){
        return $this->hasMany(User::class, 'id', 'create_by');
    }

    public function schoolYear(){
        return $this->belongsToMany(AcademicYear::class);
    }
    public function section(){
        return $this->morphMany(Section::class, 'sectioneable');
    }
}
