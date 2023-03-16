<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categorias;
use App\Models\Producto;
use Illuminate\Http\Request;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categorias = Categorias::all();
        return $categorias;
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
        $categorias = new Categorias();
        $categorias->nombre = $request->nombre;
        $categorias->descripcion = $request->descripcion;

        $categorias->save();
        return $categorias;
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
        $categorias = Categorias::find($id);
        return $categorias;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param \App\Models\Categorias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categorias $categorias)
    {
        //
        $categorias = Categorias::find($request->id);
        $categorias->nombre = $request->nombre;
        $categorias->descripcion = $request->descripcion;
        $categorias->save();
        return $categorias;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Categorias $categorias)
    {
        //
        $categorias = Categorias::destroy($request->id);
        return $categorias;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Producto
     * @return \Illuminate\Http\Response
     */
    public function show_product_by_category (Request $request, Categorias $categorias){
        /*$program->students;*/
        $category = Categorias::with('productos')->find($request->get('categoria_id'));
        return $category;
    }
}