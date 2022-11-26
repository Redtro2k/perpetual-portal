<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            'title' => 'required',
            'description' => 'required',
            'audience' => 'required',
            'photo' => 'nullable',
            'photo.*' => 'mimes:jpeg,jpg,png|max:2048',
        ];
    }
}
