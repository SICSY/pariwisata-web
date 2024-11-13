<?php

namespace App\Http\Controllers;

use App\Models\DataPengunjung;
use App\Models\DataPengunjungHotel;
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
        $totalPengunjungHotel = DataPengunjungHotel::whereNotNull('hotel_id')
            ->whereNotNull('total_pengunjung')
            ->sum('total_pengunjung');

        $pengunjungData = DataPengunjungHotel::with('hotel:id,nama')
            ->select('role', 'total_pengunjung', 'hotel_id')
            ->whereNotNull('hotel_id')
            ->get();

        return Inertia::render(
            'Admin/Dashboard',
            [
                'totalPengunjungHotel' => $totalPengunjungHotel,
                'tabel' => $pengunjungData
            ]
        );
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
        $pengunjung = DataPengunjungHotel::with('hotel')->get();


        return Inertia::render('Admin/Pengunjung', [
            'data' => $pengunjung
        ]);
    }


}
