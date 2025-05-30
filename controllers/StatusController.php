<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Status;

class StatusController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getStatus(){

        $status = Status::all();

    return response()->json($grupos);
    
    }

    public function createStatus(Request $request){
        $statusCriado = Status::create([
            'nome_status' => $request->nome_status,
        ]);
        return response() ->json($statusCriado);
    }

    public function atualizarStatus(Request $request){
        $status = Status::find($request -> id_status)
        ->update($request->only(['nome_status']));
        if (!$status){
            return response()->json(['erro' => 'Status não encontrado'], 404);
        }
        return response()->json(['mensagem' => 'Status atualizado com sucesso']);
    }
}
}

/*https://localhost/HotelBemVago/criar-status?nome_status=Vago */