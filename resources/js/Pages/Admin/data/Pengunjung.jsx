import Tabel from "@/Layouts/Tabel";
import { Head, Link } from "@inertiajs/react";

export default function Pengunjung({ data }) {
    console.log(data);
    const columns = [
        {
            header: "No",
            accessorKey: "id",
        },
        {
            header: "Status",
            accessorKey: "role",
        },
        {
            header: "Total",
            accessorKey: "total_pengunjung",
        },

        {
            header: "di Buat",
            accessorKey: "created_at",
            Cell: ({ cell }) => {
                const date = new Date(cell.getValue());
                return date.toLocaleDateString("id-ID");
            },
        },
        {
            header: "di Ubah",
            accessorKey: "updated_at",
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
