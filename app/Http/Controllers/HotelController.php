<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;


class HotelController extends Controller
{


    public function store(Request $request)
    {


        $request->validate([
            'nama' => 'required|string|max:255',
            'klasifikasi' => 'required|string|max:255',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'kapasitas_kamar' => 'required|integer',
            'deskripsi' => 'required|string',
            'lokasi' => 'required|string',

        ]);

        $existingHotel = Hotel::where('nama', $request->nama)->first();
        if ($existingHotel) {
            return redirect()->route('admin.data-managemen.create')->withErrors(['error' => 'Hotel with the same name already exists.']);
        }

        $harga = json_encode($request->harga, true);
        if ($request->hasFile('gambar')) {

            $gambarPath = $request->file('gambar')->store('images/hotel', 'public');
        } else {
            $gambarPath = null;
        }
        $hasil = Hotel::create([
            'nama' => $request->nama,
            'klasifikasi' => [
                'required',
                Rule::in([
                    'Non Bintang',
                    'Bintang 1',
                    'Bintang 2',
                    'Bintang 3',
                    'Bintang 4',
                    'Bintang 5',
                ])
            ],
            'harga' => $harga,
            'gambar' => $gambarPath,
            'deskripsi' => $request->deskripsi,
            'lokasi' => $request->lokasi,
            'google_map' => $request->google_map,
            'kapasitas_kamar' => $request->kapasitas_kamar,

        ]);

        return redirect()->route('admin.data-managemen.index')->with([
            'success' => 'Data Destinasi berhasil ditambahkan',
            'error' => ' Data Destinasi gagal ditambahkan ',
        ]);
    }

    public function edit(Hotel $hotel)
    {

        return inertia::render('Admin/DataManagemen/Edit', [
            'editDataHotel' => $hotel,
            'menu' => 'hotel'
        ]);
    }

    public function update(Request $request, Hotel $hotel)
    {


        $request->validate([
            'nama' => 'required|string|max:255',
            'klasifikasi' => [
                'required',
                Rule::in([
                    'Non Bintang',
                    'Bintang 1',
                    'Bintang 2',
                    'Bintang 3',
                    'Bintang 4',
                    'Bintang 5',
                ])
            ],
            'harga' => 'required|array',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'deskripsi' => 'required|string',
            'lokasi' => 'required|string',
            'kapasitas_kamar' => 'required|integer',
        ]);




        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            if ($hotel->gambar && Storage::disk('public')->exists($hotel->gambar)) {
                Storage::disk('public')->delete($hotel->gambar);
            }

            $path = $file->store('images/hotel', 'public');
            $hotel->gambar = $path;
        }


        $hotel->nama = $request->input('nama');
        $hotel->klasifikasi = $request->klasifikasi;
        $hotel->harga = $request->input('harga');
        $hotel->deskripsi = $request->input('deskripsi');
        $hotel->lokasi = $request->input('lokasi');
        $hotel->kapasitas_kamar = $request->input('kapasitas_kamar');
        $hotel->save();


        // return redirect()->route('admin.data-managemen.index', $hotel->id)->with(['message', 'Hotel updated successfully', 'type' => $request->type]);
        return to_route('admin.data-managemen.index')->with(['message' => 'Hotel updated successfully', 'type' => $request->type]);
    }

    public function show(Hotel $hotel)
    {

        return redirect()->route('hotel.destroy', $hotel, );
    }

    public function destroy($id)
    {
        $hotel = Hotel::findOrFail($id);
        if ($hotel->gambar && Storage::disk('public')->exists($hotel->gambar)) {
            Storage::disk('public')->delete($hotel->gambar);
        }
        $publicPath = public_path('storage/' . $hotel->gambar);
        if (file_exists($publicPath)) {
            unlink($publicPath);
        }

        $hotel->delete();

        return redirect()->route('admin.data-managemen.index')
            ->with('message', 'Data dan file berhasil dihapus.');
    }


}
