<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Carrito;
use App\Models\carrito_actualizado;
use Illuminate\Http\Request;
use App\Models\Producto;
use App\Models\carrito_eliminado;


//use Darryldecode\Cart\Cart;
//use Stripe\Product;

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
    public function index($user)
    {
        $carrito_todos = Carrito::where('usuario_email', $user)->get();
        $carrito_activos = $carrito_todos->where('estado', 'Activo');
        return $carrito_activos;
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
        $carritos->imagen = $producto->imagen;
        $carritos->producto = $producto->producto;
        $carritos->memoria = $producto->memoria;
        $carritos->color = $producto->color;
        $carritos->descripcion = $producto->descripcion;
        $carritos->precio = $producto->precio;
        $carritos->cantidad = $request->cantidad;
        $carritos->estado = 'Activo';
        $carritos->usuario_email = $request->user; //Testing
        $carritos->save();

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

        $carrito_user = Carrito::where('usuario_email', $request->user)->get();
        
        foreach ($carrito_user as $carrito_arreglo) {
            $carrito_upd = new carrito_actualizado();
            $carrito_upd->imagen = $carrito_arreglo->imagen;
            $carrito_upd->producto = $carrito_arreglo->producto;
            $carrito_upd->memoria = $carrito_arreglo->memoria;
            $carrito_upd->color = $carrito_arreglo->color;
            $carrito_upd->descripcion = $carrito_arreglo->descripcion;
            $carrito_upd->precio = $carrito_arreglo->precio;
            $carrito_upd->cantidad = $carrito_arreglo->cantidad;
            $carrito_upd->estado = $carrito_arreglo->estado;
            $carrito_upd->usuario_email = $carrito_arreglo->user; //Testing
            $carrito_upd->save();
        }

        $carritos = Carrito::find($request->id);
        $carritos->cantidad = $request->cantidad;
        $carritos->save();
        return $carritos;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Carrito $carrito)
    {
        //Envía los productos a la tabla carritos_eliminados


        /*$carrito_d = new carrito_eliminado();
        $carrito_d->imagen = $carrito->imagen;
        $carrito_d->producto = $carrito->producto;
        $carrito_d->memoria = $carrito->memoria;
        $carrito_d->color = $carrito->color;
        $carrito_d->descripcion = $carrito->descripcion;
        $carrito_d->precio = $carrito->precio;
        $carrito_d->cantidad = $carrito->cantidad;
        $carrito_d->estado = 'Inactivo';
        $carrito_d->usuario_email = $request->user; //Testing */

        $carrito_user = Carrito::where('usuario_email', $request->user)->get();
        
        foreach ($carrito_user as $carrito_arreglo) {
            $carrito_d_h = new carrito_eliminado();
            $carrito_d_h->imagen = $carrito_arreglo->imagen;
            $carrito_d_h->producto = $carrito_arreglo->producto;
            $carrito_d_h->memoria = $carrito_arreglo->memoria;
            $carrito_d_h->color = $carrito_arreglo->color;
            $carrito_d_h->descripcion = $carrito_arreglo->descripcion;
            $carrito_d_h->precio = $carrito_arreglo->precio;
            $carrito_d_h->cantidad = $carrito_arreglo->cantidad;
            $carrito_d_h->estado = $carrito_arreglo->estado;
            $carrito_d_h->usuario_email = $request->user; //Testing
            $carrito_d_h->save();
        }

        $carrito_d = carrito_eliminado::find($request->id);
        $carrito_d -> estado = 'Inactivo';

        $carrito = Carrito::destroy($request->id);
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
