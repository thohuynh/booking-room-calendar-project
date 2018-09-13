<?php

namespace App\Http\Controllers\WEB\Admin;

use Illuminate\Http\Request;
use App\Entities\Booking;
use App\Entities\User;
use App\Services\BookingService;
use App\Http\Controllers\BaseController as BaseController;

class BookingAdminController extends BaseController
{
    protected $bookingService;

    public function __construct()
    {
        $this->bookingService = app(BookingService::class);
    }

    public function index()
    {
        $users = User::all();
        foreach ($users as $user) {
            $userOfBooking[$user->id] = $user;
        }

        $data = $this->bookingService->getBookingListForAdminView();
        return view('admin.booking.booking-list', ['data' => $data, 'userOfBooking' => $userOfBooking]);
    }

    public function create()
    {
        return view('admin.booking.create-booking');
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Booking $booking)
    {
        //
    }

    public function edit(Booking $booking)
    {
        //
    }

    public function update(Request $request, Booking $booking)
    {
        //
    }

    public function destroy($id)
    {
        if ($id) {
            $booking = $this->bookingService->deleteAdmin($id);
            $result = true;
        } else {
            $result = null;
        }
        return $this->responseAdmin($result);
    }
}
