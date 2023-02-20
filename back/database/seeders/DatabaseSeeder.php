<?php

namespace Database\Seeders;
use App\Models\Barrio;
use App\Models\sitio_votacion;
use App\Models\Comuna;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Seeder;
use League\Csv\Reader;

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
                "id" => 1,
            ],
            [
                "id" => 2,
            ],
            [
                "id" => 3,
            ],
            [
                "id" => 4,
            ],
            [
                "id" => 5,
            ],
            [
                "id" => 6,
            ],
            [
                "id" => 7,
            ],
            [
                "id" => 8,
            ],
            [
                "id" => 9,
            ],
            [
                "id" => 10,
            ],
            [
                "id" => 11,
            ],
            [
                "id" => 12,
            ],
            [
                "id" => 13,
            ],
            [
                "id" => 14,
            ],
            [
                "id" => 15,
            ],

        ];
        DB::table('comunas')->insert($data);
        $cvs =  Reader::createFromPath('database/seeders/barrios-comunas.csv', 'r');

        $cvs->setheaderOffset(0);
        $records = $cvs->getRecords();

        foreach ($records as $r ) {
         $data = [
          'name' => $r['name'],
          'comuna_id' => $r['comuna_id'],
         ];

         Barrio::insert($data);
        }


        $cvs =  Reader::createFromPath('database/seeders/Divipole-DOSQUEBRADAS.csv', 'r');

        $cvs->setheaderOffset(0);
        $records = $cvs->getRecords();

        foreach ($records as $r ) {
            if($r['municipio'] == 'DOSQUEBRADAS' && $r['Puesto Bloqueado'] != 'Puesto Bloqueado'){
                $data = [
                    'puesto' => $r['puesto'],
                    'direccion' => $r['dirección'],
                    'mesas' => $r['mesas'],
                    'comuna_id' => $r['comuna'],
                ];
            sitio_votacion::insert($data);
        }   }

        // $data = [
        //     [
        //         "name" => '16457299336217d88d0ea10',
        //         "email" => 'adminDevpsJuanPa@devps.com',
        //         "password"  => '$2y$10$EDR8Eped/v2QP.BAp71neeA23UnLsYIwBd8NC0sCdZjBe4PLHH/SG',
        //     ]
        // ];
        // DB::table('users')->insert($data);
    }
}
