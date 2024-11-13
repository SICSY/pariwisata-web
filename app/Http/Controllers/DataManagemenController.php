<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\KolamRenang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataManagemenController extends Controller
{
    /**
     * Show the data manajemen index.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $data = Hotel::all(); // Retrieve all data
        return Inertia::render('Admin/DataManagemen/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/DataManagemen/Create');
    }

    public function store(Request $request)
    {
        $validated = [];

        if ($request->input('type') === 'hotel') {
            // Validate hotel data
            $validated = $request->validate([
                'nama' => 'required|string|max:255',
                'deskripsi' => 'nullable|string',
                'harga' => 'required|numeric',
                'lokasi' => 'nullable|string',
                'klasifikasi' => 'nullable|enum:0,1,2,3,4,5',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            // Create new hotel entry
            Hotel::create($validated);
        } elseif ($request->input('type') === 'kolam') {
            // Validate kolam (swimming pool) data
            $validated = $request->validate([
                'nama' => 'required|string|max:255',
                'deskripsi' => 'nullable|string',
                'harga' => 'required|numeric',
                'lokasi' => 'nullable|string',
                'capacity' => 'nullable|numeric',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            // Create new kolam (swimming pool) entry
            KolamRenang::create($validated);
        }

        return redirect()->route('data-managemen.index'); // Redirect to index
    }

    public function show(Hotel $dataManagemen)
    {
        return Inertia::render('Admin/DataManagemen/Show', [
            'data' => $dataManagemen
        ]);
    }

    public function edit(Hotel $dataManagemen)
    {
        return Inertia::render('Admin/DataManagemen/Edit', [
            'data' => $dataManagemen
        ]);
    }

    public function update(Request $request, Hotel $dataManagemen)
    {
        $validated = $request->validate([
            // Validation rules
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $dataManagemen->update($validated); // Update data

        return redirect()->route('admin.data-managemen.index'); // Redirect to index
    }

    public function destroy(Hotel $dataManagemen)
    {
        $dataManagemen->delete(); // Delete the record

        return redirect()->route('admin.data-managemen.index'); // Redirect to index
    }
}
