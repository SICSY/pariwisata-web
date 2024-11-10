<?php

namespace Database\Factories;

use App\Models\Hotel;
use App\Models\KolamRenang;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class KontenViewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(), // Membuat user baru secara otomatis
            'hotel_id' => $this->faker->boolean ? Hotel::factory() : null, // Menentukan hotel_id secara acak
            'kolam_renang_id' => $this->faker->boolean ? KolamRenang::factory() : null, // Menentukan kolam_renang_id secara acak
            'user_ip' => $this->faker->ipv4,

        ];
    }
}










