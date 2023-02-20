<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sitio_votacions', function (Blueprint $table) {
            $table->id();

            $table->string('puesto');
            $table->string('direccion');
            $table->integer('mesas');
            $table->integer('comuna_id');

            $table->foreign('comuna_id')->references('id')->on('comunas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitio_votacions');
    }
};
