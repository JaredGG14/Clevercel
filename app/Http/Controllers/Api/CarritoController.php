<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Carrito;
use Illuminate\Http\Request;
use App\Models\Producto;

use Darryldecode\Cart\Cart;
use Stripe\Product;

class CarritoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    //Cambiar el query a que traiga los productos del usuario que tiene la sesión iniciada
    //que tenga el estado "Activo" y "Modificado"
    //con el ID del carrito seleccionado (aunque por el momento yo creo que vamos a usar uno activo)
    public function index()
    {
        //
        $carrito = Carrito::all();
        return $carrito;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        //Al mandar a agregar un producto que agregue el estado activo por default
        //Agregar qué usuario agregó el producto y ver de qué manera podemos agregar todo a un mismo carrito.
        $producto = Producto::find($request->id);
        $carritos = new Carrito();
        $carritos -> imagen = $producto -> imagen;
        $carritos -> producto = $producto-> producto;
        $carritos -> memoria = $producto-> memoria;
        $carritos -> color = $producto-> color;
        $carritos -> descripcion = $producto-> descripcion;
        $carritos -> precio = $producto-> precio;
        $carritos -> cantidad = $request-> cantidad;
        //$carritos -> Estado = 'Activo';
        $carritos -> save();

        return $carritos;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carrito $carritos)
    {
        //Actualizar solamente 
        $carritos = Carrito::find($request->id);
        $carritos -> cantidad = $request-> cantidad;
        $carritos -> save();
        return $carritos;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Carrito $carritos)
    {
        //
        $carritos = Carrito::destroy($request->id);
        echo "Producto eliminado";
    }

    /**
     * Quitar producto de stock cuando haga la compra
     *
     * @param  int  $id
     * @param \App\Models\Producto $producto
     * @return \Illuminate\Http\Response
     */
    public function clear(Request $request, Producto $producto)
    {
        $carrito = Carrito::find($request->id);
        $producto = Producto::find($request->id);
        $producto->stock = $producto->stock - $carrito->cantidad;

        $carritos = Carrito::destroyAll();
        echo "Carrito limpio";
    }
}
