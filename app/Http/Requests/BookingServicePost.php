<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingServicePost extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'dayOfBook' => 'required',
            'idUserOfBook' => 'required|numeric',
            'id' => 'required|numeric',
            'description' => 'required',
            'start' => 'required',
            'end' => 'required',
            'roomId' => 'required|numeric',
        ];
    }
}
