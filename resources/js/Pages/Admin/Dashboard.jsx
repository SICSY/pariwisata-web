import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ totalPengunjungHotel, tabel }) {
    return (
        <div className="flex flex-col sm:flex-row w-full h-screen overflow-hidden text-white bg-gray-900">
            {/* Sidebar for Desktop */}
            <div className="hidden sm:block w-64 bg-gray-900 text-white shadow-lg">
                <SideBar />
            </div>

            {/* Main Content */}
            <main data-lenis-prevent className="flex-1 h-full overflow-auto">
                <AuthenticatedLayout>
                    <Head title="Dashboard" />
                </AuthenticatedLayout>

                {/* Dashboard Header */}
                <div className="p-4 bg-gray-800 text-center">
                    <h1 className="text-2xl font-bold">
                        Dashboard Admin - Pariwisata
                    </h1>
                </div>

                {/* Content Area */}
                <div className="p-4  gap-2 border flex flex-col md:flex-row md:flex-wrap ">
                    {/* Statistik Section */}
                    <div className="bg-gray-800 rounded-lg p-4 text-white md:w-fit h-fit">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            Statistik Pariwisata
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  text-center md:w-fit">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-lg">Total Hotel</h3>
                                <span className="text-2xl font-bold">
                                    {totalPengunjungHotel}
                                </span>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-lg">Total Destinasi</h3>
                                <span className="text-2xl font-bold">256</span>
                            </div>
                            {/* Link to Data Management */}
                            <div className="bg-gray-800 rounded-lg p-4 text-white text-center w-fit border">
                                <h2 className="text-lg font-semibold mb-4">
                                    Manajemen Data
                                </h2>
                                <p>
                                    Kelola data hotel dan destinasi secara
                                    lengkap.
                                </p>
                                <Link
                                    href={route("data-managemen.index")}
                                    className="underline text-blue-400 mt-4 inline-block"
                                >
                                    Buka Manajemen Data
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Data Pengunjung Hotel Table */}
                    <div
                        data-lenis-prevent
                        className="bg-gray-800 rounded-lg p-4 text-white flex-1"
                    >
                        <h2 className="text-lg font-semibold text-center mb-4">
                            Data Pengunjung Hotel
                        </h2>
                        <div className="overflow-auto max-h-80">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-700">
                                        <th className="p-2">Role</th>
                                        <th className="p-2">
                                            Kunjungan Pertahun
                                        </th>
                                        <th className="p-2">
                                            Total Pengunjung
                                        </th>
                                        <th className="p-2">Hotel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabel.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-700"
                                        >
                                            <td className="p-2">{item.role}</td>
                                            <td className="p-2">
                                                {item.format_waktu_kunjungan}
                                            </td>
                                            <td className="p-2">
                                                {item.total_pengunjung}
                                            </td>
                                            <td className="p-2">
                                                {item.hotel
                                                    ? item.hotel.nama
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Extra Statistics Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                        <div className="bg-gray-800 rounded-lg p-4 text-white">
                            <h2 className="text-lg font-semibold text-center mb-4">
                                Statistik Pariwisata
                            </h2>
                            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
                                <h3 className="text-lg">Total Hotel</h3>
                                <span className="text-2xl font-bold">128</span>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4 text-white">
                            <h2 className="text-lg font-semibold text-center mb-4">
                                Statistik Pariwisata
                            </h2>
                            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
                                <h3 className="text-lg">Total Hotel</h3>
                                <span className="text-2xl font-bold">128</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
