<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Status;

class GrupoController extends BaseController
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
}

/*https://localhost/HotelBemVago/criar_status?nome_status=Vago