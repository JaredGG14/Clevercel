<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoriasController;
use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\Api\UsuarioController;
use App\Http\Controllers\Api\CarritoController;
use App\Http\Controllers\CarritoEliminadoController;
use App\Http\Controllers\PassportAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Auth
Route::post('/registro', [PassportAuthController::class, 'register']);
Route::post('/login', [PassportAuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/carrito_index/{id}', [CarritoController::class, 'index']);
Route::get('/category_index', [CategoriasController::class, 'index']);

Route::get('/product_index', [ProductoController::class, 'index']);
Route::get('/product_show/{categoria}', [ProductoController::class, 'show']);
Route::get('/product_detalle/{id}', [ProductoController::class, 'detalle']);

Route::get('/user_index', [UsuarioController::class, 'index']);

Route::get('/carrito_cantidad', [CarritoController::class, 'cantidad']);
Route::post('/carrito_add', [CarritoController::class, 'add']);
Route::post('/carrito_edit', [CarritoController::class, 'update']);
Route::post('/carrito_delete', [CarritoController::class, 'destroy']);
Route::post('/carrito_clear', [CarritoController::class, 'clear']);

Route::post('/carrito_delete_add', [CarritoEliminadoController::class, 'add']);


Route::middleware('auth:api')->group(
    function () {
        Route::post('category_store', [CategoriasController::class, 'store']);
        Route::post('category_update', [CategoriasController::class, 'update']);
        Route::post('category_delete', [CategoriasController::class, 'destroy']);
        
        Route::post('product_store', [ProductoController::class, 'store']);
        Route::post('product_update', [ProductoController::class, 'update']);
        Route::post('product_delete', [ProductoController::class, 'destroy']);

        Route::post('user_store', [UsuarioController::class, 'store']);
        Route::get('user_show', [UsuarioController::class, 'show']);
        Route::post('user_update', [UsuarioController::class, 'update']);
        Route::post('user_delete', [UsuarioController::class, 'destroy']);
    }
);