<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agendamento extends Model
{

    protected $table = 'agendamento';

    protected $primaryKey = 'id_agendamento';

    public $timestamps = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_usuario',
        'id_quarto',
        'data',
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id_usuario');
    }

    public function servico()
    {
        return $this->belongsTo(Quarto::class, 'id_quarto', 'id_quarto');
    }

    // https://localhost/agendamentos/create-usuario?nome=Cassio&email=cassio@mail.com&id_grupo=5&data_nascimento=2000-02-28&data_criacao=2025-05-16&senha=Jjn98eu9jUIJH989hu
}
