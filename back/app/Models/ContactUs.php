<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombres',
        'apellidos',
        'barrio',
        'sitio_votacion',
        'celular',
        'documento',
        'lider' ,
        'ciudadano_dosque' ,
    ];
}
