<?php


use App\Http\Controllers\AdminController;
use App\Http\Controllers\DataManagemenController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\DestinasiController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DestinasiController as UserDestinasiController;
use App\Http\Controllers\User\IndustriPariwisataController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index']);

Route::get('/industri-pariwisata', [IndustriPariwisataController::class, 'index']);
Route::get('/industri-pariwisata/{industri}', [IndustriPariwisataController::class, 'show'])->name('user.industri.show');
Route::get('/destinasi', [UserDestinasiController::class, 'index']);
Route::get('/destinasi/{destinasi}', [UserDestinasiController::class, 'show'])->name('user.destinasi.show');

Route::get('/profil', function () {
    return Inertia::render('User/Profil');
})->name('user.profil');




Route::get("/akomodasi", function () {
    return inertia::render(
        "User/partial/page/Akomodasi",
    );
})->name("user.akomodasi");


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::middleware(['auth', 'userMiddleware'])->group(function () {
    Route::get('dashboard', [UserController::class, 'index'])->name('dashboard');

});

Route::middleware(['auth', 'adminMiddleware'])->prefix('admin')->group(function () {
    Route::get('dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('data/hotel', [AdminController::class, 'dataHotel'])->name('admin.data.hotel');
    Route::get('data/destinasi', [AdminController::class, 'dataDestinasi'])->name('admin.data.destinasi');


    Route::get('data-managemen', [DataManagemenController::class, 'index'])->name('admin.data-managemen.index');
    Route::get('data-managemen/create', [DataManagemenController::class, 'create'])->name('admin.data-managemen.create');
    Route::resource('hotel', HotelController::class)->names('admin.hotel');
    Route::resource('destinasi', DestinasiController::class)->names('admin.destinasi');


    Route::get('/tools', function () {
        return Inertia::render('Admin/Tools');
    });

});


require __DIR__ . '/auth.php';

