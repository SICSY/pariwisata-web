<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPengunjungKolamRenang extends Model
{
    use HasFactory;
    protected $table = 'data_pengunjung_kolam_renang';
    protected $appends = ['format_waktu_kunjungan'];
    protected $fillable = [
        'role',
        'total_pengunjung',
        'kolam_renang_id',
    ];

    public function kolam_renang()
    {
        return $this->belongsTo(KolamRenang::class);
    }


    public function getFormatWaktuKunjunganAttribute()
    {
        var_dump($this->updated_at);
        return Carbon::parse($this->updated_at)->locale('id')->isoFormat('d MMMM YYYY');
    }
}

