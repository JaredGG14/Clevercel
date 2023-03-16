<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = Usuario::all();
        return $usuarios;
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
        $usuario = new Usuario();
        $usuario -> rol = $request-> rol;
        $usuario -> nombre = $request-> nombre;
        $usuario -> apellido = $request-> apellido;
        $usuario -> email = $request-> email;
        $usuario -> password = $request-> password;
        $usuario -> dirección = $request-> dirección;
        $usuario->save();

        echo 'El registro se ha añadido correctamente';
    }

    /**
     * Display the specified resource.
     * @param  \App\Http\Requests $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $usuario = Usuario::whereEmail("IS LIKE", $request->email)->get();
        return $usuario;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function edit(Usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests  $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Usuario $usuario)
    {
        $usuario = Usuario::find($request->id);
        $usuario -> rol = $request-> rol;
        $usuario -> nombre = $request-> nombre;
        $usuario -> apellido = $request-> apellido;
        $usuario -> email = $request-> email;
        $usuario -> dirección = $request-> dirección;
        $usuario->save();
        echo 'La actualizacion se ha realizado correctamente ';

        return $usuario;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Usuario $usuario)
    {
        $usuario = Usuario::destroy($request -> id);
        
        echo 'El registro se ha eliminado correctamente ';
    }
}
