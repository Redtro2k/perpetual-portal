<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Schools\School;
use Illuminate\Support\Facades\Gate;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            //
            'checkLogged' => [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
            ],
            'config' => [
                'appName' => config('app.name'),
                'token' => csrf_token()
            ],
            'systemNotification' => [
                'school' => School::all()->first() == null ? true : false
            ],
            'layout' => [
                'online' => User::orderBy('last_seen', 'DESC')->limit(3)->get()->map(fn($u) => [
                    'name' => $u->name,
                    'role' => $u->roles->first()->name,
                    'image' => $u->profile_photo_url,
                    'online' => $u->isOnline()
                ])
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'warning' => fn () => $request->session()->get('warning'),
                'success' => fn () => $request->session()->get('success')
            ],
            'can' => auth()->check() ? [
                'manage_super_admin' => Gate::allows('manage_super_admin'),
                'school_existed' => Gate::allows('school_exist'),
                'admin_or_superadmin' => Gate::allows('manage_superadmin_or_admin'),
                'manage_teacher' => Gate::allows('manage_teacher'),
                'manage_student' => Gate::allows('manage_student')
            ] : false
        ]);
    }
}
