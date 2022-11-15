<?php

namespace App\Http\Requests\School;

use Illuminate\Foundation\Http\FormRequest;

class SchoolRequest extends FormRequest
{
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
            'name' => 'required',
            'image' => 'nullable',
            'image.*' => 'mimes:jpeg,jpg,png|max:2048',
            'description' => 'required',
            'region' => 'required',
            'province' => 'required',
            'address' => 'required',
            'contact' => 'required|numeric'
        ];
    }
}
