<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        DB::table('users')->insert([
            'name'           => 'SuperAdmin',
            'email'          => 'admin@workhouse.me',
            'password'       => bcrypt('12345'),
            'images'       => '/images/admin.png',
            'remember_token' => str_random(10),
        ]);
    }
}
