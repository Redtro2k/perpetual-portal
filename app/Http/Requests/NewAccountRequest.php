<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;

class NewAccountRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|string|max:255|unique:users',
            'firstname' => 'required',
            'lastname' => 'required',
            'middlename' => 'required',
            'password' => 'required',
            'gender' => 'required',
            'roles' => 'required',
            'birthdate' => 'required|date|before_or_equal: '.Carbon::now()->subYears(7)->format('Y-m-d')
        ];
    }
}
