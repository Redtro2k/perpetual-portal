<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Schools\School;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\User;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Gate::define('manage_super_admin', function(User $user){
            return $user->hasRole('superadministrator') ? true : null;
        });
        Gate::define('manage_superadmin_or_admin', function(User $user){
            return $user->hasRole('superadministrator') || $user->hasRole('admin') ? true : null;
        });
        Gate::define('manage_teacher', function(User $user){
            return $user->hasRole('teacher') ? true : null;
        });
        Gate::define('manage_student', function(User $user){
            return $user->hasRole('student') ? true : null;
        });
        Gate::define('school_exist', function(){
            return School::all()->isEmpty();
        });
        //
    }
}
