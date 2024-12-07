import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
export default function Dashboard({ hotelCount, destinasiCount, auth }) {
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
                <div className="p-4  gap-2  flex flex-col    bg-gray-800 mt-2 rounded-xl border-slate-700 border ">
                    {/* Statistik Section */}
                    <div className="rounded-lg p-4 text-white md:w-fit h-fit">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            Statistik Pariwisata
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  text-center md:w-fit">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-lg">Total Kunjungan</h3>
                                <div>
                                    <span className="text-2xl font-bold"></span>
                                </div>
                                <span className="text-2xl font-bold"></span>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-lg">Total Destinasi</h3>
                                <span className="text-2xl font-bold">
                                    {destinasiCount}
                                </span>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-lg">Total Hotel</h3>
                                <span className="text-2xl font-bold">
                                    {hotelCount}
                                </span>
                            </div>
                            {/* Link to Data Management */}
                            <div className="bg-gray-700 hover:bg-gray-500 rounded-lg p-4 text-white text-center w-fit  ">
                                <Link
                                    href={route("admin.data-managemen.index")}
                                    className=" text-white font-extrabold mt-4 inline-block "
                                >
                                    <h2 className="text-lg font-semibold mb-4">
                                        Manajemen Data
                                    </h2>
                                    <p>
                                        Kelola data hotel dan destinasi secara
                                        lengkap.
                                    </p>
                                </Link>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4 text-white text-center w-fit ">
                                <h2 className="text-lg font-semibold mb-4">
                                    Manajemen Data
                                </h2>
                                <p>Kelola data Kunjungan .</p>
                                <Link
                                    href={route(
                                        "admin.kunjungan-managemen.index"
                                    )}
                                    className="underline text-blue-400 mt-4 inline-block"
                                >
                                    Buka Manajemen Data
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
