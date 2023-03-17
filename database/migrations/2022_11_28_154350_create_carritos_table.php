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
        Schema::create('carritos', function (Blueprint $table) {
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
            $table->integer('no_carrito');
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
        Schema::dropIfExists('carritos');
    }
};


//INSERT INTO `productos` (`id`, `categoria_id`, `imagen`, `producto`, `memoria`, `color`, `descripcion`, `precio`, `stock`, `created_at`, `updated_at`) VALUES (NULL, '1', 'https://cdn.shopify.com/s/files/1/0614/2931/7862/products/SamsungGalaxyS20FE5GG781BDS128GB8GB_RAM_CloudNavy_300x300.jpg?v=1648897345', 'Samsung S20FE', '128gb', 'Navy Blue', 'Samsung perrón', '6999', '12', '2023-03-17 06:25:57', '2023-03-17 06:25:57')
