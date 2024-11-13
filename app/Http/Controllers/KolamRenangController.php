<?php

namespace App\Http\Controllers;

use App\Models\KolamRenang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KolamRenangController extends Controller
{
    public function index()
    {
        $hotel = KolamRenang::all();

        return Inertia::render('Admin/KolamRenang', ['hotel' => $hotel]);
    }

    public function show()
    {
        $hotel = KolamRenang::all();

        return Inertia::render('Admin/DataManagemen/Index', ['hotel' => $hotel]);

    }
    public function create()
    {

    }
    public function store(Request $request)
    {
        $validate = [
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'lokasi' => 'nullable|string|max:255',
            'klasifikasi' => 'nullable|enum:0,1,2,3,4,5',
            'harga' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
        $validated = $request->validate($validate);
        KolamRenang::create($validated);
        return redirect()->route('data-managemen.index');
    }


    public function update()
    {
    }
    public function delete()
    {
    }
}
