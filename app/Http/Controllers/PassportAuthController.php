<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;


class PassportAuthController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'nombre' => 'required',
            'apellido'=> 'required',
            'email'=> 'required|email',
            'password'=> 'required|min:8',
            'dirección' => 'required',
        ]);

        //nullable

        /** 
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        } */

        $user = Usuario::create([
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'dirección' => $request->dirección,
        ]);

        $token = $user->createToken('LaravelAuthApp')->accessToken;
        return response()->json(['token' => $token,'user' => $user], 200);
    }

    public function login(Request $request)
    {
        if (auth()->attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            $user = auth()->user();
            $token = $user->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token' => $token,'user' => $user], 200);
        } else {
            return response()->json(['error' => 'Unathorized'], 401);
        }
    }

}