<?php

namespace App\Services;

use App\Repositories\Room\RoomRepository;

class RoomService extends BaseService
{
    protected $roomRepo;

    public function __construct()
    {
        $this->roomRepo = app(RoomRepository::class);
    }

    public function getAll()
    {
        return $this->roomRepo->all();
    }

    public function responseRoomForView($allRoom)
    {
        foreach ($allRoom as $room) {
            $result[$room['id']]['id'] = $room['id'];
            $result[$room['id']]['title'] = $room['display_name'];
            $result[$room['id']]['description'] = $room['description'];
            $result[$room['id']]['eventColor'] = $room['color'];
        }
        return $result;
    }

    public function create($name, $displayName, $description, $hasProjectors, $hasBoard, $color)
    {
        $attributes = [
            'name' => $name,
            'display_name' => $displayName,
            'description' => $description,
            'has_projectors' => $hasProjectors,
            'has_board' => $hasBoard,
            'color' => $color,
        ];

        return $this->roomRepo->create($attributes);
    }

    public function update($id, $name, $displayName, $description, $hasProjectors, $hasBoard, $color)
    {
        $where = [
            ['id', '=', $id]
        ];
        $attributes = [
            'name' => $name,
            'display_name' => $displayName,
            'description' => $description,
            'has_projectors' => $hasProjectors,
            'has_board' => $hasBoard,
            'color' => $color,
        ];
        return $this->roomRepo->updateWhere($attributes, $where);
    }

    public function delete($id)
    {
        $where = [
            ['id', '=', $id],
        ];
        $this->roomRepo->deleteWhere($where);
    }

    public function countRoom()
    {
        $where = [
            ['id', '>=', '0']
        ];

        $count = $this->roomRepo->countWhere($where);
        return $count;
    }
}
