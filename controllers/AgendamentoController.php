<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Agendamento;

class AgendamentoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getAgendamento(){

        $agendamentos = Agendamento::all();
        
    return response()->json($agendamentos);
}
    public function createAgendamentos(Request $request){
        $agendamentosCriado = Agendamento::create([
            'data' => $request->data,
            'hora' => $request->hora,
            'id_servico' => $request->id_servico,
        ]);
        return response() ->json($agendamentosCriado);
    }
}

/*https://localhost/HotelBemVago/criar_agendamentos?data=carlos&hora=carlos@gmail.com&id_servico=2007-06-27