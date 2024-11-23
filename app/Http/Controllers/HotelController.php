<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class HotelController extends Controller
{

    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'nama' => 'required|string|max:255',
            'klasifikasi' => 'required|integer',
            'harga' => 'required|array',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'deskripsi' => 'nullable|string',
            'lokasi' => 'nullable|string',
            'kapasitas_kamar' => 'required|integer',
        ]);

        // Mengecek apakah hotel dengan nama yang sama sudah ada
        $existingHotel = Hotel::where('nama', $request->nama)->first();
        if ($existingHotel) {
            // Jika hotel sudah ada, kembalikan pesan error
            return redirect()->route('data-managemen.create')->with([
                'Eror' => 'Hotel with the same name already exists',
            ]);
        }

        $harga = json_encode($request->harga, true);
        if ($request->hasFile('gambar')) {

            $gambarPath = $request->file('gambar')->store('images/hotel', 'public');
        } else {
            $gambarPath = null;
        }
        Hotel::firstOrCreate([
            'nama' => $request->nama,
            'klasifikasi' => $request->klasifikasi,
            'harga' => $harga,
            'gambar' => $gambarPath,
            'deskripsi' => $request->deskripsi,
            'lokasi' => $request->lokasi,
            'kapasitas_kamar' => $request->kapasitas_kamar,

        ]);
        return redirect()->route('data-managemen.create')->with([
            'type' => $request->type,
            'success' => 'Hotel created successfully',
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
            'klasifikasi' => 'required|integer',
            'harga' => 'required|array',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
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
        $hotel->klasifikasi = $request->input('klasifikasi');
        $hotel->harga = $request->input('harga');
        $hotel->deskripsi = $request->input('deskripsi');
        $hotel->lokasi = $request->input('lokasi');
        $hotel->kapasitas_kamar = $request->input('kapasitas_kamar');
        $hotel->save();


        return redirect()->route('hotel.edit', $hotel->id)->with(['success', 'Hotel updated successfully', 'type' => $request->type]);
    }

    public function show(Hotel $hotel)
    {

        return redirect()->route('hotel.destroy', $hotel, );
    }

    public function destroy($id)
    {
        // Cari data berdasarkan ID
        $hotel = Hotel::findOrFail($id);

        // Jika ada file terkait (misalnya gambar), hapus file tersebut
        if ($hotel->gambar && Storage::exists($hotel->gambar)) {
            Storage::delete($hotel->gambar);
        }

        // Hapus data dari database
        $hotel->delete();

        // Redirect atau response JSON untuk menampilkan hasil
        return redirect()
            ->route('data-managemen.index')
            ->with('success', 'Data berhasil dihapus.');
    }

}
