<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $table = 'hotel';
    protected $appends = ['klasifikasi_format'];

    // Properti untuk menentukan kolom mana yang dapat diisi
    protected $fillable = [
        'nama',
        'klasifikasi',
        'harga',
        'gambar',
        'kapasitas_kamar',
        'deskripsi',
        'lokasi',
    ];

    // Accessor untuk mendapatkan 'klasifikasi_format'
    public function getKlasifikasiFormatAttribute()
    {
        // Menetapkan pemetaan untuk klasifikasi
        $klasifikasiMapping = [
            0 => 'Non Bintang',
            1 => 'Bintang 1',
            2 => 'Bintang 2',
            3 => 'Bintang 3',
            4 => 'Bintang 4',
            5 => 'Bintang 5',
        ];
        // Mengembalikan nilai yang sesuai dengan klasifikasi atau 'Not Found' jika tidak ditemukan
        return $klasifikasiMapping[$this->klasifikasi] ?? 'Not Found';
    }

    public function dataPengunjung()
    {
        return $this->morphMany(DataPengunjung::class, 'related');
    }

    public function post() {
        return $this->morphMany(Post::class, 'postable');
    }
}
