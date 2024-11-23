<?php

namespace App\Http\Controllers;

use App\Models\DataPengunjung;
use App\Models\Hotel;
use App\Models\Destinasi;
use App\Models\KontenView;
use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;


class AdminController extends Controller
{
    public function index()
    {

        return Inertia::render('Admin/Dashboard', [

            'hotelAll' => Hotel::select('id', 'nama', 'klasifikasi', 'harga', 'kapasitas_kamar', 'deskripsi', 'lokasi')->get(),
            'hotelCount' => Hotel::count(),
            'destinasiCount' => Destinasi::count(),

        ]);
    }



    public function dataHotel()
    {
        $data = Hotel::all();
        return Inertia::render('Admin/Hotel', [
            'data' => $data
        ]);
    }
    public function dataDestinasi()
    {
        $data = Destinasi::all();

        return Inertia::render('Admin/Destinasi', [
            'data' => $data
        ]);
    }

    public function dataKontenView()
    {

        $data = KontenView::with(['user', 'hotel', 'destinasi'])->get();

        return Inertia::render('Admin/KontenView', [
            'data' => $data
        ]);
    }

    public function dataPengunjung()
    {



        return Inertia::render('Admin/Pengunjung');
    }


}
