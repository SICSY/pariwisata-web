<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hotel', function (Blueprint $table) {
            $table->id();
            $table->string('nama')->unique();
            $table->enum('klasifikasi', [
                'Non Bintang',
                'Bintang 1',
                'Bintang 2',
                'Bintang 3',
                'Bintang 4',
                'Bintang 5',
            ]);
            $table->integer('kapasitas_kamar');
            $table->text('deskripsi');
            $table->text('gambar')->nullable();
            $table->string('lokasi');
            $table->json('harga');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotel');
    }
};
