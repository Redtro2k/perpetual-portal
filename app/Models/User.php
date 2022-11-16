<?php

namespace App\Models;

use App\Models\Admin\AvailableSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Permission\Traits\HasRoles;
use App\Models\Post;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Cache;
use Spatie\Activitylog\LogOptions;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasProfilePhoto, Notifiable, TwoFactorAuthenticatable, HasRoles, LogsActivity;
    protected $fillable = [
        'name',
        'email',
        'user_name',
        'password',
        'gender'
    ];
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $appends = [
        'profile_photo_url',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('user')
            ->logOnly(['name', 'email'])
            ->logOnlyDirty()
            ->setDescriptionForEvent(fn (string $eventName) => "This User has been {$eventName}");
    }
    public function posts(){
        return $this->morphMany(Post::class, 'postable');
    }
    public function isOnline(){
        return Cache::has('user-is-online' . $this->id);
    }
    public function assignSubjects(){
        return $this->belongsToMany(AvailableSubject::class)->withPivot('token');
    }
    public function section(){
        return $this->belongsToMany(Section::class);
    }

    public function activities()
    {
        return $this->belongsToMany(Activities::class)->withPivot('scores', 'is_complete');
    }

    public function message(){
        return $this->morphMany(Message::class, 'messageable');
    }
}
