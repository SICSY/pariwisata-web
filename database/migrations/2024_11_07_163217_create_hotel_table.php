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
            $table->string('nama');
            $table->enum('klasifikasi', [0, 1, 2, 3, 4, 5]);
            $table->integer('kapasitas_kamar');
            $table->text('deskripsi');
            $table->text(column: 'gambar')->nullable();
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
