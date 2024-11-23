<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPengunjung extends Model
{
    use HasFactory;
    protected $table = 'data_pengunjung';

    protected $fillable = ['role', 'total_pengunjung', 'related_type', 'related_id'];

    public function related()
    {
        return $this->morphTo();
    }
}
