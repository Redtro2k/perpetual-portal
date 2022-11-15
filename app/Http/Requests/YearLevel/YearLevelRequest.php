<?php

namespace App\Http\Requests\YearLevel;

use Illuminate\Foundation\Http\FormRequest;

class YearLevelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'yearlevel' => 'required|string',
            'type' => 'required',
            'academicYear' => 'required|numeric'
        ];
    }
}
