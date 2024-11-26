<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Destinasi>
 */
class DestinasiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->unique()->company . ' Destinasi',
            'klasifikasi' => $this->faker->numberBetween(0, 4),
            'harga' => json_encode([
                'min' => $this->faker->numberBetween(5000, 20000),
                'max' => $this->faker->numberBetween(20000, 100000),
            ]),
            'gambar' => $this->faker->imageUrl(640, 480, 'destinations', true, 'Destinasi'),
            'deskripsi' => $this->faker->paragraph(3),
            'lokasi' => $this->faker->address,
            'google_map' => fn() => 'https://www.google.com/maps?q=' . fake()->latitude() . ',' . fake()->longitude(),
        ];
    }
}
