<?php

namespace Database\Seeders;

use App\Models\KolamRenang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        KolamRenang::factory()->count(10)->create();
    }
}
