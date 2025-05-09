<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Grupo extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'grupos';
    protected $primaryKey = 'id_grupo';
    
    protected $fillable = [
        'nome_grupo',
    ];

    public function usuario()
    {
        return $this->hasMany(User::class, 'id_usuario', 'id_usuario');
    }

}
