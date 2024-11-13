<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPengunjungHotel extends Model
{
    use HasFactory;
    protected $table = 'data_pengunjung_hotel';
    protected $appends = ['format_waktu_kunjungan'];
    protected $fillable = [
        'role',
        'total_pengunjung',
        'hotel_id',
    ];

    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }

    public function getFormatWaktuKunjunganAttribute()
    {
        return Carbon::parse($this->update_at)->locale('id')->isoFormat('d MMMM YYYY');
    }
}

