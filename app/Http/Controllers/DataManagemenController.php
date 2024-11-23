<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\Destinasi;
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
        $hotel = Hotel::paginate(4, ['*'], 'hotel');
        $destinasi = Destinasi::paginate(4, ['*'], 'destinasi');

        return Inertia::render('Admin/DataManagemen/Index', [
            'hotel' => $hotel,
            'destinasi' => $destinasi
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/DataManagemen/Create');
    }

}
