<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categorias;
use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = Producto::all();
        return $productos;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'categoria_id' => 'required',
            'producto'=> 'required',
            'precio'=> 'required',
            'stock'=> 'required'
        ]);

        $producto = new Producto();
        $producto -> categoria_id = $request-> categoria_id;
        $producto -> imagen = $request-> imagen;
        $producto -> producto = $request-> producto;
        $producto -> memoria = $request-> memoria;
        $producto -> color = $request-> color;
        $producto -> descripcion = $request-> descripcion;
        $producto -> precio = $request-> precio;
        $producto -> stock = $request-> stock;
        $producto->save();

        return $producto;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @param \App\Models\Producto $producto
     * @return \Illuminate\Http\Response
     */
    public function show($categoria)
    {
        $productos = Producto::where('categoria_id', '=', $categoria)->get();
        return $productos;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @param \App\Models\Producto $producto
     * @return \Illuminate\Http\Response
     */
    public function detalle($producto)
    {
        $productos = Producto::where('id', '=', $producto)->get();
        return $productos;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function edit(Producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        $producto = Producto::find($request->id);
        $producto -> categoria_id = $request-> categoria_id;
        $producto -> imagen = $request-> imagen;
        $producto -> producto = $request-> producto;
        $producto -> memoria = $request-> memoria;
        $producto -> color = $request-> color;
        $producto -> descripcion = $request-> descripcion;
        $producto -> precio = $request-> precio;
        $producto -> stock = $request-> stock;

        $producto->save();
        return $producto;
        
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Producto $producto)
    {
        $producto = Producto::destroy($request->id);
        
        echo 'El registro se ha eliminado correctamente ';
    }
}