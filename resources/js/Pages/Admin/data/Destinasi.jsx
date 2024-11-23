import React from "react";

const Destinasi = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table
                data-lenis-prevent
                className="table-auto min-w-full bg-white border border-gray-200 text-black"
            >
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border-b">ID</th>
                        <th className="px-4 py-2 border-b">Nama</th>
                        <th className="px-4 py-2 border-b">Klasifikasi</th>
                        <th className="px-4 py-2 border-b">Harga</th>

                        <th className="px-4 py-2 border-b">Deskripsi</th>
                        <th className="px-4 py-2 border-b">Lokasi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((destinasi) => (
                        <tr key={destinasi.id}>
                            <td className="px-4 py-2 border-b">
                                {destinasi.id}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {destinasi.nama}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {destinasi.klasifikasi}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {destinasi.harga.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {destinasi.deskripsi}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {destinasi.lokasi}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Destinasi;
