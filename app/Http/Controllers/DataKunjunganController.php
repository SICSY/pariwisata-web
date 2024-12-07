<?php

namespace App\Http\Controllers;

use App\Models\DataPengunjung;
use App\Models\Destinasi;
use App\Models\Hotel;
use Illuminate\Http\Request;


class DataKunjunganController extends Controller
{
    public function index()
    {
        $data = DataPengunjung::with('related')->get();
        return inertia('Admin/DataKunjungan/Index', [
            'data' => $data,
        ]);
    }

    public function create()
    {

        return inertia('Admin/DataKunjungan/Create', [
            'hotels' => Hotel::all(['id', 'nama']),
            'destinasis' => Destinasi::all(['id', 'nama']),
        ]);
    }
    public function store(Request $request)
    {

        $request->validate([
            'role' => 'required|in:wisman,wisnus',
            'total_pengunjung' => 'required|numeric',
            'related_id' => 'required|exists:' . ($request->related_type === 'hotel' ? 'hotel' : 'destinasi') . ',id',
            'related_type' => 'required|in:hotel,destinasi',
        ]);

        $relatedType = $request->related_type === 'hotel' ? Hotel::class : Destinasi::class;


        $currentMonth = now()->month;
        $currentYear = now()->year;


        $existingData = DataPengunjung::whereMonth('created_at', $currentMonth)
            ->whereYear('created_at', $currentYear)
            ->where('related_id', $request->related_id, )
            ->where('role', $request->role)
            ->where('related_type', $relatedType)
            ->first();

        if ($existingData) {
            return back()->withErrors([
                'related_id' => 'Data pengunjung untuk ' . ($request->related_type === 'hotel' ? 'hotel' : 'destinasi') . ' ini sudah ada untuk bulan ini.'
            ]);
        }
        DataPengunjung::create([
            'role' => $request->role,
            'total_pengunjung' => $request->total_pengunjung,
            'related_type' => $relatedType,
            'related_id' => $request->related_id,
        ]);
        return redirect()->route('admin.kunjungan-managemen.index')->with('success', 'Data pengunjung berhasil ditambahkan.');
    }



    public function edit()
    {

    }
    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'status' => 'required|string',
        ]);
    }

    public function destroy()
    {

    }

}
