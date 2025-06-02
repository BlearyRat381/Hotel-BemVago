<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Quarto;

class QuartoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getQuarto(){

        $quartos = Quarto::all();

    return response()->json($quartos);
    }

    public function createQuarto(Request $request){
        $quartoCriado = Quarto::create([
            'num_quarto' => $request->num_quarto,
            'valor_quarto' => $request->valor_quarto,
        ]);
        return response() ->json($quartoCriado);
    }
    public function atualizarQuarto(Request $request){
        $quarto = Quarto::find($request -> id_quarto)
        ->update($request->only(['num_quarto', 'valor_quarto']));
        if (!$quarto){
            return response()->json(['erro' => 'Quarto não encontrado'], 404);
        }
        return response()->json(['mensagem' => 'Quarto atualizado com sucesso']);
    }
}
}

/*https://localhost/HotelBemVago/criar-servicos?nome_servico=carlos&valor_servico=carlos@gmail.com */