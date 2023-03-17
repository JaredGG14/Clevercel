<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carrito_actualizado extends Model
{
    use HasFactory;
    public function productos(){
        return $this -> hasMany(Producto::class);
    }
}
