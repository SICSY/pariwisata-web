import React from "react";

const Pengunjung = ({ data }) => {
    return (
        <div className="text-white border">
            <h1>Daftar Pengunjung</h1>
            <table className="table-auto w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Waktu Kunjungan</th>
                        <th className="border px-4 py-2">Total Pengunjung</th>
                        <th className="border px-4 py-2">Role</th>
                        <th className="border px-4 py-2">Hotel</th>
                        <th className="border px-4 py-2">Kolam Renang</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pengunjung, index) => (
                        <tr key={index} className="border-t">
                            <td className="border px-4 py-2">
                                {pengunjung.format_waktu_kunjungan}
                            </td>
                            <td className="border px-4 py-2">
                                {pengunjung.total_pengunjung}
                            </td>
                            <td className="border px-4 py-2">
                                {pengunjung.role}
                            </td>
                            <td className="border px-4 py-2">
                                {pengunjung.hotel?.nama || ""}
                            </td>
                            <td className="border px-4 py-2">
                                {pengunjung.kolam_renang?.nama || ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pengunjung;
