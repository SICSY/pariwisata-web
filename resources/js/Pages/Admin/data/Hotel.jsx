import { Link } from "@inertiajs/react";
import { useState } from "react";

const Hotel = ({ data }) => {
    const [search, setSearch] = useState("");

    // const filteredData = data.filter((hotel) =>
    //     hotel.nama.toLowerCase().includes(search.toLowerCase())
    // );
    // console.log(data);
    return (
        <>
            {/* Main Content */}
            <main data-lenis-prevent className="flex-1 h-full  overflow-auto ">
                <div className="p-4 bg-gray-800 text-center flex items-center w-full  relative">
                    <span className="absolute left-4 text-white  px-2 py-1">
                        <Link href="/admin/dashboard">back</Link>
                    </span>

                    <h1 className="text-2xl font-bold text-white mx-auto">
                        Manajemen Hotel
                    </h1>
                </div>

                {/* Content Area */}
                <div className="p-4 relative gap-2  flex  mx-auto w-full  container flex-col align-middle">
                    {/* Search Section */}
                    <div className="bg-gray-800 rounded-lg p-4 text-white md:w-1/2 lg:w-1/3 mb-4">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            Cari Hotel
                        </h2>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-2 w-full bg-gray-700 text-white rounded-lg"
                            placeholder="Cari berdasarkan nama hotel"
                        />
                    </div>

                    {/* Hotel Table Section */}
                    <div className="bg-gray-800 rounded-lg p-4 text-white flex-1">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            Daftar Hotel
                        </h2>
                        <div className="overflow-auto w-full max-h-fit">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-700  border-2 border-gray-500  text-gray-200">
                                    <tr>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            No
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Nama
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Deskripsi
                                        </th>
                                        <th className="border-2 border-gray-500 px-4 py-2">
                                            Kapasitas
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
                                        <th className="border-2 border-gray-500 px-4 py-2 w-full ">
                                            Deksripsi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((hotel, index) => {
                                        const harga = JSON.parse(hotel.harga);
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
                                                    {hotel.klasifikasi_format}
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
                                                    {console.log(hotel.gambar)}
                                                    {hotel.gambar ? (
                                                        <img
                                                            src={`/storage/${hotel.gambar}`}
                                                            path={hotel.gambar}
                                                        ></img>
                                                    ) : (
                                                        "tidak ada"
                                                    )}
                                                </td>
                                                <td
                                                    className="border-2 border-gray-500 px-4 py-2
                                                    truncate sm:text-wrap  sm:min-w-80  max-w-52 min-h-full hover:text-wrap hover:overflow-auto will-change-scroll "
                                                >
                                                    {hotel.deskripsi}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hotel;
