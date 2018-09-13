<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use App\Entities\Booking;

/**
 * App\Entities\Room
 *
 * @mixin \Eloquent
 * @property int $id
 * @property string $name
 * @property string $display_name
 * @property string|null $description
 * @property int $has_projectors
 * @property int $has_board
 * @property int $status
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereDisplayName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereHasBoard($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereHasProjectors($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entities\Room whereUpdatedAt($value)
 */
class Room extends Model
{
    protected $fillable = [
        'name',
        'display_name',
        'description',
        'has_projectors',
        'has_board',
        'status',
        'color',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'room_id', 'id');
    }
}
