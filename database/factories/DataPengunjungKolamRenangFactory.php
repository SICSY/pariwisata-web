<?php

namespace Database\Factories;


use App\Models\DataPengunjungKolamRenang;
use App\Models\KolamRenang;
use Illuminate\Database\Eloquent\Factories\Factory;

class DataPengunjungKolamRenangFactory extends Factory
{
    protected $model = DataPengunjungKolamRenang::class;

    public function definition(): array
    {
        // Get a random hotel ID or set to null if no hotels exist
        $kolamRenang = KolamRenang::inRandomOrder()->first();

        // Assign either a hotel or a swimming pool (or both could be null if they don't exist)
        return [
            'role' => $this->faker->randomElement(['wisman', 'wisnus']),
            'total_pengunjung' => $this->faker->numberBetween(1, 100),
            'kolam_renang_id' => $kolamRenang->id
        ];
    }

}
