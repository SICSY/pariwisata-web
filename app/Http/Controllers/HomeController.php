<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\KolamRenang;
use App\Models\KontenView;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller{

    public function dataIndex()
    {
        // Ambil data hotel
        $hotel = Hotel::where('id', 1)->first();  // Atau Hotel::all() jika ingin semua hotel


        // Ambil data lainnya
        $kontenView = KontenView::where('id', 1)->first();
        $kolamRenang = KolamRenang::where('id', 1)->first();
        $user = User::where('id', 1)->first();

        return Inertia::render('Welcome', [
            'hotel' => $hotel,
            'kontenView' => $kontenView,
            'kolamRenang' => $kolamRenang,
            'user' => $user,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

}
