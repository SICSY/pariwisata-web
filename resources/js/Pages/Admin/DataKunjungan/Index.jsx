import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ data, destinasis }) {
    return (
        <>
            <Head title="Manajemen Data Pariwisata" />
            <div className="flex flex-col  min-h-screen bg-gray-900 text-white">
                {/* Header */}
                <header className="bg-gray-800 text-white p-4 shadow">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link
                            href={route("admin.dashboard")}
                            className="text-sm underline"
                        >
                            Kembali
                        </Link>
                        <h1 className="text-2xl font-bold">
                            Manajemen Data Pariwisata
                        </h1>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6 flex flex-col gap-8">
                    {/* Search and Add Button */}
                    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow">
                        <input
                            type="text"
                            value=""
                            placeholder="Cari nama hotel atau destinasi..."
                            className="w-1/3 p-2 text-gray-700 border rounded shadow"
                        />
                        <Link
                            href={route("admin.kunjungan-managemen.create")}
                            className="bg-blue-600 px-4 py-2 rounded text-white shadow hover:bg-blue-700"
                        >
                            Tambah Data
                        </Link>
                    </div>

                    {/*  Table */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Data Hotel
                        </h2>
                        <div className="overflow-auto bg-gray-800 shadow rounded-lg p-4">
                            <table className="min-w-full table-auto border-collapse text-white ">
                                <thead className="bg-gray-700  border-2 border-gray-500  text-gray-200">
                                    <tr>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            No
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Nama
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Role
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Total
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Tanggal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center ">
                                    {data.map((pengunjung) => (
                                        <tr key={pengunjung.id}>
                                            <td className="border-2 border-gray-500 px-4 py-2">
                                                {pengunjung.id}
                                            </td>
                                            <td className="border-2 border-gray-500 px-4 py-2">
                                                {pengunjung.related.nama}
                                            </td>
                                            <td className="border-2 border-gray-500 px-4 py-2">
                                                {pengunjung.role}
                                            </td>

                                            <td className="border-2 border-gray-500 px-4 py-2">
                                                {pengunjung.total_pengunjung}
                                            </td>
                                            <td className="border-2 border-gray-500 px-4 py-2">
                                                {pengunjung.created_at
                                                    .slice(0, 10)
                                                    .split("-")
                                                    .reverse()
                                                    .join("/")}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
