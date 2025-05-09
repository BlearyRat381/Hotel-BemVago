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
    
    protected $fillable = [
        'data',
        'hora',
        'id_servico',
    ];

    public function Servico()
    {
        return $this->belongTo(Servico::class, 'id_servico', 'id_servico');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id_usuario');
    }
}
