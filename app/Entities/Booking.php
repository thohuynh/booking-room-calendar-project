<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Entities\Booking
 *
 * @mixin \Eloquent
 * @property int $id
 * @property int $room_id
 * @property int $user_id
 * @property string $description
 * @property string $day
 * @property string $hour_start
 * @property string $hour_end
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereDay($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereHourEnd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereHourStart($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereRoomId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Booking whereUserId($value)
 */
class Booking extends Model
{
    protected $fillable = [
        'room_id',
        'user_id',
        'description',
        'day',
        'hour_start',
        'hour_end',
        'type'
    ];
}
