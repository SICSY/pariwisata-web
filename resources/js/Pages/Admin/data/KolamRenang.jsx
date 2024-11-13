import React from "react";

const KolamRenang = ({ data }) => {
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
                    {data.map((kolamRenang) => (
                        <tr key={kolamRenang.id}>
                            <td className="px-4 py-2 border-b">
                                {kolamRenang.id}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {kolamRenang.nama}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {kolamRenang.klasifikasi}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {kolamRenang.harga.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {kolamRenang.deskripsi}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {kolamRenang.lokasi}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default KolamRenang;
