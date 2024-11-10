<?php

namespace App\Providers;

use App\Models\DataPengunjung;
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
        Vite::prefetch(concurrency: 3);
        Inertia::share([
            'dataPengunjung' => fn() => DataPengunjung::with(['hotel', 'kolam_renang'])->get(

            )
            ]);
    }
}
