<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPengunjung extends Model
{
    use HasFactory;
    protected $table = 'data_pengunjung';
    protected $appends = ['format_waktu_kunjungan'];
    protected $fillable = [
        'role',
        'waktu_kunjungan',
        'total_pengunjung',
        'hotel_id',
        'kolam_renang_id'
    ];

    public function hotel (){
        return $this->belongsTo(Hotel::class);
    }
    public function kolam_renang (){
        return $this->belongsTo(KolamRenang::class);
    }


    public function getFormatWaktuKunjunganAttribute(){
        return Carbon::parse($this->waktu_kunjungan)->locale('id')->isoFormat('MMM Do YYYY' );
    }  }

