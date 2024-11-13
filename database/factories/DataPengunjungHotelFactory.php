<?php

namespace Database\Factories;


use App\Models\DataPengunjungHotel;
use App\Models\Hotel;
use App\Models\KolamRenang;
use Illuminate\Database\Eloquent\Factories\Factory;

class DataPengunjungHotelFactory extends Factory
{
    protected $model = DataPengunjungHotel::class;

    public function definition(): array
    {
        // Get a random hotel ID or set to null if no hotels exist
        $hotel = Hotel::inRandomOrder()->first();

        // Assign either a hotel or a swimming pool (or both could be null if they don't exist)
        return [
            'role' => $this->faker->randomElement(['wisman', 'wisnus']),
            'total_pengunjung' => $this->faker->numberBetween(1, 100),
            'hotel_id' => $hotel->id,
        ];
    }

}
