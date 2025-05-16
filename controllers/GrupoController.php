<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Grupo;

class GrupoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getGrupos(){

        $grupos = Grupo::all();

    return response()->json($grupos);
    
}
    public function createGrupos(Request $request){
        $gruposCriado = Grupo::create([
            'nome_grupo' => $request->nome_grupo,
        ]);
        return response() ->json($gruposCriado);
    }
}

/*https://localhost/HotelBemVago/criar_grupos?nome_grupo=carlos