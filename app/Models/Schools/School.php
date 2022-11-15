<?php

namespace App\Models\Schools;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class School extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded = [];
    //optimize all of image
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('school')->singleFile();
    }

    //add Activity logs
    public static function addActivity($event, $caused){
        return activity('school')
        ->causedBy($caused)
        ->event($event)
        ->log("This school was $event by :causer.name");
    }
    //via controllers
    public static function checkIfExist(){
        return static::all()->first() ? true : false;
    }
    public static function fetchSchool(){
        return static::all()->first();
    }

    public static function removeSchool(){
        return static::first()->delete();
    }
}
