<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;




Route::get('usuarios', [UserController::class, 'getUsuarios']);