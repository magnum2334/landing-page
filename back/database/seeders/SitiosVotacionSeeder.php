<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SitiosVotacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->sitios_votacion();
    }
    public function sitios_votacion(){
        $sitios_votacion = [
            ['id' => 1, 'sitio' => 'Santa Isabel' , 'sector'=> 'sector A'],
            ['id' => 2, 'sitio' => 'Santa Juana' , 'sector'=> 'sector B'],
            ['id' => 3, 'sitio' => 'Manuel Elkin' , 'sector'=> 'sector C'],
            ['id' => 4, 'sitio' => 'Cristo Rey' , 'sector'=> 'sector D'],
            ['id' => 5, 'sitio' => 'Guadalupe' , 'sector'=> 'sector E'],
        ];

        DB::table('sitios_votacion')->insert($sitios_votacion);
    }
}
