import { Head } from "@inertiajs/react";
import React from "react";

const IndustriDetail = ({ industri }) => {
    const harga = JSON.parse(industri.harga);
    console.log(industri);

    return (
        <div className="min-h-screen bg-slate-900 text-white py-10 px-5">
            <Head title="industri Detail"></Head>
            {/* Main Container */}
            <div className="max-w-5xl mx-auto bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="relative">
                    <img
                        src={
                            `/storage/${industri.gambar}` ||
                            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        }
                        alt={industri.nama}
                        className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
                            {industri.nama}
                        </h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-10">
                    {/* Kategori & Lokasi */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Kategori */}
                        <div>
                            <h2 className="text-xl font-bold">Kategori</h2>
                            <p className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mt-2">
                                {industri.klasifikasi || "N/A"}
                            </p>
                        </div>
                        {/* Lokasi */}
                        <div>
                            <h2 className="text-xl font-bold">Lokasi</h2>
                            <p className="mt-2 text-gray-300">
                                {industri.lokasi || "Belum tersedia"}
                            </p>
                        </div>
                    </div>

                    {/* Harga */}
                    <div>
                        <h2 className="text-xl font-bold">Harga Tiket</h2>
                        <p className="mt-2 text-gray-300">
                            Rp{" "}
                            <span className="font-semibold">
                                {harga.min.toLocaleString("id", {
                                    minimumFractionDigits: 2,
                                })}
                            </span>{" "}
                            -{" "}
                            <span className="font-semibold">
                                {harga.max.toLocaleString("id", {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </p>
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <h2 className="text-2xl font-bold">Deskripsi</h2>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            {industri.deskripsi ||
                                "Deskripsi belum tersedia untuk industri ini."}
                        </p>
                    </div>

                    {/* Informasi Tambahan */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            Informasi Tambahan
                        </h2>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                            <li>
                                Dibuat pada:{" "}
                                <span className="font-semibold">
                                    {new Date(
                                        industri.created_at
                                    ).toLocaleDateString("id-ID")}
                                </span>
                            </li>
                            <li>
                                Diperbarui pada:{" "}
                                <span className="font-semibold">
                                    {new Date(
                                        industri.updated_at
                                    ).toLocaleDateString("id-ID")}
                                </span>
                            </li>
                            <li>
                                Lokasi Google Maps:{" "}
                                {industri.google_map ? (
                                    <a
                                        href={industri.google_map}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Lihat di Google Maps
                                    </a>
                                ) : (
                                    <span className="line-through text-gray-500">
                                        Belum tersedia
                                    </span>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriDetail;
