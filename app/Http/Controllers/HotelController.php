<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HotelController extends Controller
{
    // Display a listing of hotels
    public function index()
    {
        $hotels = Hotel::all(); // Get all hotels from the database
        return view('Admin/Hotel', compact('hotels')); // Return the index view with hotels data
    }

    // Show the form for creating a new hotel
    public function create()
    {
        return view('hotels.create'); // Return the form for creating a hotel
    }

    // Store a newly created hotel in storage
    public function store(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'klasifikasi' => 'required|integer',
            'harga' => 'required|numeric',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'deskripsi' => 'nullable|string',
            'lokasi' => 'nullable|string',
            'kapasitas_kamar' => 'nullable|integer',
            'min_harga' => 'nullable|numeric',
            'max_harga' => 'nullable|numeric',
        ]);

        // Handle the file upload
        if ($request->hasFile('gambar')) {
            // Store the image in the 'public' disk (storage/app/public)
            $gambarPath = $request->file('gambar')->store('images/hotel', 'public');
        } else {
            $gambarPath = null; // No image uploaded
        }

        // Create a new hotel entry
        Hotel::create([
            'nama' => $validated['nama'],
            'klasifikasi' => $validated['klasifikasi'],
            'harga' => $validated['harga'],
            'gambar' => $gambarPath,
            'deskripsi' => $validated['deskripsi'],
            'lokasi' => $validated['lokasi'],
            'kapasitas_kamar' => $validated['kapasitas_kamar'],
            'min_harga' => $validated['min_harga'],
            'max_harga' => $validated['max_harga'],
        ]);

        return redirect()->route('hotels.index')->with('success', 'Hotel created successfully');
    }

    // Display the specified hotel
    public function show(Hotel $hotel)
    {
        return view('hotels.show', compact('hotel')); // Show details of the selected hotel
    }

    // Show the form for editing the specified hotel
    public function edit(Hotel $hotel)
    {
        return view('hotels.edit', compact('hotel')); // Return the edit form for the selected hotel
    }

    // Update the specified hotel in storage
    public function update(Request $request, Hotel $hotel)
    {
        // Validate the request data
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'klasifikasi' => 'required|integer',
            'harga' => 'required|numeric',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'deskripsi' => 'nullable|string',
            'lokasi' => 'nullable|string',
            'kapasitas_kamar' => 'nullable|integer',
            'min_harga' => 'nullable|numeric',
            'max_harga' => 'nullable|numeric',
        ]);

        // Handle the file upload if a new image is uploaded
        if ($request->hasFile('gambar')) {
            // Delete the old image if it exists
            if ($hotel->gambar && Storage::exists('public/' . $hotel->gambar)) {
                Storage::delete('public/' . $hotel->gambar);
            }

            // Store the new image
            $gambarPath = $request->file('gambar')->store('images/hotel', 'public');
        } else {
            $gambarPath = $hotel->gambar; // Keep the old image if none uploaded
        }

        // Update the hotel data
        $hotel->update([
            'nama' => $validated['nama'],
            'klasifikasi' => $validated['klasifikasi'],
            'harga' => $validated['harga'],
            'gambar' => $gambarPath,
            'deskripsi' => $validated['deskripsi'],
            'lokasi' => $validated['lokasi'],
            'kapasitas_kamar' => $validated['kapasitas_kamar'],
            'min_harga' => $validated['min_harga'],
            'max_harga' => $validated['max_harga'],
        ]);

        return redirect()->route('hotels.index')->with('success', 'Hotel updated successfully');
    }

    // Remove the specified hotel from storage
    public function destroy(Hotel $hotel)
    {
        // Delete the associated image if it exists
        if ($hotel->gambar && Storage::exists('public/' . $hotel->gambar)) {
            Storage::delete('public/' . $hotel->gambar);
        }

        // Delete the hotel record
        $hotel->delete();

        return redirect()->route('hotels.index')->with('success', 'Hotel deleted successfully');
    }
}
