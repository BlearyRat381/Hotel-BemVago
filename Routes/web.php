<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServicoController;
use App\Http\Controllers\AgendamentoController;
use App\Http\Controllers\GrupoController;
use App\Http\Controllers\AgendaController;


Route::get('usuarios', [UserController::class, 'getUsuarios']);
Route::get('criar_usuarios', [UserController::class, 'createUsuario']);

Route::get('servicos', [ServicoController::class, 'getServico']);
Route::get('criar_servicos', [ServicoController::class, 'createServico']);

Route::get('agendamentos', [AgendamentoController::class, 'getAgendamento']);
Route::get('criar_agendamentos', [AgendamentoController::class, 'createAgendamento']);

Route::get('grupos', [GrupoController::class, 'getGrupos']);
Route::get('criar_grupos', [GrupoController::class, 'createGrupos']);

Route::get('agendas', [AgendaController::class, 'getAgenda']);
Route::get('criar_agendas', [AgendaController::class, 'createAgenda']);

