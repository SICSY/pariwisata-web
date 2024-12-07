import Tabel from "@/Layouts/Tabel";
import { Head, Link } from "@inertiajs/react";

export default function Index({ data }) {
    // Define columns specifically for this page
    const columns = [
        {
            header: "No",
            accessorKey: "id",
        },
        {
            header: "Nama",
            accessorKey: "related.nama",
        },
        {
            header: "Role",
            accessorKey: "role",
        },
        {
            header: "Total",
            accessorKey: "total_pengunjung",
        },
        {
            header: "Tanggal",
            accessorKey: "created_at",
            Cell: ({ cell }) => {
                const date = new Date(cell.getValue());
                return date.toLocaleDateString("id-ID");
            },
        },
    ];

    return (
        <>
            <Head title="Manajemen Data Pariwisata" />
            <div className="flex flex-col min-h-screen bg-gray-900 text-white">
                {/* Header */}
                <header className="bg-gray-800 text-white p-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link
                            href={route("admin.dashboard")}
                            className="text-sm text-blue-300 hover:underline"
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
                    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
                        <Link
                            href={route("admin.kunjungan-managemen.create")}
                            className="bg-blue-600 px-4 py-2 rounded text-white shadow-md hover:bg-blue-700"
                        >
                            Tambah Data
                        </Link>
                    </div>

                    {/* Table */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-center text-gray-300">
                            Data Pengunjung
                        </h2>
                        <Tabel columns={columns} data={data} />{" "}
                        {/* Menggunakan DataTable yang sudah dipisahkan */}
                    </section>
                </main>
            </div>
        </>
    );
}
