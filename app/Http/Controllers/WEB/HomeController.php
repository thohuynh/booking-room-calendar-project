<?php

namespace App\Http\Controllers\WEB;

use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Services\RoomService;
use App\Services\BookingService;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Facades\Auth;

class HomeController extends BaseController
{
    protected $roomService;
    protected $bookingService;

    public function __construct()
    {
        $this->roomService = app(RoomService::class);
        $this->bookingService = app(BookingService::class);
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $rooms = $this->roomService->getAll();
        if (Auth::user()->hasRole('super-admin')->isEmpty()) {
            $isAdmin = 0;
        } else {
            $isAdmin = 1;
        }

        return view('home', ['rooms' => $rooms, 'isAdmin' => $isAdmin]);
    }

    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'passwordOld' => 'required',
            'passwordNew' => 'required',
            'confirmPassword' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->error($validator->errors(), 400);
        } else {
            $passwordOld = $request->input('passwordOld');
            $passwordNew = $request->input('passwordNew');
            $confirmPassword = $request->input('confirmPassword');

            if (empty(Auth::user()->password)) {
                $user = Auth::user();
                $user->password = $passwordNew;
                $user->save();
                return $this->success(1);
            } else {
                if (!(Hash::check($passwordOld, Auth::user()->password))) {
                    $mess = "error !! Your current password does not matches with the password you provided. Please try again.";
                    return $this->error($mess, 500);
                } elseif (strcmp($passwordOld, $passwordNew) == 0) {
                    $mess = "error !! New Password cannot be same as your current password. Please choose a different password.";
                    return $this->error($mess, 500);
                } elseif ($confirmPassword != $passwordNew) {
                    $mess = "error !! Confirm password fail !!!";
                    return $this->error($mess, 500);
                } else {
                    $user = Auth::user();
                    $user->password = $passwordNew;
                    $user->save();
                    return $this->success(1);
                }
            }
        }
    }

    public function responseView(Request $request)
    {
        $allRoomDB = $this->roomService->getAll();
        $allBookingDB = $this->bookingService->getAll();
        $allRoom = $this->roomService->responseRoomForView($allRoomDB);
        $allBooking = $this->bookingService->responseBookingForView($allBookingDB);
        foreach ($allRoom as $val) {
            $room[] = $val;
        }

        foreach ($allBooking as $val1) {
            $booking[] = $val1;
        }

        $response['room'] = $room;
        $response['booking'] = $booking;
        $response['idAuth'] = Auth::id();
        $response['dateNow'] = date('Y-m-d').'T'.date('H:i:s');

        return $this->responseBookingRoom($response);
    }
}
