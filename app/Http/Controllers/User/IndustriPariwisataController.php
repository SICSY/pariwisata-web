<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndustriPariwisataController extends Controller
{
    public function index()
    {
        return Inertia::render('User/IndustriPariwisata', [
            'hotel' => Hotel::all(),
        ]);
    }
    public function show(Hotel $hotel)
    {
        return inertia('User/IndustriPariwisata', ['hotel' => $hotel]);
    }
}
