<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HotelFactory extends Factory
{
    protected $model = \App\Models\Hotel::class;

    public function definition()
    {
        return [
            'nama' => $this->faker->company . ' Hotel',
            'klasifikasi' => $this->faker->numberBetween(0, 5),
            'harga' => json_encode([
                'min' => $this->faker->numberBetween(50000, 200000),
                'max' => $this->faker->numberBetween(200000, 1000000),
            ]),
            'gambar' => $this->faker->imageUrl(640, 480, 'hotels', true, 'Hotel'),
            'kapasitas_kamar' => $this->faker->numberBetween(10, 500),
            'deskripsi' => $this->faker->paragraph(3),
            'lokasi' => $this->faker->address,
        ];
    }
}
