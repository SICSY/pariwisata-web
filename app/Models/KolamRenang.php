<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KolamRenang extends Model
{
    use HasFactory;
    protected $table = 'kolam_renang';

    protected $fillable = [
        'nama',
        'klasifikasi',
        'harga',
        'deskripsi',
        'lokasi',
        'gambar',


    ];
    public function kontenViews()
    {
        return $this->hasMany(KontenView::class, 'kolam_renang_id');
    }
    public function data_pengunjung()
    {
        return $this->hasMany(DataPengunjungKolamRenang::class);
    }
}
