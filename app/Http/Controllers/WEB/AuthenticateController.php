<?php

namespace App\Http\Controllers\WEB;

use App\Http\Controllers\BaseController as BaseController;
use App\Http\Requests\LoginRequest;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticateController extends BaseController
{
    protected $userService;

    public function __construct()
    {
        $this->userService = app(UserService::class);
    }

    public function getLogin()
    {
        return view('login');
    }

    public function postLogin(LoginRequest $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $credentials = [
            'email' => $email,
            'password' => $password,
        ];

        if (Auth::attempt($credentials)) {
            if (Auth::user()->hasRole('super-admin')) {
                return redirect()->route('admin');
            }

            return redirect()->route('home');
        } else {
            return redirect()->back()
                ->withInput()
                ->withErrors($request->messages());
        }
    }

    public function logout()
    {
        session()->forget('slack_token');
        Auth::logout();
        return redirect()->route('loginIndex');
    }

    public function loginSlack(Request $request)
    {
        if ($request->input('error')) {
            return redirect()->route('loginIndex');
        } else {
            $code = $request->input('code');
            $info = $this->userService->getInfoSlack($code);
            if (isset($info)) {
                $authUser = $this->userService->findOrCreateUserSlack($info);
                Auth::login($authUser);

                if (Auth::check()) {
                    return redirect()->route('home');
                } else {
                    return redirect()->route('loginIndex');
                }
            } else {
                return redirect()->route('loginIndex');
            }
        }
    }
}
