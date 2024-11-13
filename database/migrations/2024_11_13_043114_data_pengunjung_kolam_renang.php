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
        Schema::create('data_pengunjung_kolam_renang', function (Blueprint $table) {
            $table->id();
            $table->enum('role', ['wisman', 'wisnus']);
            $table->integer('total_pengunjung');
            $table->foreignId('kolam_renang_id')->constrained('kolam_renang')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_pengunjung_kolam_renang');
    }
};
