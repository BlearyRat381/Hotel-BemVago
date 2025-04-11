<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class ServicoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getservico(){

        $servico =  
        [
            ["id_servico" => "1", "nome_servico" => "Corte de cabelo"],
            ["id_servico" => "2", "nome_servico" => "Barba"],
            ["id_servico" => "3", "nome_servico" => "Corte e barba"],
            ["id_servico" => "4", "nome_servico" => "Sobrancelha"],
            ["id_servico" => "5", "nome_servico" => "Pigmentação"],
            ["id_servico" => "6", "nome_servico" => "Luzes"],
        ];

    return response()->json($servico);
}
}
