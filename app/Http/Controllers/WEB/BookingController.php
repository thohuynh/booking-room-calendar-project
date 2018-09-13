<?php

namespace App\Http\Controllers\WEB;

use App\Events\CreateBooking;
use App\Services\UserService;
use Validator;
use Illuminate\Http\Request;
use App\Services\BookingService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;

class BookingController extends BaseController
{
    protected $bookingService;
    protected $userService;

    public function __construct()
    {
        $this->userService = app(UserService::class);
        $this->bookingService = app(BookingService::class);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cycle' => 'required',
            'roomId' => 'required',
            'description' => 'required',
            'dayOfBook' => 'required',
            'dayStart' => 'required',
            'dayEnd' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->error($validator->errors(), 400);
        } else {
            try {
                $cycle = $request->input('cycle');
                $roomId = $request->input('roomId');
                $userId = Auth::id();
                $description = $request->input('description');
                $dayOfBook = $request->input('dayOfBook');
                $hourStart = $request->input('start');
                $hourEnd = $request->input('end');
                $dayStart = $request->input('dayStart');
                $day = $dayStart;
                $dayCreateWeek = $dayOfBook;
                $dayEnd = $request->input('dayEnd');

                if (strpos($cycle, 'cycleDay') !== false) {
                    for ($i = strtotime($dayStart); $i <= strtotime($dayEnd); $i = $i + 86400) {
                        $checkWeekend = $this->bookingService->checkWeekend($dayStart);
                        if ($checkWeekend == 0) {
                            $idListCreate[] = 'sdasd';
                        } else {
                            $idListCreate[] = $this->bookingService->findIdCreate(
                                $dayStart,
                                $hourStart,
                                $hourEnd
                            );
                        }
                        $dayStart = date('Y-m-d', strtotime($dayStart) + (86400));
                    }

                    for ($a = 0; $a < count($idListCreate); $a++) {
                        $checkTime = $this->bookingService->checkTimeBooking(
                            $day,
                            $hourStart,
                            $hourEnd
                        );
                        if ($checkTime == 1) {
                            if ($idListCreate[$a] != null) {
                                $booking1[] = null;
                            } else {
                                $booking[] = $this->bookingService->store(
                                    $roomId,
                                    $userId,
                                    $description,
                                    $day,
                                    $hourStart,
                                    $hourEnd,
                                    $cycle
                                );
                            }
                        } else {
                            $booking1[] = null;
                        }

                        $day = date('Y-m-d', strtotime($day) + (86400));
                    }
                } elseif (strpos($cycle, 'cycleWeek') !== false) {
                    $checkWeekend = $this->bookingService->checkWeekend($dayOfBook);
                    if ($checkWeekend == 0) {
                        $result = null;
                        return $this->error($result, 403);
                    } else {
                        for ($i = 0; $i <= 50; $i++) {
                            $idListCreate[] = $this->bookingService->findIdCreate(
                                $dayOfBook,
                                $hourStart,
                                $hourEnd
                            );
                            $dayOfBook = date('Y-m-d', strtotime($dayOfBook) + (7 * 86400));
                        }

                        for ($a = 0; $a < count($idListCreate); $a++) {
                            $checkTime = $this->bookingService->checkTimeBooking(
                                $dayCreateWeek,
                                $hourStart,
                                $hourEnd
                            );
                            if ($checkTime == 1) {
                                if ($idListCreate[$a] != null) {
                                    $booking1[] = null;
                                } else {
                                    $booking[] = $this->bookingService->store(
                                        $roomId,
                                        $userId,
                                        $description,
                                        $dayCreateWeek,
                                        $hourStart,
                                        $hourEnd,
                                        $cycle
                                    );
                                }
                            } else {
                                $booking1[] = null;
                            }

                            $dayCreateWeek = date('Y-m-d', strtotime($dayCreateWeek) + (7 * 86400));
                        }
                    }
                } else {
                    $checkWeekend = $this->bookingService->checkWeekend($dayOfBook);
                    if ($checkWeekend == 0) {
                        $idCreate = 'sdasd';
                    } else {
                        $idCreate = $this->bookingService->findIdCreate(
                            $dayOfBook,
                            $hourStart,
                            $hourEnd
                        );
                    }

                    $checkTime = $this->bookingService->checkTimeBooking(
                        $dayOfBook,
                        $hourStart,
                        $hourEnd
                    );

                    if ($checkTime == 1) {
                        if ($idCreate != null) {
                            $result = null;
                            return $this->error($result, 500);
                        } else {
                            $booking[] = $this->bookingService->store(
                                $roomId,
                                $userId,
                                $description,
                                $dayOfBook,
                                $hourStart,
                                $hourEnd,
                                $cycle
                            );
                        }
                    } else {
                        $booking1[] = null;
                    }
                }

                if ($booking) {
                    $result['type'] = $cycle;
                    $result['userId'] = Auth::id();
                    $result['booking'] = $booking;
                    $result['nameOfUser'] = Auth::user()->name;

                    return $this->success($result);
                } else {
                    $result = null;
                    return $this->error($result, 500);
                }
            } catch (Exception $e) {
                Log::error($e->getMessage());
            }
        }
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cycle' => 'required',
            'description' => 'required',
            'dayOfBook' => 'required',
            'start' => 'required',
            'end' => 'required',
            'startOld' => 'required',
            'endOld' => 'required',
            'dayOfBookOld' => 'required',
            'idUserOfBook' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->error($validator->errors(), 400);
        } else {
            $cycle = $request->input('cycle');
            $dateNow = date('Y-m-d');
            $dayOfBook = date("Y-m-d", strtotime($request->input('dayOfBook')));
            $day = $dayOfBook;
            $userId = $request->input('idUserOfBook');
            $descriptionBook = $request->input('description');
            $hourStartBookNew = $request->input('start');
            $hourendBookNew = $request->input('end');
            $startOld = $request->input('startOld');
            $endOld = $request->input('endOld');
            $dayOfBookOld = $request->input('dayOfBookOld');
            $cycleUpdateDay = "cycleDay".$descriptionBook;
            $cycleUpdateWeek = "cycleWeek".$descriptionBook;
            $cycleUpdateSingle = "cycleSingle".$descriptionBook;
            $dayWhere = $dayOfBookOld;
            if ((Auth::id() == $userId) && (strtotime($dateNow) <= strtotime($dayOfBook))) {
                try {
                    if (strpos($cycle, 'cycleDay') !== false) {
                        for ($i = 0; $i <= 50; $i++) {
                            $checkWeekend1 = $this->bookingService->checkWeekend($dayWhere);
                            if ($checkWeekend1 == 0) {
                                $idListUpdate[] = null;
                            } else {
                                $idListUpdate[] = $this->bookingService->findIdUpdate(
                                    $dayWhere,
                                    $startOld,
                                    $endOld,
                                    $cycle
                                );
                            }
                            $dayWhere = date('Y-m-d', strtotime($dayWhere) + (86400));
                        }

                        for ($a=0; $a < count($idListUpdate); $a++) {
                            $checkTime = $this->bookingService->checkTimeBooking(
                                $day,
                                $hourStartBookNew,
                                $hourendBookNew
                            );
                            if ($checkTime == 1) {
                                if ($idListUpdate[$a] != null) {
                                    $checkWeekend = $this->bookingService->checkWeekend($day);
                                    if ($checkWeekend == 0) {
                                        $booking[] = null;
                                    } else {
                                        $booking[] = $this->bookingService->update(
                                            $idListUpdate[$a],
                                            $descriptionBook,
                                            $day,
                                            $hourStartBookNew,
                                            $hourendBookNew,
                                            $cycleUpdateDay
                                        );
                                    }
                                } else {
                                    $booking1[] = null;
                                }
                            } else {
                                $booking1[] = null;
                            }

                            $day = date('Y-m-d', strtotime($day) + (86400));
                        }

                        $result['booking'] = $booking;
                        $result['nameOfUser'] = Auth::user()->name;
                        return $this->success($result);
                    } elseif (strpos($cycle, 'cycleWeek') !== false) {
                        $checkWeekend = $this->bookingService->checkWeekend($dayOfBook);
                        if ($checkWeekend == 0) {
                            $result = null;
                            return $this->error($result, 403);
                        } else {
                            for ($i = 0; $i <= 50; $i++) {
                                $idListUpdate[] = $this->bookingService->findIdUpdate(
                                    $dayWhere,
                                    $startOld,
                                    $endOld,
                                    $cycle
                                );
                                $dayWhere = date('Y-m-d', strtotime($dayWhere) + (7*86400));
                            }

                            for ($a=0; $a < count($idListUpdate); $a++) {
                                $checkTime = $this->bookingService->checkTimeBooking(
                                    $day,
                                    $hourStartBookNew,
                                    $hourendBookNew
                                );
                                if ($checkTime == 1) {
                                    if ($idListUpdate[$a] != null) {
                                        $booking[] = $this->bookingService->update(
                                            $idListUpdate[$a],
                                            $descriptionBook,
                                            $day,
                                            $hourStartBookNew,
                                            $hourendBookNew,
                                            $cycleUpdateWeek
                                        );
                                    } else {
                                        $booking1[] = null;
                                    }
                                } else {
                                    $booking1[] = null;
                                }

                                $day = date('Y-m-d', strtotime($day) + (7*86400));
                            }

                            $result['booking'] = $booking;
                            $result['nameOfUser'] = Auth::user()->name;
                            return $this->success($result);
                        }
                    } else {
                        $checkWeekend = $this->bookingService->checkWeekend($dayOfBook);
                        if ($checkWeekend == 0) {
                            $result = null;
                            return $this->error($result, 403);
                        } else {
                            $idBookOld = $this->bookingService->findIdUpdate(
                                $dayWhere,
                                $startOld,
                                $endOld,
                                $cycle
                            );

                            if ($idBookOld != null) {
                                $checkTime = $this->bookingService->checkTimeBooking(
                                    $day,
                                    $hourStartBookNew,
                                    $hourendBookNew
                                );
                                if ($checkTime == 1) {
                                    $booking[] = $this->bookingService->update(
                                        $idBookOld,
                                        $descriptionBook,
                                        $day,
                                        $hourStartBookNew,
                                        $hourendBookNew,
                                        $cycleUpdateSingle
                                    );

                                    $result['booking'] = $booking;
                                    $result['nameOfUser'] = Auth::user()->name;
                                    return $this->success($result);
                                } else {
                                    $result = null;
                                    return $this->error($result, 500);
                                }
                            } else {
                                $result = null;
                                return $this->error($result, 500);
                            }
                        }
                    }
                } catch (Exception $e) {
                    Log::error($e->getMessage());
                    $result = null;
                    return $this->error($result, 500);
                }
            } else {
                $result = null;
                return $this->error($result, 500);
            }
        }
    }

    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cycle' => 'required',
            'dayOfBook' => 'required',
            'idUserOfBook' => 'required',
            'id' => 'required'
        ]);
        if ($validator->fails()) {
            $result = null;
            return $this->responseBookingRoom($result);
        } else {
            $cycle = $request->input('cycle');
            $type = $request->input('type');
            $dateNow = date('Y-m-d');
            $dayOfBook = $request->input('dayOfBook');
            $start = $request->input('start');
            $end = $request->input('end');
            $day = $dayOfBook;
            $userId = $request->input('idUserOfBook');

            if ((Auth::id() == $userId) && (strtotime($dateNow) <= strtotime($dayOfBook))) {
                if ($cycle == 'cycleDay') {
                    for ($i = 0; $i <= 50; $i++) {
                        $idDeleteForView[] = $this->bookingService->delete($userId, $day, $start, $end, $type);
                        $day = date('Y-m-d', strtotime($day) + (86400));
                    }
                } elseif ($cycle == 'cycleWeek') {
                    for ($i = 0; $i <= 50; $i++) {
                        $idDeleteForView[] = $this->bookingService->delete($userId, $day, $start, $end, $type);
                        $day = date('Y-m-d', strtotime($day) + (86400*7));
                    }
                } else {
                    $idDeleteForView[] = $this->bookingService->delete($userId, $day, $start, $end, $type);
                }

                $result = $idDeleteForView;

                return $this->responseBookingRoom($result);
            } else {
                $result = null;
                return $this->responseBookingRoom($result);
            }
        }
    }
}
