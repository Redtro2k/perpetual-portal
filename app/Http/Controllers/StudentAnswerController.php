<?php

namespace App\Http\Controllers;

use App\Models\Activities;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\AllActivitiesTraits;
use App\Models\QuestionAnswer;

class StudentAnswerController extends Controller
{
    //
    use AllActivitiesTraits;
    public function show($id){
        $activity = Activities::find($id);
        return Inertia::render('Answers/AnswersShow', [
            'questions' => $this->getStudentResponseQuestionById($id, auth()->user()->id),
            'current_id' => $id,
            'check_already_taken' => $activity->scores->find(auth()->user()->id) ? true : false,
            'is_completed' => $activity->scores->find(auth()->user()->id) != null ? $activity->scores->find(auth()->user()->id)->pivot : false
        ]);
    }
    public function store(Request $request){
        $question = QuestionAnswer::find($request->question_id);
        $activity = Activities::find($request->activities_id);

        $question->respondence()->attach($request->user_id, ['response' => $request->responses]);
        if($question->correct_answer == "none"){
            return redirect()->back();
        }else{
            if($question->correct_answer == $question->respondence->find(auth()->user()->id)->pivot->response){
                $current_score = $activity->scores->find(auth()->user()->id)->pivot->scores + 1;
                $activity->scores()->updateExistingPivot(auth()->user()->id, ['scores' => $current_score]);
                return redirect()->back();
            }else{
                return redirect()->back();
            }
        }
    }
}

