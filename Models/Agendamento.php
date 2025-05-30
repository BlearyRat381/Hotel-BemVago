<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Agendamento extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'agendamentos';
    protected $primaryKey = 'id_agendamentos';

     public $timestamps = false;
    
    protected $fillable = [
        'data',
        'id_quarto',
        'id_usuario',
    ];

    public function Quarto()
    {
        return $this->belongTo(Quarto::class, 'id_quarto', 'id_quarto');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id_usuario');
    }
}