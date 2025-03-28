<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class UserController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getusuarios(){

        $usuarios =  
        [
            ["id" => "1", "nome" => "Sung Jin-Woo", "grupo" => "Mago"],
            ["id" => "2", "nome" => "Lee Minho", "grupo" => "Cavaleiro"],
            ["id" => "3", "nome" => "Kim Seojin", "grupo" => "Arqueiro"],
            ["id" => "4", "nome" => "Choi Seungjae", "grupo" => "Ladino"],
            ["id" => "5", "nome" => "Park Hyojin", "grupo" => "Mago"],
            ["id" => "6", "nome" => "Jang Miho", "grupo" => "Curandeiro"],
            ["id" => "7", "nome" => "Yoo Jin-hoo", "grupo" => "Guerreiro"],
            ["id" => "8", "nome" => "Han Taekwon", "grupo" => "Assassino"],
            ["id" => "9", "nome" => "Kang Minji", "grupo" => "Lançador de Facas"],
            ["id" => "10", "nome" => "Jin Wooseok", "grupo" => "Defensor"]
        ];

    return response()->json($usuarios);
}
}
