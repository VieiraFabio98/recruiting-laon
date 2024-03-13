<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/create-categorie", [CategorieController::class, 'store']);
Route::get("/get-categorie/{id}", [CategorieController::class, 'show']);
Route::delete("/delete-categorie/{id}", [CategorieController::class, 'destroy']);
Route::get("/list-categories", [CategorieController::class, 'list']);
Route::put("update-categorie/{id}", [CategorieController::class, 'update']);