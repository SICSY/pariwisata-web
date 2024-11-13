<?php

namespace Database\Seeders;

use App\Models\DataPengunjungKolamRenang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PengunjungKolamRenangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DataPengunjungKolamRenang::factory(10)->create();
    }
}
