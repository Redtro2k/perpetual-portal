<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\News\{CommentController, LikeController, PostController};
use App\Http\Controllers\Schools\{SchoolController, CustomController};
use App\Http\Controllers\{AcademicController, DashboardController, FilesController, ModulesController, NewAccountController, SectionController, StudentAnswerController, StudentSubjectController, SubjectAssignTeacherController, SubjectController, SubjectOwnedContoller, SyncingController, UserController, YearLevelController, YearLevelSectionController};
use App\Http\Controllers\Activities\QAEController;
use App\Http\Controllers\Activities\QuestionAnswerController;
use App\Http\Controllers\Invoke\AddRulesController;
use App\Http\Controllers\Invoke\AddSubjectToYearController;
use App\Http\Controllers\Invoke\ComputeScoresController;
use App\Http\Controllers\Invoke\StartActivityController;
use App\Http\Controllers\Teachers\TeacherController;
use App\Models\AcademicYear;
use App\Models\Schools\School;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Http\Request;



Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/help-center', function () {
    return Inertia::render('LandingPage/HelpCenter');
});
Route::get('/about', function () {
    return Inertia::render('LandingPage/About');
})->name('about');
Route::get('/contact-us', function () {
    return Inertia::render('LandingPage/Contact');
})->name('contact_us');
Route::get('/school-information', function () {
    return Inertia::render('LandingPage/SchoolInformation');
})->name('school_information');



Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/like', LikeController::class, ['only' => ['store', 'destroy']]);
    Route::resource('/post', PostController::class, ['only' => ['store', 'destroy']]);
    Route::resource('/comment', CommentController::class, ['only' => ['show', 'destroy', 'index', 'store']]);
    Route::resource('/school', SchoolController::class, ['except' => ['show']]);

    Route::middleware('can:manage_superadmin_or_admin')->group(function () {
        //invokeable
        Route::post('/add_subject', AddSubjectToYearController::class)->name('add-subject');
        Route::post('/add_role', AddRulesController::class)->name('add-role');

        Route::controller(UserController::class)->group(function(){
            Route::get('/manage-user/{show_user?}', 'index')->name('manage-user.index');
            Route::get('/download-all-user', 'exporting')->name('manage-user.download-all-user');
            Route::get('/download-all-student', 'exportAllStudent')->name('manage-user.download-all-student');
            Route::get('/download-all-teacher', 'exportAllTeacher')->name('manage-user.download-all-teacher');

        });

        Route::resource('/mange-user', UserController::class, ['only' => ['store', 'show']]);
        Route::resource('/teachers', TeacherController::class, ['only' => ['store', 'index', 'create', 'edit', 'show']]);
        Route::resource('/sync-ay', SyncingController::class, ['only' => ['index', 'store']]);


        Route::controller(SubjectAssignTeacherController::class)->group(function () {
            Route::post('assign_teacher', 'assignTeacher')->name('assign_teacher.store');
        });
        Route::resource('/yearlevel', YearLevelController::class, ['only' => ['index', 'store', 'edit', 'destroy']]);
        Route::resource('/academic-year', AcademicController::class, ['only' => ['index', 'edit', 'store', 'destroy']]);
        Route::resource('/new-account', NewAccountController::class, ['only' => ['create', 'store']]);
        Route::resource('/files', FilesController::class, ['only' => ['store', 'destroy']]);
        Route::resource('/enrolled-student', YearLevelSectionController::class, ['only' => ['store', 'edit', 'destroy']]);
        Route::resource('/subject', SubjectController::class, ['only' => ['store', 'destroy', 'update']]);


        Route::controller(YearLevelSectionController::class)->group(function () {
            Route::post('add-student', 'add')->name('add-student.add');
            Route::delete('remove-student/{id}', 'remove')->name('remove-student.remove');
        });
    });
    Route::resource('/subject', SubjectController::class, ['only' => ['index']]);



    Route::middleware(['checkteacheroradmin'])->group(function() {
        Route::resource('/files', FilesController::class, ['only' => ['store', 'destroy']]);
        Route::resource('/owned-subject', SubjectOwnedContoller::class, ['only' => ['show', 'destroy']]);
        Route::resource('/question-answer', QuestionAnswerController::class, ['only' => ['show', 'store', 'destroy', 'update']]);
        Route::resource('/qae', QAEController::class, ['only' => ['store', 'destroy']]);
        Route::controller(QuestionAnswerController::class)->group(function() {
            Route::get('activities-result/{id}', 'exportResult')->name('activities-result.result');
            Route::post('activity-deploy', 'isGivenUpdate')->name('deploy-activity');
        });
    });

    Route::resource('/modules', ModulesController::class, ['only' => ['edit']])->middleware('checkallroles');


    Route::middleware('can:manage_teacher')->group(function () {
        Route::controller(SubjectController::class)->group(function () {
            Route::get('/teacher/subject/{id}', 'show')->name('teacher_subject.show');
        });
        Route::resource('/modules', ModulesController::class, ['only' => ['store']]);
        Route::get('view-student/{id}', [QuestionAnswerController::class, 'viewScores'])->name('view-student');
        Route::post('add-points', [QuestionAnswerController::class, 'addPoints'])->name('add-points');
        Route::get('view-all-result/{id}', [QuestionAnswerController::class, 'exportAllActivities'])->name('view-all-activities');
    });
    Route::middleware('can:manage_student')->group(function() {
        Route::resource('student-subject', StudentSubjectController::class, ['only' => ['show']]);
        Route::resource('student-taking-activities', StudentAnswerController::class, ['only' => ['show', 'store']]);
    });

    Route::post('/compute', ComputeScoresController::class)->name('compute');
    Route::post('/start-activity', StartActivityController::class)->name('start-activity');
    Route::controller(UserController::class)->group(function(){
        Route::get('/find-people/{find_user?}/{selected_user?}', 'findPeople')->name('find-people');
        Route::get('/create-conversation/{find_user?}/{isOpen?}', 'createConvertion')->name('inbox');
        Route::post('create-conversation', 'storeConvertion')->name('inbox.store');
        Route::post('reply-conversation', 'replyConversation')->name('inbox.reply');
    });
    Route::resource('/modules', ModulesController::class, ['only' => ['create', 'store', 'destroy', 'update']])->middleware('checkteacheroradmin');
});
