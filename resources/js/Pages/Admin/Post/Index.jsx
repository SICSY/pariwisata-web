import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/react";

const Index = () => {
    const { flash } = usePage().props;
    console.log(flash.message);
    const toggleVisibility = (id) => {
        Inertia.patch(route("admin.post.toggle", id));
    };

    const deletePost = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus postingan ini?")) {
            Inertia.delete(route("admin.post.destroy", id));
        }
    };

    return (
        <div className="container mx-auto py-8">
            <Link href="/admin/post/create" className="mb-4">
                goto
            </Link>
            <h1 className="text-2xl font-bold mb-4">Kelola Postingan</h1>
            <table className="table-auto w-full bg-white shadow-lg text-black">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Judul</th>
                        <th className="px-4 py-2">Tipe</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Aksi</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td className="border px-4 py-2">{post.title}</td>
                            <td className="border px-4 py-2">
                                {post.postable_type}
                            </td>
                            <td className="border px-4 py-2">
                                {post.is_visible
                                    ? "Ditampilkan"
                                    : "Tidak Ditampilkan"}
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    className={`px-4 py-2 rounded ${
                                        post.is_visible
                                            ? "bg-red-500 text-white"
                                            : "bg-green-500 text-white"
                                    }`}
                                    onClick={() => toggleVisibility(post.id)}
                                >
                                    {post.is_visible
                                        ? "Sembunyikan"
                                        : "Tampilkan"}
                                </button>
                                <button
                                    className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
                                    onClick={() => deletePost(post.id)}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </table>
        </div>
    );
};

export default Index;
