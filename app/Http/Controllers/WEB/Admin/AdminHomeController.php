<?php

namespace App\Http\Controllers\WEB\Admin;

use App\Services\BookingService;
use App\Services\RoomService;
use App\Services\UserService;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as BaseController;

class AdminHomeController extends BaseController
{
    protected $bookingService;
    protected $roomService;
    protected $userService;

    public function __construct()
    {
        $this->bookingService = app(BookingService::class);
        $this->roomService = app(RoomService::class);
        $this->userService = app(UserService::class);
    }

    public function index(Request $request)
    {
        $sumBooking = $this->bookingService->countNewBooking();
        $countRoom = $this->roomService->countRoom();
        $countUserRegistrations = $this->userService->countUserRegistrations();
        return view('admin.index', [
                'sumBooking' => $sumBooking,
                'countRoom' => $countRoom,
                'countUserRegistrations' =>$countUserRegistrations
        ]);
    }
}
