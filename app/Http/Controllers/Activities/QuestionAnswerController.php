<?php

namespace App\Http\Controllers\Activities;

use App\Exports\AllActivitiesExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\AllActivitiesTraits;
use App\Models\{QuestionAnswer, Activities as Activity, Modules};
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\AllQuestionAnswer;
use Illuminate\Support\Facades\Gate;

class QuestionAnswerController extends Controller
{
    //
    use AllActivitiesTraits;
    public function show($id)
    {
        return Inertia::render('Admin/Activities/AdminActivitiesShow', [
            'questions' => $this->getQuestionAnswerById($id),
            'selected_activities' => Activity::with('activiteable')->find($id),
            'students_answer' => $this->getStudentScoresById($id),
        ]);
    }
    public function isGivenUpdate(Request $request)
    {
        dd($request);
    }
    public function viewScores(Request $request, $id)
    {
        return Inertia::render('Teacher/Quizzes/ActivityShow', [
            'answers' => $this->getStudentAnswersById($request->selected_activity_id, $id),
            'user_score' => $this->getStudentAnswersScoreById($request->selected_activity_id, $id),
            'activity_id' => $request->selected_activity_id,
            'user_id' => $id
        ]);
    }
    public function exportResult($id)
    {
        return Excel::download(new AllQuestionAnswer($id), 'result.xlsx');
    }
    public function exportAllActivities($id)
    {
        return Excel::download(new AllActivitiesExport($id), 'all-activities.xlsx');
    }

    public function addPoints(Request $request)
    {
        $activity = Activity::find($request->activity_id);
        $activity->questionAnswer->find($request->selected_question)->respondence()->updateExistingPivot($request->user_id, ['is_essay' => $request->points_value]);
        $total = $activity->scores->find($request->user_id)->pivot->scores + $request->points_value;
        $activity->scores()->updateExistingPivot($request->user_id, ['scores' => $total]);
        return redirect()->back();
    }
    public function store(Request $request)
    {
        $attr = $request->validate([
            'question' => 'required|string',
            'answer' => 'required',
            'correct_answer' => 'required',
            'activity_id' => 'required|numeric'
        ]);
        if ($attr) {
            $activity = Activity::find($request->activity_id);

            if ($activity->section_id == null && Gate::allows('manage_superadmin_or_admin')) {
                $activity->questionAnswer()->create([
                    'question' => $request->question,
                    'answer' => $request->answer,
                    'correct_answer' => $request->correct_answer,
                ]);
                return redirect()->route('question-answer.show', $request->activity_id)->with('success', 'Successfully added new Question Items admin');
            } elseif ($activity->section_id != null && Gate::allows('manage_teacher')) {
                $activity->questionAnswer()->create([
                    'question' => $request->question,
                    'answer' => $request->answer,
                    'correct_answer' => $request->correct_answer,
                ]);
                return redirect()->route('question-answer.show', $request->activity_id)->with('success', 'Successfully added new Question Items teacher');
            } else {
                return redirect()->route('question-answer.show', $request->activity_id)->with('warning', 'You are not Allowed to add a new Question');
            }
        }
    }
    public function destroy(Request $request, $id)
    {
        $activity = Activity::find($request->current_id);
        $activity->questionAnswer()->find($id)->delete();
        if ($activity) {
            return redirect()->route('question-answer.show', $request->current_id)->with('success', 'Sucessfully delete 1 Question Item');
        }
    }
    //given quizz
    public function update(Request $request, $id)
    {
        $activity = Activity::find($id);
        $activity->update([
            'given' => $request->given
        ]);
        return redirect()->back();
    }
}
