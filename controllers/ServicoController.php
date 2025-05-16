<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Servico;

class ServicoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getServico(){

        $servicos = Servico::all();

    return response()->json($servicos);
}
    public function createServico(Request $request){
        $servicoCriado = Servico::create([
            'nome_servico' => $request->nome_servico,
            'valor_servico' => $request->valor_servico,
        ]);
        return response() ->json($servicoCriado);
    }
}

/*https://localhost/HotelBemVago/criar_servicos?nome_servico=carlos&valor_servico=carlos@gmail.com