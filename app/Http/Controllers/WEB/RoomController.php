<?php

namespace App\Http\Controllers\WEB;

use Illuminate\Http\Request;
use App\Services\RoomService;
use App\Http\Controllers\BaseController as BaseController;

class RoomController extends BaseController
{
    protected $roomService;

    public function __construct()
    {
        $this->roomService = app(RoomService::class);
    }
}
