<?php

namespace App\Http\Traits;

use App\Models\Activities;

trait AllActivitiesTraits
{
    public function getQuestionAnswerById($id)
    {
        $activities = Activities::find($id);
        return $activities->questionAnswer->map(fn ($m) => [
            'id' => $m->id,
            'question' => $m->question,
            'choices' => implode(', ', $m->answer),
            'correct_answer' => $m->correct_answer
        ]);
    }
    public function getStudentResponseQuestionById($id, $student_id)
    {
        $activity = Activities::find($id);
        return $activity->questionAnswer->map(fn ($m) => [
            'id' => $m->id,
            'question' => $m->question,
            'available_answer' => $m->answer,
            'corrent_response' => $m->correct_answer,
            'answer' => $m->respondence->find($student_id) ? $m->respondence->find($student_id)->pivot->response : false
        ]);
    }
    public function generateScoring($activity_id)
    {
        $activities = Activities::find($activity_id);
        $attribute = $activities->scores->find(auth()->user()->id);
        if ($attribute == null) {
            return $activities->scores()->attach(auth()->user()->id, ['scores' => 0, 'is_complete' => false]);
        }
    }

    public function getStudentScoresById($activity_id)
    {
        return Activities::find($activity_id)->scores->map(fn ($m) => [
            'id' => $m->id,
            'name' => $m->name,
            'score' => $m->pivot->scores
        ]);
    }

    public function getStudentAnswersById($activity_id, $stud_id)
    {
        $activity = Activities::find($activity_id);
        return $activity->questionAnswer->map(fn ($m) => [
            'id' => $m->id,
            'question' => $m->question,
            'correct_answer' => $m->correct_answer,
            'student_answer' => $m->respondence()->find($stud_id)->pivot->response,
            'is_correct' => in_array("Essay", $m->answer) && $m->correct_answer == "none"
            ? implode([$m->respondence()->find($stud_id)->pivot->is_essay == null ? 'not graded' : '+'.$m->respondence()->find($stud_id)->pivot->is_essay])
            : implode([$m->respondence()->find($stud_id)->pivot->response == $m->correct_answer ? '+1' : '0'])
        ]);
    }

    public function getStudentAnswersScoreById($activity_id, $stud_id)
    {
        $activity = Activities::find($activity_id);
        return $activity->scores->find($stud_id);
    }
}
