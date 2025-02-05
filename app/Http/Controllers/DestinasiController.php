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
    public function index()
    {
        $destinasi = Destinasi::all();

        return Inertia::render('Admin/Destinasi', ['destinasi' => $destinasi]);
    }

    public function show()
    {
        $destinasi = Destinasi::all();

        return Inertia::render('Admin/DataManagemen/Index', ['destinasi' => $destinasi]);

    }
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
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'lokasi' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'google_map' => 'nullable|url',
        ]);
        $type = $request->type;
        $harga = json_encode($request->harga, true);


        $reqgambar = $request->file('gambar');
        $gambar = $reqgambar ? $gambar = $reqgambar->store('images/destinasi', 'public') : $gambar = null;



        Destinasi::create([
            'nama' => $request->nama,
            'klasifikasi' => $request->klasifikasi,
            'harga' => $harga,
            'gambar' => $gambar,
            'lokasi' => $request->lokasi,
            'deskripsi' => $request->deskripsi,
            'google_map' => $request->google_map

        ]);

        return redirect()->route('admin.data-managemen.index')->with([
            'success' => 'Data Destinasi berhasil ditambahkan',
            'error' => ' Data Destinasi gagal ditambahkan ',
            'type' => $type
        ]);
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
            'harga' => 'nullable|array',
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


        $harga = $request->has('harga') ? json_encode($request->harga, true) : $destinasi->harga;


        $destinasi->update([
            'nama' => $request->input('nama', $destinasi->nama),
            'klasifikasi' => $request->input('klasifikasi', $destinasi->klasifikasi),
            'gambar' => $gambar,
            'harga' => $harga,
            'lokasi' => $request->input('lokasi', $destinasi->lokasi),
            'google_map' => $request->input('google_map', $destinasi->google_map),
            'deskripsi' => $request->input('deskripsi', $destinasi->deskripsi),
        ]);
        return redirect()->route('admin.data-managemen.index')->with([
            'type' => $request->type,
            'success' => 'Data Destinasi berhasil diubah',
            'error' => ' Data Destinasi gagal diubah ',
        ]);
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
