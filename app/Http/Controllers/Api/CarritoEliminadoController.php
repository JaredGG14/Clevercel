<?php

namespace App\Http\Controllers;

use App\Models\carrito_eliminado;
use Illuminate\Http\Request;
use App\Models\Carrito;

class CarritoEliminadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        $carrito = Carrito::find($request->user);
        $carrito_d = new carrito_eliminado();

        $carrito_d -> 
        $carrito_d -> imagen = $carrito -> imagen;
        $carrito_d-> producto = $carrito-> producto;
        $carrito_d-> memoria = $carrito-> memoria;
        $carrito_d-> color = $carrito-> color;
        $carrito_d-> descripcion = $carrito-> descripcion;
        $carrito_d-> precio = $carrito-> precio;
        $carrito_d-> cantidad = $request-> cantidad;
        $carrito_d-> estado = 'Eliminado';
        $carrito_d-> usuario_email = $request->user; //Testing
        $carrito_d-> save();

        return $carrito_d;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\carrito_eliminado  $carrito_eliminado
     * @return \Illuminate\Http\Response
     */
    public function show(carrito_eliminado $carrito_eliminado)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\carrito_eliminado  $carrito_eliminado
     * @return \Illuminate\Http\Response
     */
    public function edit(carrito_eliminado $carrito_eliminado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\carrito_eliminado  $carrito_eliminado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, carrito_eliminado $carrito_eliminado)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\carrito_eliminado  $carrito_eliminado
     * @return \Illuminate\Http\Response
     */
    public function destroy(carrito_eliminado $carrito_eliminado)
    {
        //
    }
}
