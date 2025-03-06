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
            'klasifikasi' => ['required', Rule::in(['Non Bintang', 'Bintang 1', 'Bintang 2', 'Bintang 3', 'Bintang 4', 'Bintang 5'])],
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'kapasitas_kamar' => 'required|integer',
            'deskripsi' => 'required|string',
            'lokasi' => 'required|string',
            'harga' => 'required|array',
            'harga.min' => 'required|integer|min:0',
            'harga.max' => 'required|integer|min:0|gte:harga.min',

        ]);

        $existingHotel = Hotel::where('nama', $request->nama)->first();
        if ($existingHotel) {
            return redirect()->route('admin.data-managemen.create')->withErrors(['error' => 'Nama Hotel tidak boleh sama.']);
        }
        if ($request->hasFile('gambar')) {

            $gambarPath = $request->file('gambar')->store('images/hotel', 'public');
        } else {
            $gambarPath = null;
        }
        Hotel::create([
            'nama' => $request->nama,
            'klasifikasi' => $request->klasifikasi,
            'harga' => json_encode([
                'min' => (int) $request->harga['min'],
                'max' => (int) $request->harga['max']
            ]),
            'gambar' => $gambarPath,
            'deskripsi' => $request->deskripsi,
            'lokasi' => $request->lokasi,
            'google_map' => $request->google_map,
            'kapasitas_kamar' => (int) $request->kapasitas_kamar,

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

    public function update(Request $request, $id)
    {
        // Cari hotel berdasarkan ID
        $hotel = Hotel::findOrFail($id);

        // Validasi input
        $request->validate([
            'nama' => ['required', 'string', Rule::unique('hotel', 'nama')->ignore($id)],
            'klasifikasi' => ['required', Rule::in(['Non Bintang', 'Bintang 1', 'Bintang 2', 'Bintang 3', 'Bintang 4', 'Bintang 5'])],
            'kapasitas_kamar' => 'required|integer|min:1',
            'deskripsi' => 'required|string',
            'lokasi' => 'required|string',
            'harga' => 'required|array',
            'harga.min' => 'required|integer|min:0',
            'harga.max' => 'required|integer|min:0|gte:harga.min',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);


        if ($request->hasFile('gambar')) {
            if ($hotel->gambar) {
                Storage::disk('public')->delete($hotel->gambar);
            }
            $gambarPath = $request->file('gambar')->store('images/hotel', 'public');
        } else {

            $gambarPath = $hotel->gambar;
        }
        $hotel->update([
            'nama' => $request->nama,
            'klasifikasi' => $request->klasifikasi,
            'kapasitas_kamar' => (int) $request->kapasitas_kamar,
            'deskripsi' => $request->deskripsi,
            'lokasi' => $request->lokasi,
            'harga' => json_encode([
                'min' => (int) $request->harga['min'],
                'max' => (int) $request->harga['max']
            ]),
            'gambar' => $gambarPath,
        ]);
        return to_route('admin.data-managemen.index')->with(['message' => 'Hotel updated successfully', 'type' => $request->type]);
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
