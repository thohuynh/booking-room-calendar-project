<?php

namespace App\Traits;

trait ResponseTraits
{
    public function success($data)
    {
        return $this->response(true, $data, 200, 'Successful');
    }

    public function error($message, $code)
    {
        return $this->response(false, '', $code, $message);
    }

    private function response($status, $data, $code, $message)
    {
        return response()->json([
            'status' => $status,
            'data' => $data,
            'code' => $code,
            'message' => $message,
        ]);
    }

    public function responseBookingRoom($data)
    {
        if ($data) {
            $result = $data;
        } else {
            $result = false;
        }

        return response()->json($result);
    }

    public function responseAdmin($data)
    {
        if ($data) {
            $result = $data;
        } else {
            $result = false;
        }

        return response()->json($result);
    }
}
