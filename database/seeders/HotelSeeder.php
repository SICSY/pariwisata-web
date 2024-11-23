<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hotel;

class HotelSeeder extends Seeder
{
    public function run()
    {
        // Tambahkan 50 data dummy untuk tabel 'hotel'
        Hotel::factory()->count(50)->create();
    }
}
