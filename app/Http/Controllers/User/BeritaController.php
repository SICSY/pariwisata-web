<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class BeritaController extends Controller
{
    public function index()
    {


        return inertia('User/Berita', [
            'posts' => Post::all()
        ]);
    }

    public function show(Post $post)
    {
        // Menampilkan detail dari post yang dipilih
        $post = Post::where('id', $post->id)->get()->first();

        return inertia('User/BeritaDetail', [
            'post' => $post,  // Mengirim data post yang ditampilkan
        ]);
    }
}
