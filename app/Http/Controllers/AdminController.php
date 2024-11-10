<?php

namespace App\Http\Controllers;

use App\Models\DataPengunjung;
use App\Models\Hotel;
use App\Models\KolamRenang;
use App\Models\KontenView;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminController extends Controller
{
    public function index()
    {
        $data = KontenView::all();
        return Inertia::render('Admin/Dashboard', [
            'data' => $data
        ]);
    }


    public function dataHotel()
    {
        $data = Hotel::all();
        return Inertia::render('Admin/Hotel', [
            'data' => $data
        ]);
    }
    public function dataKolamRenang()
    {
        $data = KolamRenang::all();

        return Inertia::render('Admin/KolamRenang', [
            'data' => $data
        ]);
    }

    public function dataKontenView()
    {

        $data = KontenView::with(['user', 'hotel', 'kolamRenang'])->get();

        return Inertia::render('Admin/KontenView', [
            'data' => $data
        ]);
    }

    public function dataPengunjung()
    {
        $pengunjung = DataPengunjung::with(['hotel', 'kolam_renang'])->get();


        return Inertia::render('Admin/Pengunjung', [
            'data' => $pengunjung
        ]);
    }


}
