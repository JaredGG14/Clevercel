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
        Schema::create('carrito_actualizados', function (Blueprint $table) {
            $table->id();
            $table->string('imagen',250)->nullable();
            $table->string('producto',100);
            $table->string('memoria',100)->nullable();
            $table->string('color',100);
            $table->string('descripcion',200);
            $table->integer('precio');
            $table->integer('cantidad');
            $table->string('estado', 50);
            $table->string('usuario_email', 500);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carrito_actualizados');
    }
};
