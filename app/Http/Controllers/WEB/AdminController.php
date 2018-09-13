<?php

namespace App\Http\Controllers\WEB;

use Illuminate\Http\Request;
use App\Entities\User;
use App\Http\Controllers\BaseController as BaseController;

class AdminController extends BaseController
{
    public function index(Request $request)
    {
        return view('test');
    }
}
