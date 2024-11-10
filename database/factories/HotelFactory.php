<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->company,
            'klasifikasi' =>(string) $this->faker->randomElement([0, 1, 2, 3, 4, 5]),
            'kapasitas_kamar' => $this->faker->numberBetween(10, 100),
            'deskripsi' => $this->faker->paragraph,
            'gambar' => $this->faker->imageUrl(640, 480),
            'lokasi' => $this->faker->address,
            'rating' => $this->faker->randomFloat(1, 1, 5),
            'harga' => $this->faker->randomFloat(2, 50000, 500000),
        ];
    }
}
