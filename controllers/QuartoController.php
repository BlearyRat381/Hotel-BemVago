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
            'nome_quarto' => $request->nome_quarto,
            'valor_quarto' => $request->valor_quarto,
        ]);
        return response() ->json($quartoCriado);
    }
}

/*https://localhost/HotelBemVago/criar_servicos?nome_servico=carlos&valor_servico=carlos@gmail.com