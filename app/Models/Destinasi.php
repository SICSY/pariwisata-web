<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destinasi extends Model
{
    use HasFactory;
    protected $table = 'destinasi';
    protected $appends = ['klasifikasi_format'];

    protected $fillable = [
        'nama',
        'klasifikasi',
        'harga',
        'deskripsi',
        'lokasi',
        'gambar',
        'google_map',


    ];

    public function getKlasifikasiFormatAttribute()
    {

        $klasifikasiMapping = [
            0 => 'Destinasi',
            1 => 'Destinasi & Water Boom',
            2 => 'Budaya',
            3 => 'Buatan',
            4 => 'Alam',
        ];
        return $klasifikasiMapping[$this->klasifikasi] ?? 'Not Found';
    }
    public function kontenViews()
    {
        return $this->hasMany(KontenView::class, 'destinasi_id');
    }


    public function dataPengunjung()
    {
        return $this->morphMany(DataPengunjung::class, 'related');
    }

    public function post()
    {
        return $this->morphMany(Post::class, 'postable');
    }
}
