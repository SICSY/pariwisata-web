<?php

namespace App\Http\Controllers;

use App\Models\Destinasi;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\HttpCache\Store;

class DestinasiController extends Controller
{

    public function create()
    {
        $destinasi = Destinasi::paginate(10);
        return redirect()->route('data-managemen.create', ['destinasi' => $destinasi]);
    }
    public function store(Request $request, Destinasi $destinasi)
    {


        $request->validate([
            'nama' => 'required|string|max:255',
            'klasifikasi' => [
                'required',
                Rule::in([
                    'Destinasi',
                    'Destinasi & Water Boom',
                    'Budaya',
                    'Buatan',
                    'Alam',
                ])
            ],
            'harga' => 'required|array',
            'harga.min' => 'required|integer|min:0',
            'harga.max' => 'required|integer|min:0|gte:harga.min',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'lokasi' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'google_map' => 'nullable|url',
        ]);
        $existingDestinasi = Destinasi::where('nama', $request->nama)->first();
        if ($existingDestinasi) {
            return redirect()->route('admin.data-managemen.create')->withErrors(['error' => 'Destinasi picture with the same name already exists.']);
        }
        if ($request->hasFile('gambar')) {

            $gambarPath = $request->file('gambar')->store('images/destinasi', 'public');
        } else {
            $gambarPath = null;
        }

        Destinasi::create([
            'nama' => $request->nama,
            'klasifikasi' => $request->klasifikasi,
            'harga' => json_encode([
                'min' => (int) $request->harga['min'],
                'max' => (int) $request->harga['max']
            ]),
            'gambar' => $gambarPath,
            'lokasi' => $request->lokasi,
            'deskripsi' => $request->deskripsi,
            'google_map' => $request->google_map

        ]);
        return redirect()->route('admin.data-managemen.index');
    }


    public function update(Request $request, Destinasi $destinasi)
    {

        $request->validate([
            'nama' => "nullable|string|max:255",
            'klasifikasi' => [
                'required',
                Rule::in([
                    'Destinasi',
                    'Destinasi & Water Boom',
                    'Budaya',
                    'Buatan',
                    'Alam',
                ])
            ],
            'gambar' => "nullable|image|mimes:jpeg,png,jpg,svg|max:2048",
            'harga' => 'required|array',
            'harga.min' => 'required|integer|min:0',
            'harga.max' => 'required|integer|min:0|gte:harga.min',
            'lokasi' => 'nullable|string|max:255',
            'google_map' => 'nullable|string',
            'deskripsi' => 'nullable|string',
        ]);


        $gambar = $destinasi->gambar;
        if ($request->hasFile('gambar')) {
            if ($gambar && Storage::disk('public')->exists($gambar)) {
                Storage::disk('public')->delete($gambar);
            }

            $gambar = $request->file('gambar')->store('images/destinasi', 'public');
        }
        $destinasi->update([
            'nama' => $request->input('nama', $destinasi->nama),
            'klasifikasi' => $request->input('klasifikasi', $destinasi->klasifikasi),
            'gambar' => $gambar,
            'harga' => json_encode([
                'min' => (int) $request->harga['min'],
                'max' => (int) $request->harga['max']
            ]),
            'lokasi' => $request->input('lokasi', $destinasi->lokasi),
            'google_map' => $request->input('google_map', $destinasi->google_map),
            'deskripsi' => $request->input('deskripsi', $destinasi->deskripsi),
        ]);
        return redirect()->route('admin.data-managemen.index');
    }

    public function edit(Destinasi $destinasi)
    {

        return inertia::render('Admin/DataManagemen/Edit', [
            'editDataDestinasi' => $destinasi,
            'menu' => 'destinasi',

        ]);
    }

    public function destroy($id)
    {

        $destinasi = Destinasi::findOrFail($id);


        if ($destinasi->gambar && Storage::exists($destinasi->gambar)) {
            Storage::disk('public')->delete($destinasi->gambar);
        }

        $destinasi->delete();


        return redirect()
            ->route('admin.data-managemen.index')
            ->with('success', 'Data berhasil dihapus.');
    }
}
