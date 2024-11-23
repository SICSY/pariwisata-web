import { usePage } from "@inertiajs/react";
import React from "react";

const Berita = () => {
    const { posts } = usePage().props;
    console.log(posts);

    return (
        <div className="bg-gray-900 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-white mb-6">
                Berita Terbaru
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts && posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
                        >
                            <div className="p-4">
                                <h2 className="uppercase text-xl font-bold text-white mb-2">
                                    {post.title}
                                </h2>
                                <h3 className="text-sm text-gray-400">
                                    {post.postable_type} - {post.postable.nama}
                                </h3>

                                <p className="text-gray-300">
                                    {post.content.substring(0, 100)}...
                                </p>
                                <span className="text-end relative  flex justify-end text-gray-400 text-xs mb-2">
                                    Di Unggah:{" "}
                                    {new Date(
                                        post.updated_at
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="bg-gray-700 text-center p-2">
                                <a
                                    href={`/posts/${post.id}`}
                                    className="text-sm text-blue-400 hover:underline"
                                >
                                    Baca Selengkapnya
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white">Tidak ada postingan tersedia.</p>
                )}
            </div>
        </div>
    );
};

export default Berita;
