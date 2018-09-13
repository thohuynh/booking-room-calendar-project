<?php

use Illuminate\Database\Seeder;

class BookingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bookings')->truncate();

        DB::table('bookings')->insert([
            'room_id' => '1',
            'user_id' => '1',
            'description' => 'No Description',
            'day' => '1996-11-24',
            'hour_start' => '01:00:00',
            'hour_end' => '05:00:00',
            'type' => 'cycleSingle',
        ]);
    }
}
