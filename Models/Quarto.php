<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Quarto extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'quartos';
    protected $primaryKey = 'id_quarto';

     public $timestamps = false;
    
    protected $fillable = [
        'num_quarto',
        'valor_quarto',
        'id_status'
    ];

    public function Agendamento()
    {
        return $this->hasMany(Agendamento::class, 'id_agendamentos', 'id_agendamentos');
    }
}
