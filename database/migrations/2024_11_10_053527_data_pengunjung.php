<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('data_pengunjung', function (Blueprint $table) {
            $table->id();
            $table->enum('role', ['wisman', 'wisnus'])->nullable();
            $table->timestamp('waktu_kunjungan')->nullable();
            $table->integer('total_pengunjung')->nullable();
            $table->foreignId('hotel_id')->nullable()->constrained('hotel')->onDelete('cascade');
            $table->foreignId('kolam_renang_id')->nullable()->constrained('kolam_renang')->onDelete('cascade');
            $table->nullableTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
