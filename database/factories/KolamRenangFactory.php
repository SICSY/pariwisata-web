<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KolamRenang>
 */
class KolamRenangFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->word,
            'deskripsi' => $this->faker->paragraph(nbSentences:1, variableNbSentences: true),
            'alamat' => $this->faker->address,
            'klasifikasi' => $this->faker->word,
            'gambar' => $this->faker->imageUrl(640, 480),
            'harga' => $this->faker->randomFloat(2, 10000, 100000),
            'rating' => $this->faker->randomFloat(1, 1, 5),
        ];
    }
}
