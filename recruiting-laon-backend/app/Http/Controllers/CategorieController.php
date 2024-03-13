<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller {
    //create
    public function store(Request $request){
        $categorie = new Categorie();
        $categorie->name = $request->name;
        $categorie->save();
        return $categorie;
    }

    //get
    public function show($id) {
        $categorie = Categorie::findorFail($id);
        return $categorie;
    }

    //delete
    public function destroy($id) {
        $categorie = Categorie::findorFail($id);
        if($categorie){
            $categorie->delete();
            return $categorie;
        }
    }

    //list
    public function list(){
        $categories = Categorie::all();
        return $categories;
    }

    //update
    public function update($id, Request $request){
        $categorie = Categorie::findorFail($id);
        if($categorie) {
            $categorie->name = $request->name;
            $categorie->save();
            return $categorie;
        }
    }
}
