import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Index({ data }) {
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => setSearch(e.target.value);

    return (
        <div className="flex w-full h-screen overflow-hidden">
            <div className="w-full p-4 bg-gray-800 text-white">
                <Link
                    onClick={() => window.history.back()}
                    className="text-sm underline"
                >
                    Kembali
                </Link>
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Manajemen Data Pariwisata
                </h1>

                {/* Search and Add Button */}
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Cari nama hotel atau destinasi..."
                        className="w-1/3 p-2 text-black rounded"
                    />
                    <Link
                        href={route("data-managemen.create")}
                        className="bg-blue-600 px-4 py-2 rounded text-white"
                    >
                        Tambah Data
                    </Link>
                </div>

                {/* Data Table */}
                <div className="bg-gray-900 p-4 rounded-lg overflow-auto">
                    <table className="w-full text-left text-white">
                        <thead>
                            <tr className="bg-gray-700">
                                <th className="p-2">Nama</th>
                                <th className="p-2">Kategori</th>
                                <th className="p-2">Lokasi</th>
                                <th className="p-2">Jumlah Pengunjung</th>
                                <th className="p-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-700">
                                <td className="p-2">Hotel XYZ</td>
                                <td className="p-2">Hotel</td>
                                <td className="p-2">Jakarta</td>
                                <td className="p-2">1,200</td>
                                <td className="p-2 flex space-x-2">
                                    <Link
                                        href="#"
                                        className="bg-yellow-500 px-2 py-1 rounded text-black"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-red-600 px-2 py-1 rounded text-white"
                                        onClick={() => alert("Hapus data ini?")}
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            {/* Tambahkan lebih banyak data */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
