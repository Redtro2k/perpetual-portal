<?php

namespace App\Models\Admin;

use App\Models\Modules;
use App\Models\YearLevel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class AvailableSubject extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('subject')->singleFile();
    }
    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb');
    }

    public function yearLevel(){
        return $this->belongsToMany(YearLevel::class);
    }

    public function modules(){
        return $this->belongsToMany(Modules::class, 'available_subject_modules');
    }
}
