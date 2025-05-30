<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getUsuarios(){

        $usuarios = User::all();

    return response()->json($usuarios);
    }

    public function createUsuario(Request $request){
        $usuarioCriado = User::create([
            'nome' => $request->nome,
            'email' => $request->email,
            'data_nascimento' => $request->data_nascimento,
            'id_grupo' => $request->id_grupo,
        ]);
        return response() ->json($usuarioCriado);
    }

    public function atualizarUsuarios(Request $request){
        $usuario = User::find($request -> id_usuario)
        ->update($request->only(['nome', 'email', 'data_nascimento', 'id_grupo']));
        if (!$usuario){
            return response()->json(['erro' => 'Usuário não encontrado'], 404);
        }
        return response()->json(['mensagem' => 'Usuário atualizado com sucesso']);
    }
}

/* https://localhost/HotelBemVago/criar-usuarios?nome=carlos&email=carlos@gmail.com&data_nascimento=2007-06-27&id_grupo=3 */
