<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KontenView extends Model
{
    use HasFactory;

    protected $table = 'konten_views';

    protected $fillable = [
        'user_id',
        'hotel_id',
        'kolam_renang_id',
        'user_ip',
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class , 'user_id');
    }

    // Relasi ke Hotel
    public function hotel()
    {
        return $this->belongsTo(Hotel::class, 'hotel_id');
    }

    // Relasi ke KolamRenang
    public function kolamRenang()
    {
        return $this->belongsTo(KolamRenang::class, 'kolam_renang_id');
    }
}
