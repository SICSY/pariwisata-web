import React from "react";

const DestinasiDetail = ({ destinasi }) => {
    const harga = JSON.parse(destinasi.harga);
    console.log(harga);

    return (
        <div className="min-h-screen bg-slate-900 text-white py-10 px-5">
            {/* Main Container */}
            <div className="max-w-5xl mx-auto bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="relative">
                    <img
                        src={
                            destinasi.gambar ||
                            "https://via.placeholder.com/800x400"
                        }
                        alt={destinasi.nama}
                        className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
                            {destinasi.nama}
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
                                {destinasi.klasifikasi_format || "N/A"}
                            </p>
                        </div>
                        {/* Lokasi */}
                        <div>
                            <h2 className="text-xl font-bold">Lokasi</h2>
                            <p className="mt-2 text-gray-300">
                                {destinasi.lokasi || "Belum tersedia"}
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
                            {destinasi.deskripsi ||
                                "Deskripsi belum tersedia untuk destinasi ini."}
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
                                        destinasi.created_at
                                    ).toLocaleDateString("id-ID")}
                                </span>
                            </li>
                            <li>
                                Diperbarui pada:{" "}
                                <span className="font-semibold">
                                    {new Date(
                                        destinasi.updated_at
                                    ).toLocaleDateString("id-ID")}
                                </span>
                            </li>
                            <li>
                                Lokasi Google Maps:{" "}
                                <a
                                    href={destinasi.google_map}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Lihat di Google Maps
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinasiDetail;
