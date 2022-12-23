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
        'email',
        'sitio_votacion',
        'celular',
        'documento',
        'terminos'
    ];
}
