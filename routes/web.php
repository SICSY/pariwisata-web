<?php


use App\Http\Controllers\PostController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DataKunjunganController;
use App\Http\Controllers\DataManagemenController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\DestinasiController;
use App\Http\Controllers\PengunjungController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\BeritaController as UserBeritaController;
use App\Http\Controllers\User\DestinasiController as UserDestinasiController;
use App\Http\Controllers\User\IndustriPariwisataController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'dataIndex']);

Route::get('/industri-pariwisata', [IndustriPariwisataController::class, 'index']);
Route::get('/industri-pariwisata/{industri}', [IndustriPariwisataController::class, 'show'])->name('user.industri.show');
Route::get('/destinasi', [UserDestinasiController::class, 'index']);
Route::get('/destinasi/{destinasi}', [UserDestinasiController::class, 'show'])->name('user.destinasi.show');

Route::get('/berita', [UserBeritaController::class, 'index'])->name('user.berita.index');
Route::get('/berita/{post}', [UserBeritaController::class, 'show'])->name('user.berita.show');

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

Route::middleware(['auth', 'adminMiddleware'])->prefix('admin')->group(function () {
    Route::get('dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('data/hotel', [AdminController::class, 'dataHotel'])->name('admin.data.hotel');
    Route::get('data/destinasi', [AdminController::class, 'dataDestinasi'])->name('admin.data.destinasi');
    Route::get('data/konten-view', [AdminController::class, 'dataKontenView'])->name('admin.konten-view');

    // Route::get('data/pengunjung', [AdminController::class, 'dataPengunjung'])->name('admin.pengunjung');

    Route::get('data-managemen', [DataManagemenController::class, 'index'])->name('admin.data-managemen.index');
    Route::get('data-managemen/create', [DataManagemenController::class, 'create'])->name('admin.data-managemen.create');
    Route::resource('hotel', HotelController::class)->only(['index', 'store', 'update', 'edit', 'show', 'destroy'])->names('admin.hotel');
    Route::resource('destinasi', DestinasiController::class)->names('admin.destinasi');

    // Route untuk menampilkan form
    Route::get('kunjungan-managemen', [DataKunjunganController::class, 'index'])->name('admin.kunjungan-managemen.index');
    Route::get('kunjungan-managemen/create', [DataKunjunganController::class, 'create'])->name('admin.kunjungan-managemen.create');
    Route::post('kunjungan-managemen/create', [DataKunjunganController::class, 'store'])->name('admin.kunjungan-managemen.store');

    Route::get('data/pengunjung', [PengunjungController::class, 'index'])->name("admin.pengunjung.index");

    // Route::get('/posts', [PostController::class, 'index'])->name('admin.post.index');
    // Route::get('/posts/create', [PostController::class, 'create'])->name('admin.post.create');
    // Route::post('/posts', [PostController::class, 'store'])->name('admin.post.store');
    // Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('admin.post.edit');
    // Route::put('/posts/{post}', [PostController::class, 'update'])->name('admin.post.update');
    // Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('admin.post.destroy');



    Route::resource('posts', PostController::class)->names('admin.post');



    Route::get('/tools', function () {
        return Inertia::render('Admin/Tools');
    });

});


require __DIR__ . '/auth.php';

