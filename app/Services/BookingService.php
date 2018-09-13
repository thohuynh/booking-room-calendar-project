<?php

namespace App\Services;

use App\Events\CreateBooking;
use App\Repositories\Booking\BookingRepository;
use App\Repositories\Room\RoomRepository;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BookingService extends BaseService
{
    protected $bookingRepo;
    protected $userService;
    protected $roomRepo;

    public function __construct()
    {
        $this->bookingRepo = app(BookingRepository::class);
        $this->roomRepo = app(RoomRepository::class);
        $this->userService = app(UserService::class);
    }

    public function getAll()
    {
        return $this->bookingRepo->all()->toArray();
    }

    public function store($roomId, $userId, $description, $day, $hourStart, $hourEnd, $cycle)
    {
        $attributes = [
            'room_id' => $roomId,
            'user_id' => $userId,
            'description' => $description,
            'day' => $day,
            'hour_start' => $hourStart,
            'hour_end' => $hourEnd,
            'type' => $cycle
        ];
        $book = $this->bookingRepo->create($attributes);
        $dataAlertAdmin['book'] = $book;
        $dataAlertAdmin['nameAuth'] = Auth::user()->name;
        event(new CreateBooking($dataAlertAdmin));

        return $book;
    }

    public function findIdUpdate($dayOld, $StartOld, $EndOld, $cycle)
    {
        $where = [
            ['user_id', '=', Auth::id()],
            ['day', '=', $dayOld],
            ['hour_start', '=', $StartOld],
            ['hour_end', '=', $EndOld],
            ['type', '=', $cycle]
        ];
        $bookOld = $this->bookingRepo->findWhere($where);

        if ($bookOld->isEmpty()) {
            $result = null;
        } else {
            $result = $bookOld->pluck('id');
        }

        return $result;
    }

    public function findIdCreate($dayOld, $StartOld, $EndOld)
    {
        $where = [
            ['user_id', '<>', Auth::id()],
            ['day', '=', $dayOld],
            ['hour_start', '=', $StartOld],
            ['hour_end', '=', $EndOld]
        ];
        $bookOld = $this->bookingRepo->findWhere($where);

        if ($bookOld->isEmpty()) {
            $result = null;
        } else {
            $result = $bookOld->pluck('id');
        }

        return $result;
    }

    public function update($id, $description, $day, $start, $end, $type)
    {
        $where = [
            ['id', '=', $id]
        ];

        $attributes = [
            'day' => $day,
            'description' => $description,
            'hour_start' => $start,
            'hour_end' => $end,
            'type' => $type
        ];

        $this->bookingRepo->updateWhere($attributes, $where);

        $book = $this->bookingRepo->firstWhere($where);

        return $book;
    }

    public function responseBookingForView($allBooking)
    {
        $dateNow = date('Y-m-d');
        foreach ($allBooking as $booking) {
            $nameOfUser = $this->userService->getName($booking['user_id']);
            $result[$booking['id']]['id'] = $booking['id'];
            $result[$booking['id']]['resourceId'] = $booking['room_id'];
            $result[$booking['id']]['description'] = $booking['user_id']."*#*".$booking['description']."*#*".$booking['type']."-----".$booking['day']."/".$booking['hour_start']."/".$booking['hour_end'];
            $result[$booking['id']]['start'] = $booking['day'] . "T" . $booking['hour_start'];
            $result[$booking['id']]['end'] = $booking['day'] . "T" . $booking['hour_end'];
            $result[$booking['id']]['title'] = $nameOfUser." : \n ".$booking['description'];
            $result[$booking['id']]['overlap'] = false;

            if (strtotime($dateNow) > strtotime($booking['day'])) {
                $result[$booking['id']]['editable'] = false;
            } else {
                $result[$booking['id']]['editable'] = true;
            }
        }

        return $result;
    }

    public function delete($userId, $day, $start, $end, $type)
    {
        $where = [
            ['user_id', '=', $userId],
            ['day', '=', $day],
            ['hour_start', '=', $start],
            ['hour_end', '=', $end],
            ['type', '=', $type]
        ];
        $book = $this->bookingRepo->firstWhere($where);
        $this->bookingRepo->deleteWhere($where);
        return $book;
    }

    public function removeBookByRoom($idRoom)
    {
        $where = [
            ['room_id', '=', $idRoom]
        ];
        $this->bookingRepo->deleteWhere($where);
    }

    public function getBookingListForAdminView()
    {
        $bookings = $this->roomRepo->with('bookings')->get();
        return $bookings;
    }

    public function checkTimeBooking($dayOfBook, $hourStart, $hourEnd)
    {
        $dateNow = date('Y-m-d');
        $dayNow = strtotime($dateNow);
        $dayBook = strtotime($dayOfBook);
        $start = strtotime($hourStart);
        $end = strtotime($hourEnd);
        if (($end <= $start) || ($start >= $end) || ($dayNow > $dayBook)) {
            return 0;
        } else {
            $whereBook1 = [
                ['user_id', '<>', Auth::id()],
                ['day', '=', $dayOfBook],
                ['hour_start', '<', $hourStart],
                ['hour_end', '>', $hourStart],
                ['hour_end', '<', $hourEnd]
            ];
            $book1 = $this->bookingRepo->findWhere($whereBook1);

            $whereBook2 = [
                ['user_id', '<>', Auth::id()],
                ['day', '=', $dayOfBook],
                ['hour_start', '>', $hourStart],
                ['hour_start', '<', $hourEnd],
                ['hour_end', '>', $hourEnd]
            ];
            $book2 = $this->bookingRepo->findWhere($whereBook2);

            $whereBook3 = [
                ['user_id', '<>', Auth::id()],
                ['day', '=', $dayOfBook],
                ['hour_start', '>', $hourStart],
                ['hour_start', '<', $hourEnd],
                ['hour_end', '<', $hourEnd],
                ['hour_end', '>', $hourStart]
            ];
            $book3 = $this->bookingRepo->findWhere($whereBook3);

            $whereBook4 = [
                ['user_id', '<>', Auth::id()],
                ['day', '=', $dayOfBook],
                ['hour_start', '=', $hourStart],
                ['hour_end', '=', $hourEnd]
            ];
            $book4 = $this->bookingRepo->findWhere($whereBook4);

            $whereBook5 = [
                ['user_id', '<>', Auth::id()],
                ['day', '=', $dayOfBook],
                ['hour_start', '<', $hourStart],
                ['hour_end', '>', $hourEnd]
            ];
            $book5 = $this->bookingRepo->findWhere($whereBook5);

            if (($book1->isNotEmpty())
                || ($book2->isNotEmpty())
                || ($book3->isNotEmpty())
                || ($book4->isNotEmpty())
                || ($book5->isNotEmpty())) {
                return 0;
            } else {
                return 1;
            }
        }
    }

    public function countNewBooking()
    {
        $dateNow = date('Y-m-d');
        $where = [
            ['created_at', '>=', $dateNow]
        ];

        $count = $this->bookingRepo->countWhere($where);
        return $count;
    }

    public function deleteAdmin($id)
    {
        $where = [
            ['id', '=', $id],
        ];
        $this->bookingRepo->deleteWhere($where);
    }

    public function checkWeekend($day)
    {
        if (date('w', strtotime($day)) == 0 || date('w', strtotime($day)) == 6) {
            return 0;
        } else {
            return 1;
        }
    }
}
