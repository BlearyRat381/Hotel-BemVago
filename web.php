<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServicoController;
use App\Http\Controllers\AgendamentoController;
use App\Http\Controllers\GrupoController;
use App\Http\Controllers\AgendaController;




Route::get('usuarios', [UserController::class, 'getUsuarios']);
Route::get('servicos', [ServicoController::class, 'getServico']);
Route::get('agendamentos', [AgendamentoController::class, 'getAgendamento']);
Route::get('grupos', [GrupoController::class, 'getGrupos']);
Route::get('agendas', [AgendaController::class, 'getAgenda']);