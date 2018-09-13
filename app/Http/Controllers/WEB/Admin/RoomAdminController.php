<?php

namespace App\Http\Controllers\WEB\Admin;

use App\Services\BookingService;
use Illuminate\Http\Request;
use App\Entities\Room;
use App\Services\RoomService;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\RoomAdmin;
use App\Http\Controllers\BaseController as BaseController;

class RoomAdminController extends BaseController
{
    protected $roomService;
    protected $bookingService;

    public function __construct()
    {
        $this->roomService = app(RoomService::class);
        $this->bookingService = app(BookingService::class);
    }

    public function index()
    {
        $rooms = $this->roomService->getAll();
        return view('admin.room.room-list', compact('rooms', $rooms));
    }

    public function create()
    {
        return view('admin.room.create-room');
    }

    public function store(RoomAdmin $request)
    {
        try {
            $name = $request->input('nameCreateRoom');
            $displayName = $request->input('disNameCreateRoom');
            $description = $request->input('desCreateRoom');
            $hasProjectors = $request->input('projectorsCreateRoom');
            if (!$hasProjectors) {
                $hasProjectors = 0;
            }

            $hasBoard = $request->input('boardCreateRoom');
            if (!$hasBoard) {
                $hasBoard = 0;
            }

            $color = $request->input('colorCreateRoom');

            $role = $this->roomService->create(
                $name,
                $displayName,
                $description,
                $hasProjectors,
                $hasBoard,
                $color
            );
            session()->flash('mess-success', 'success');

            return back();
        } catch (Exception $e) {
            session()->flash('mess-error', 'There was an error !!!');
            Log::error($e->getMessage());
        }
    }

    public function show(Room $room)
    {
        //
    }

    public function edit(Room $room)
    {
        //
    }

    public function update(Request $request, $id)
    {
        try {
            $name = $request->input('name');
            $displayName = $request->input('displayName');
            $description = $request->input('description');
            $hasProjectors = $request->input('hasProjectors');
            $hasBoard = $request->input('hasBoard');
            $color = $request->input('color');
            $room = $this->roomService->update(
                $id,
                $name,
                $displayName,
                $description,
                $hasProjectors,
                $hasBoard,
                $color
            );
            return $this->responseAdmin($room);
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }

    public function destroy($id)
    {
        if ($id) {
            $room = $this->roomService->delete($id);
            $booking = $this->bookingService->removeBookByRoom($id);
            $result = true;
        } else {
            $result = null;
        }
        return $this->responseAdmin($result);
    }
}
