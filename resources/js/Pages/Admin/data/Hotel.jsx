import Tabel from "@/Layouts/Tabel";
import { Head, Link } from "@inertiajs/react";

export default function Hotel({ data }) {
    console.log(data);
    const hargaMax = Math.max(
        ...data.map((hotel) => JSON.parse(hotel.harga).max)
    );
    const hargaMin = Math.min(
        ...data.map((hotel) => JSON.parse(hotel.harga).min)
    );

    // Definisi kolom tabel
    const columns = [
        {
            header: "No",
            accessorKey: "id",
        },
        {
            header: "Gambar",
            id: "gambar",
            accessorFn: (row) => <img src={`/storage/${row.gambar}`} />,
        },
        {
            header: "Nama",
            accessorKey: "nama",
        },

        {
            header: "Klasifikasi",
            accessorKey: "klasifikasi_format",
        },
        {
            header: "Kapasitas Kamar",
            accessorKey: "kapasitas_kamar",
        },
        {
            header: "Harga",
            id: "harga",
            accessorFn: (row) =>
                `Rp ${hargaMin.toLocaleString(
                    "id"
                )} - Rp ${hargaMax.toLocaleString("id")}`,
            // Cell: () => <span>{hargaMax}</span>,
        },
        {
            header: "Lokasi",
            accessorKey: "lokasi",
        },
        {
            header: "deskripsi",
            accessorKey: "deskripsi",
        },

        {
            header: "Dibuat",
            accessorKey: "created_at",
            Cell: ({ cell }) => {
                const date = new Date(cell.getValue());
                return date.toLocaleDateString("id-ID");
            },
        },
        {
            header: "Diubah",
            accessorKey: "updated_at",
            Cell: ({ cell }) => {
                const date = new Date(cell.getValue());
                return date.toLocaleDateString("id-ID");
            },
        },
    ];

    return (
        <>
            <Head title="Manajemen Data Hotel" />
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
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6 flex flex-col gap-8">
                    {/* Table Section */}
                    <section className="bg-gray-800 rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-4 text-center text-gray-300">
                            Data Hotel
                        </h2>
                        <Tabel columns={columns} data={data} />{" "}
                        {/* Komponen Tabel */}
                    </section>
                </main>
            </div>
        </>
    );
}
