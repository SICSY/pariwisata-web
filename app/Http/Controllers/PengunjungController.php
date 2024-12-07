<?php

namespace App\Http\Controllers;

use App\Models\DataPengunjung;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PengunjungController extends Controller
{
    public function index()
    {

        $pengunjung = DataPengunjung::with('related')->get();
        return Inertia::render('Admin/Pengunjung', [
            'data' => $pengunjung
        ]);
    }
}
