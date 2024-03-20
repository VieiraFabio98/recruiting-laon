<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


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

  public function login(Request $request) {
    $user = User::where('email', $request->email)->first();

    if($user) {
      if(Hash::check($request->password, $user->password)) {
        return response()->json([
          'status' => '200',
          'message' => 'Usuário logado com sucesso.',
          'user' => $user
        ], 200);
      } 
    }
    return response()->json([
      'status' => '422',
      'message' => 'Email ou Senha incorretos.'
  ], 403);
  }
}