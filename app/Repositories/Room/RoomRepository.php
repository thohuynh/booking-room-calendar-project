<?php

namespace App\Repositories\Room;

use App\Entities\Room;
use App\Repositories\BaseRepository;
use App\Repositories\Room\RoomRepositoryInterface;

class RoomRepository extends BaseRepository implements RoomRepositoryInterface
{
    public function getModel()
    {
        return Room::class;
    }
}
