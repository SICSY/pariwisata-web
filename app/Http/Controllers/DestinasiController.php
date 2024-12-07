<?php

namespace App\Http\Controllers;

use App\Models\Destinasi;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
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
            'klasifikasi' => 'required|integer',
            'harga' => 'required|array',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'lokasi' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'google_map' => 'nullable|string',
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

        return redirect()->route('admin.data-managemen.create')->with([
            'success' => 'Data Destinasi berhasil ditambahkan',
            'error' => ' Data Destinasi gagal ditambahkan ',
            'type' => $type
        ]);
    }

    public function update(Request $request, Destinasi $destinasi)
    {

        $request->validate([
            'nama' => "required|string|max:255",
            'klasifikasi' => 'required|integer',
            'gambar' => "nullable|image|mimes:jpeg,png,jpg,svg,|max:2048",
            'harga' => 'required|array',
            'lokasi' => 'required|string|max:255',
            'google_maps' => 'required|string',
            'deskripsi' => 'required|string',
        ]);

        $harga = json_encode($request->harga, true);
        $reqgambar = $request->file('gambar');

        if ($destinasi->gambar && Storage::disk(' public')->exists($destinasi->gambar)) {
            Storage::disk('public')->delete($destinasi->gambar);
        }



        $gambar = $reqgambar->store('images/destinasi', 'public');
        $destinasi->updateOrFail([
            'nama ' => $request->nama,
            'klasifikasi' => $request->klasifikasi,
            'gambar' => $gambar,
            'harga' => $harga,
        ]);

        return redirect()->route('admin.data-managemen.create')->with([
            'type' => $request->type
        ]);



    }
    public function edit(Destinasi $destinasi)
    {

        return inertia::render('Admin/DataManagemen/Edit', [
            'editDataDestinasi' => $destinasi,
            'menu' => 'destinasi',

        ]);
    }

    public function delete()
    {
    }
}
