<?php

namespace Database\Seeders;


use App\Models\DataPengunjungHotel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PengunjungHotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DataPengunjungHotel::factory(10)->create();
    }
}
