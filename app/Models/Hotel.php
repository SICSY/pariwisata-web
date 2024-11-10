<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $table = 'hotel';

    protected $fillable = [
        'nama',
        'klasifikasi',
        'kapasitas_kamar',
        'deskripsi',
        'gambar',
        'lokasi',
        'rating',
        'harga',
    ];
    public function kontenViews()
    {
        return $this->hasMany(KontenView::class, 'hotel_id');
    }
    public function data_pengunjung(){
        return $this->hasMany(DataPengunjung::class);
    }

}
