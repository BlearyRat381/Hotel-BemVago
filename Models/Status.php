<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Status extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'status';
    protected $primaryKey = 'id_status';

     public $timestamps = false;
    
    protected $fillable = [
        'nome_status',
    ];

    public function quarto()
    {
        return $this->belongsTo(User::class, 'id_quarto', 'id_quarto');
    }

}