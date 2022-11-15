<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\News\{CommentController, LikeController, PostController};
use App\Http\Controllers\Schools\{SchoolController, CustomController};
use App\Http\Controllers\{DashboardController, UserController};
use App\Http\Controllers\Teachers\TeacherController;
use App\Models\Schools\School;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/like', LikeController::class, ['only' => ['store', 'destroy']]);
    Route::resource('/post', PostController::class, ['only' => ['store', 'destroy']]);
    Route::resource('/comment', CommentController::class, ['only' => ['show', 'destroy', 'index', 'store']]);
    Route::resource('/school', SchoolController::class, ['only' => ['index', 'store', 'update', 'edit', 'create', 'destroy']]);
    Route::get('/manage-user/{show_user?}', [UserController::class, 'index'])->name('manage-user.index');
    Route::resource('/mange-user', UserController::class, ['only' => ['store', 'show']]);
    Route::resource('/teachers', TeacherController::class, ['only' => ['store', 'index', 'create', 'edit', 'show']]);
});
