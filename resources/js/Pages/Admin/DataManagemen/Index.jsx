import { Head, Link, router, usePage } from "@inertiajs/react";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export default function Index({ hotel, destinasi }) {
    const [search, setSearch] = useState("");
    const { data: hotels, links: hotelLinks } = hotel;
    const { data: destinasis, links: destinasiLinks } = destinasi;
    const { flash } = usePage().props;
    const message = flash.message;
    const handleSearchChange = (e) => setSearch(e.target.value);
    console.log(hotels);
    const handleDelete = (id, type) => {
        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            console.log(id, type);
            if (type === "hotel") {
                router.delete(
                    route("admin.hotel.destroy", id),
                    {
                        onSuccess: () => {
                            enqueueSnackbar(message, {
                                variant: "success",
                                autoHideDuration: 3000,
                            });
                        },
                        onError: (error) => {
                            alert("Terjadi kesalahan saat menghapus data.");
                        },
                    },
                    {
                        preserveScroll: true,
                        preserveState: true,
                    }
                );
            } else {
                router.delete(
                    route("admin.destinasi.destroy", id),
                    {
                        onSuccess: () => {
                            alert("Data Destinasi berhasil dihapus");
                        },
                        onError: (e) => {
                            alert("Terjadi kesalahan saat menghapus data." + e);
                        },
                    },
                    {
                        preserveScroll: true,
                        preserveState: true,
                    }
                );
            }
        }
    };

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
                    <div className="flex  place-self-end w-full  bg-gray-800 p-4 rounded-lg shadow items-end justify-end">
                        <Link
                            href={route("admin.data-managemen.create")}
                            className="bg-blue-600 px-4 py-2 rounded text-white shadow flex hover:bg-blue-700"
                        >
                            Tambah Data
                        </Link>
                    </div>

                    {/* Hotels Table */}
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
                                            Klasifikasi
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Kapasitas <br></br>
                                            kamar
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Harga Min
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Harga Max
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Gambar
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Lokasi
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2 w-full ">
                                            Deksripsi
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hotels.length > 0 ? (
                                        (console.log(hotels.length >= 1),
                                        hotels.map((hotel, index) => {
                                            const harga = JSON.parse(
                                                hotel.harga
                                            );
                                            return (
                                                <tr
                                                    key={index}
                                                    className="even:bg-gray-700 capitalize"
                                                >
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {hotel.id}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {hotel.nama}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {hotel.klasifikasi}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {hotel.kapasitas_kamar}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {harga.min}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {harga.max}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {hotel.gambar ? (
                                                            <img
                                                                src={`/storage/${hotel.gambar}`}
                                                                path={
                                                                    hotel.gambar
                                                                }
                                                            ></img>
                                                        ) : (
                                                            "tidak ada"
                                                        )}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2">
                                                        {hotel.lokasi}
                                                    </td>
                                                    <td
                                                        className="border-2 border-gray-500 px-4 py-2
                                                    truncate sm:text-wrap sm:min-w-80  max-w-52 min-h-52 hover:text-wrap hover:overflow-auto will-change-scroll "
                                                    >
                                                        {hotel.deskripsi}
                                                    </td>
                                                    <td className="border-2 border-gray-500 px-4 py-2  ">
                                                        <div className="flex gap-2">
                                                            <button className="text-white  px-4 rounded-xl bg-blue-600 border-2 hover:bg-blue-700">
                                                                <Link
                                                                    href={route(
                                                                        "admin.hotel.edit",
                                                                        [
                                                                            hotel.id,
                                                                        ]
                                                                    )}
                                                                >
                                                                    Edit
                                                                </Link>
                                                            </button>
                                                            <button
                                                                className="text-black rounded-xl px-2 bg-red-700 border-2 border-gray-500"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        hotel.id,
                                                                        "hotel"
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        }))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={10}
                                                className="border-2 border-gray-500 px-4 py-2 text-center"
                                            >
                                                Data tidak tersedia
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Hotel Pagination */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {hotelLinks.map((link, index) => (
                                <Link
                                    preserveScroll
                                    key={index}
                                    href={` /${link.url}`}
                                    className={`px-4 py-2  rounded ${
                                        link.active
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-800 text-blue-500"
                                    } ${
                                        !link.url &&
                                        "cursor-not-allowed opacity-50 pointer-events-none"
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Data Destinasi
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
                                            Klasifikasi
                                        </th>

                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Harga Min
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Harga Max
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Gambar
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            lokasi
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Google Maps
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2 w-full ">
                                            Deksripsi
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {destinasis.map((destinasi, index) => {
                                        const harga = JSON.parse(
                                            destinasi.harga
                                        );
                                        return (
                                            <tr
                                                key={index}
                                                className="even:bg-gray-700 capitalize"
                                            >
                                                <td className="border-2 border-gray-500 px-4 py-2">
                                                    {destinasi.id}
                                                </td>
                                                <td className="border-2 border-gray-500 px-4 py-2">
                                                    {destinasi.nama}
                                                </td>
                                                <td className="border-2 border-gray-500 px-4 py-2">
                                                    {destinasi.klasifikasi}
                                                </td>

                                                <td className="border-2 border-gray-500 px-4 py-2">
                                                    {harga.min}
                                                </td>
                                                <td className="border-2 border-gray-500 px-4 py-2">
                                                    {harga.max}
                                                </td>

                                                <td className="border-2 border-gray-500 px-4 py-2">
                                                    {destinasi.gambar ? (
                                                        <img
                                                            src={`/storage/${destinasi.gambar}`}
                                                            path={
                                                                destinasi.gambar
                                                            }
                                                        ></img>
                                                    ) : (
                                                        "tidak ada"
                                                    )}
                                                </td>
                                                <td className="border-2 border-gray-500 px-4 py-2">
                                                    {destinasi.lokasi}
                                                </td>
                                                <td className="border-2 lowercase border-gray-500 px-4 py-2">
                                                    {destinasi.google_map}
                                                </td>
                                                <td
                                                    className="border-2 border-gray-500 px-4 py-2
                                                    truncate sm:text-wrap sm:min-w-80  max-w-52 min-h-52 hover:text-wrap hover:overflow-auto will-change-scroll "
                                                >
                                                    {destinasi.deskripsi}
                                                </td>
                                                <td className="border-2 border-gray-500 px-4 py-2  ">
                                                    <div className="flex gap-2">
                                                        <button className="text-white  px-4 rounded-xl bg-blue-600 border-2 hover:bg-blue-700">
                                                            <Link
                                                                href={route(
                                                                    "admin.destinasi.edit",
                                                                    [
                                                                        destinasi.id,
                                                                    ]
                                                                )}
                                                            >
                                                                Edit
                                                            </Link>
                                                        </button>
                                                        <button
                                                            className="text-black rounded-xl px-2 bg-red-700 border-2 border-gray-500"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    destinasi.id,
                                                                    "destinasi"
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                            {destinasiLinks.map((link, index) => (
                                <Link
                                    preserveScroll
                                    key={index}
                                    href={`${link.url}`}
                                    className={`px-4 py-2  rounded ${
                                        link.active
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-800 text-blue-500"
                                    } ${
                                        !link.url &&
                                        "pointer-events-none cursor-not-allowed opacity-50"
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
