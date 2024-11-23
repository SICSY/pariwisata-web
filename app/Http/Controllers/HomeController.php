<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\Destinasi;
use App\Models\KontenView;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function dataIndex()
    {

        $hotel = Hotel::where('id', 1)->first();
        $kontenView = KontenView::where('id', 1)->first();
        $destinasi = Destinasi::where('id', 1)->first();
        $user = User::where('id', 1)->first();



        return Inertia::render('Welcome', [
            'hotel' => $hotel,
            'kontenView' => $kontenView,
            'destinasi' => $destinasi,
            'user' => $user,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

}
