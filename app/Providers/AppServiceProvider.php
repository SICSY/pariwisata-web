<?php

namespace App\Providers;

use App\Models\DataPengunjung;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Relation::enforceMorphMap([
            'Hotel' => \App\Models\Hotel::class,
            'Destinasi' => \App\Models\Destinasi::class,
        ]);
    }
}
