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
        Schema::create('destinasi', function (Blueprint $table) {
            $table->id();
            $table->string('nama')->unique();
            $table->enum('klasifikasi', [
                'Destinasi',
                'Destinasi & Water Boom',
                'Budaya',
                'Buatan',
                'Alam',

            ]);
            $table->json('harga');
            $table->text('gambar')->nullable();
            $table->text('deskripsi')->nullable();
            $table->string('lokasi');
            $table->text('google_map')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destinasi');
    }
};
