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
        Schema::create('konten_view', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade'); // Jika user login, referensi ke ID user
            $table->foreignId('hotel_id')->nullable()->constrained('hotel')->onDelete('cascade'); // Referensi ke hotel
            $table->foreignId('destinasi_id')->nullable()->constrained('destinasi')->onDelete('cascade');
            $table->string('user_ip')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('konten_view');
    }
};
