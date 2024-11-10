<?php

namespace Database\Factories;

use App\Models\DataPengunjung;
use App\Models\Hotel;
use App\Models\KolamRenang;
use Illuminate\Database\Eloquent\Factories\Factory;

class DataPengunjungFactory extends Factory
{
    protected $model = DataPengunjung::class;

    public function definition(): array
    {
        // Generate hotel or kolam_renang based on random boolean value
        $hotel = $this->faker->boolean ? Hotel::factory()->create() : null;
        $kolamRenang = $this->faker->boolean ? KolamRenang::factory()->create() : null;

        // Logika validasi: hanya menghasilkan data jika hotel_id atau kolam_renang_id ada
        if ($hotel || $kolamRenang) {
            return [
                'role' => $this->faker->randomElement(['wisman', 'wisnus']),
                'waktu_kunjungan' => $this->faker->dateTime(),
                'total_pengunjung' => $this->faker->numberBetween(1, 100),
                'hotel_id' => $hotel ? $hotel->id : null,
                'kolam_renang_id' => $kolamRenang ? $kolamRenang->id : null,
            ];
        }

        // Jika hotel_id dan kolam_renang_id tidak ada, kembalikan array kosong untuk mencegah penyimpanan
        return [];
    }
}
