<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class AgendamentoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getagendamento(){

        $agendamento =  
        [
            ["id_agendamento" => "1", "data" => "10/04/2025", "hora" => "18:00", "nome_cliente" => "Gustavo Henrique", "nome_profissional" => "gusta",]
            ["id_agendamento" => "2", "data" => "15/10/2025", "hora" => "14:30", "nome_cliente" => "Marta Santos", "nome_profissional" => "MS",]
            ["id_agendamento" => "3", "data" => "25/05/2025", "hora" => "14:30", "nome_cliente" => "Gustavo Souza", "nome_profissional" => "Gusta",]
            ["id_agendamento" => "4", "data" => "03/07/2025", "hora" => "14:00", "nome_cliente" => "Carlos Lima", "nome_profissional" => "Carlim",]
            ["id_agendamento" => "5", "data" => "02/08/2025", "hora" => "15:30", "nome_cliente" => "Mark Spencer", "nome_profissional" => "MarkSpen",]
            ["id_agendamento" => "6", "data" => "31/05/2025", "hora" => "11:30", "nome_cliente" => "John Isaac", "nome_profissional" => "JohnIsa",]
        ];

    return response()->json($agendamento);
}
}
