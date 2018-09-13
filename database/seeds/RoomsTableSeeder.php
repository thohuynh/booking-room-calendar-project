<?php

use Illuminate\Database\Seeder;

class RoomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rooms')->truncate();

        DB::table('rooms')->insert([
            'name' => 'R1',
            'display_name' => 'Room 1',
            'description' => 'No Description',
            'color' => '#26A65B',
        ]);

        DB::table('rooms')->insert([
            'name' => 'R2',
            'display_name' => 'Room 2',
            'description' => 'No Description',
            'color' => '#E87E04',
        ]);
    }
}
