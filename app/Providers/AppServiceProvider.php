<?php

namespace App\Providers;

use App\Models\DataPengunjung;
use App\Models\DataPengunjungHotel;
use App\Models\DataPengunjungKolamRenang;
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
        // Vite::prefetch(concurrency: 3);
        // Inertia::share([
        //     'dataPengunjung' => fn() => [DataPengunjungHotel::class, DataPengunjungKolamRenang::class]::with(['hotel', 'kolam_renang'])->get(

        //     )
        // ]);
    }
}
