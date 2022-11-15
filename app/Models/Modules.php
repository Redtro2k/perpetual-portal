<?php

namespace App\Models;

use App\Models\Admin\AvailableSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
class Modules extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    protected $guarded = [];
    public function subjects(){
        return $this->belongsToMany(AvailableSubject::class, 'available_subject_modules');
    }
    public function user(){
        return $this->hasMany(User::class, 'id', 'submitted_by');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('files');
    }

    public function activities(){
        return $this->morphMany(Activities::class, 'activiteable');
    }
}
