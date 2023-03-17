<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuario;

class PassportAuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            "nombre" => "required",
            "apellido"=> "required",
            "email"=> "required|email",
            "password"=> "required|min:8",
            "dirección" => "required"
        ]);

        $userdata = Usuario::create([
            "nombre" => $request->nombre,
            "apellido" => $request->apellido,
            "email" => $request->email,
            "password" => bcrypt($request->password),
            "dirección" => $request->dirección
        ]);

        $token = $userdata->createToken("LaravelAuthApp")->accessToken;

        return response() -> json(["token" => $token, "user" => $userdata], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        // Guardamos en un arreglo los datos del usuario.
        $userdata = [
            'email' => $request->email,
            'password'=> $request->password
        ];

        // Validamos los datos y además mandamos como un segundo parámetro la opción de recordar el usuario.
        if(auth()->attempt($userdata))
        {
            // De ser datos válidos nos mandara a la bienvenida
            $token = auth()->user()->createToken("LaravelAuthApp")->accessToken;
            $userdata = auth()->user();
            return response()->json(["token" => $token, "user" => $userdata], 200);
        } else{
         // En caso de que la autenticación haya fallado manda un mensaje al formulario de login.
            return response()->json(["error" => "Unathorized"], 401);
        }
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
