<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                "name" => '16457299336217d88d0ea10',
                "email" => 'adminDevpsJuanPa@devps.com',
                "password"  => '$2y$10$EDR8Eped/v2QP.BAp71neeA23UnLsYIwBd8NC0sCdZjBe4PLHH/SG',
            ]
        ];
        DB::table('users')->insert($data);
    }
}
