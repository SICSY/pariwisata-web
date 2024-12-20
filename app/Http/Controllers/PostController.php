<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        // Fetch all posts from the database
        $posts = Post::all();

        // Return the posts to the frontend via Inertia
        return Inertia::render('Admin/post/Index', [
            'posts' => $posts,
        ]);
    }

    // Create a new post
    public function store(Request $request)
    {


        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'status' => 'required|string|in:draft,published',
        ]);

        Post::create($request->all());

        return redirect()->route(
            'admin.post.index'
        );
    }

    // Update an existing post
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'status' => 'required|string|in:draft,published',
        ]);

        $post->update($request->all());

        return redirect()->back()->with('success', 'Post created successfully!');
    }

    // Delete a post
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->back()->with('success', 'Post created successfully!');
    }
}
