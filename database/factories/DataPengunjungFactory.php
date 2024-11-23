<?php

namespace Database\Factories;

use App\Models\DataPengunjung;
use App\Models\Destinasi;
use App\Models\Hotel;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataPengunjung>
 */
class DataPengunjungFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = DataPengunjung::class;
    public function definition()
    {
        // Pilih secara acak model yang valid untuk morph relation
        $relatedModels = [
            Hotel::class,
            Destinasi::class,
        ];

        $relatedModel = $this->faker->randomElement($relatedModels);

        // Dapatkan ID acak dari model terkait jika ada data
        $relatedId = $relatedModel::query()->inRandomOrder()->value('id') ?? null;

        return [
            'created_at' => $this->faker->dateTimeBetween('-2 years', 'now'), // tanggal acak dalam 2 tahun terakhir
            'updated_at' => Carbon::now(),
            'role' => $this->faker->randomElement(['wisman', 'wisnus']),
            'total_pengunjung' => $this->faker->numberBetween(100, 10000),
            'related_type' => $relatedModel, // Model terkait untuk morph relation
            'related_id' => $relatedId, // ID acak dari model terkait
        ];
    }
}
