<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class BeritaController extends Controller
{
    public function index()
    {
        // Menampilkan hanya post yang terlihat dan memuat relasi postable
        $posts = Post::where('is_visible', true)  // Memastikan hanya post yang visible yang diambil
            ->with('postable')          // Mengambil relasi postable
            ->get();                    // Mengambil semua data

        return inertia('User/Berita', [
            'posts' => $posts,  // Mengirim data posts ke frontend
        ]);
    }

    public function show(Post $post)
    {
        // Menampilkan detail dari post yang dipilih
        $post = Post::where('id', $post->id)
            ->with('postable')  // Memuat relasi postable
            ->firstOrFail();    // Mengambil post sesuai dengan id yang diberikan

        return inertia('User/DetailBerita', [
            'post' => $post,  // Mengirim data post yang ditampilkan
        ]);
    }
}
