<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DataManagemenController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\KolamRenangController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'dataIndex']);

Route::get('/industri-pariwisata', function () {
    return Inertia::render('User/IndustriPariwisata');
});

Route::get('/destinasi', function () {
    return Inertia::render('User/Destinasi');
});

Route::get('/profil', function () {
    return Inertia::render('User/Profil');
});

Route::get('/tentang-kami', function () {
    return Inertia::render('User/TentangKami');
});

Route::get('/kontak', function () {
    return Inertia::render('User/Kontak');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::middleware(['auth', 'userMiddleware'])->group(function () {
    Route::get('dashboard', [UserController::class, 'index'])->name('dashboard');

});


Route::middleware(['auth', 'adminMiddleware'])->group(function () {
    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('admin/data/hotel', [AdminController::class, 'dataHotel'])->name('admin.hotel');
    Route::get('admin/data/kolam-renang', action: [AdminController::class, 'dataKolamRenang'])->name('admin.kolam-renang');
    Route::get('admin/data/konten-view', [AdminController::class, 'dataKontenView'])->name('admin.konten-view');
    Route::get('admin/data/pengujung', [AdminController::class, 'dataPengunjung'])->name('admin.pengunjung');
    Route::resource('data-managemen', DataManagemenController::class);
    Route::resource('hotel', HotelController::class);
    Route::resource('kolamRenang', KolamRenangController::class);


});

require __DIR__ . '/auth.php';

