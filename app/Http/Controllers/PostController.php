<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Destinasi;
use App\Models\Hotel;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        // Ambil semua postingan
        $posts = Post::with('postable')->get();


        return inertia('Admin/Post', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        // Ambil data dari entitas terkait
        $hotels = Hotel::all(); // Semua data hotel
        $destinasi = Destinasi::all(); // Semua data destinasi

        return inertia('Admin/Post/Create', [
            'hotels' => $hotels,
            'destinasi' => $destinasi,
        ]);
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'is_visible' => 'required|boolean',
            'postable_type' => 'required|string',
            'postable_id' => 'required|integer',
        ]);

        Post::create($validated);



        return redirect()->route(
            'admin.post.index'
        )->with('message', 'Postingan berhasil ditambahkan.');
    }

    public function toggleVisibility(Post $post)
    {
        // Toggle status is_visible
        $post->is_visible = !$post->is_visible;
        $post->save();

        return redirect()->back()->with('message', 'Status berhasil diubah.');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->back()->with('message', 'Postingan berhasil dihapus.');
    }
}
