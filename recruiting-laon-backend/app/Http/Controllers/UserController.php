<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller {
  //create
  public function store(Request $request) {

    $userExists = User::where('email', $request->email)->first();
    if ($userExists) {
      return response()->json([
        'status' => '422',
        'message' => 'Usuário já cadastrado.'
      ], 422);
    };

    $user = new User();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->password = $request->password;
    $user->save();
    return $user;
  }
}