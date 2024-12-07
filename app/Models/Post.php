<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;


    // Kolom yang boleh diisi massal
    protected $fillable = [
        'title',
        'content',
        'status',
    ];

    // Kolom yang akan di-cast ke tipe tertentu (misalnya waktu)
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
