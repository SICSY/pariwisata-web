<?php

namespace Database\Seeders;

use App\Models\KontenView;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ViewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        KontenView::factory()->count(10)->create();
    }
}
