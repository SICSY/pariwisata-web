<?php

namespace Database\Seeders;

use App\Models\DataPengunjung;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DataPengunjungSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DataPengunjung::factory()->count(50)->create();
    }
}
