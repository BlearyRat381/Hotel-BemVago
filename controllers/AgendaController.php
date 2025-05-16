<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Agenda;

class AgendaController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getAgenda(){

        $agenda = Agenda::all();
        
    return response()->json($agenda);
}
    public function createAgenda(Request $request){
        $agendaCriada = Agenda::create([
            'data' => $request->data,
            'hora' => $request->hora,
            'id_usuario' => $request->id_usuario,
            'id_servico' => $request->id_servico,
        ]);
        return response() ->json($agendaCriada);
    }
}

/*https://localhost/HotelBemVago/criar_agendas?data=carlos&hora=carlos@gmail.com&id_usuario=2007-06-27&id_servico=3