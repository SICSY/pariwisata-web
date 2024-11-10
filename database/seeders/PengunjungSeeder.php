<?php

namespace Database\Seeders;

use App\Models\DataPengunjung;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PengunjungSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DataPengunjung::factory(10)->create();
    }
}
