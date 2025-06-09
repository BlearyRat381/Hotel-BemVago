<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\QuartoController;
use App\Http\Controllers\AgendamentoController;
use App\Http\Controllers\GrupoController;
use App\Http\Controllers\StatusController;


Route::get('usuarios', [UserController::class, 'getUsuarios']);
Route::get('criar-usuarios', [UserController::class, 'createUsuario']);
Route::get('atualizar-usuario/{id_usuario}', [UserController::class, 'atualizarUsuarios']);
Route::post('criar-usuarios', [UserController::class, 'createUsuario']);
Route::get('usuarios-clientes', [UserController::class, 'usuariosClientes']);

Route::get('quartos', [QuartoController::class, 'getQuarto']);
Route::get('criar-quartos', [QuartoController::class, 'createQuarto']);
Route::post('criar-quartos', [QuartoController::class, 'createQuarto']);
Route::get('atualizar-quarto/{id_quarto}', [UserController::class, 'atualizarQuarto']);

Route::get('agendamentos', [AgendamentoController::class, 'getAgendamento']);
Route::get('criar-agendamentos', [AgendamentoController::class, 'createAgendamento']);
Route::post('criar-agendamentos', [AgendamentoController::class, 'createAgendamento']);
Route::get('atualizar-agendamento/{id_agendamento}', [UserController::class, 'atualizarAgendamento']);

Route::get('grupos', [GrupoController::class, 'getGrupos']);
Route::get('criar-grupos', [GrupoController::class, 'createGrupos']);
Route::get('atualizar-grupo/{id_grupo}', [UserController::class, 'atualizarGrupo']);

Route::get('status', [StatusController::class, 'getStatus']);
Route::get('criar-status', [StatusController::class, 'createStatus']);
Route::get('atualizar-status/{id_status}', [UserController::class, 'atualizarStatus']);


