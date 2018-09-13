<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->truncate();

        DB::table('roles')->insert([
            'name'           => 'super-admin',
            'display_name'          => 'Super Admin',
            'description'       => 'Manage website',
        ]);

        DB::table('roles')->insert([
            'name'           => 'user',
            'display_name'          => 'User',
            'description'       => 'User of website',
        ]);
    }
}
