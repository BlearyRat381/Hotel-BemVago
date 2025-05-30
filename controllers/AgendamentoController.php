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
            'id_quarto' => $request->id_quarto,
        ]);
        return response() ->json($agendamentosCriado);
    }
    public function atualizarAgendamento(Request $request){
        $agendamento = Agendamento::find($request -> id_agendamento)
        ->update($request->only(['data', 'hora', 'id_quarto']));
        if (!$agendamento){
            return response()->json(['erro' => 'Agendamento não encontrado'], 404);
        }
        return response()->json(['mensagem' => 'Agendamento atualizado com sucesso']);
    }
}
}
