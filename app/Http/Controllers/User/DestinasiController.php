<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Destinasi;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinasiController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Destinasi', [
            'destinasi' => Destinasi::all(),
        ]);
    }
    public function show(Destinasi $destinasi)
    {
        return inertia('User/DestinasiDetail', ['destinasi' => $destinasi]);
    }
}
