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
        Schema::create('data_pengunjung', function (Blueprint $table) {
            $table->id();
            $table->enum('role', ['wisman', 'wisnus']);
            $table->integer('total_pengunjung');
            $table->morphs('related'); // Ini akan menambahkan related_id dan related_type secara otomatis
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_pengunjung');
    }
};
