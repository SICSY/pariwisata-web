import { useState } from "react";

const Hotel = ({ data }) => {
    const [search, setSearch] = useState("");

    // Filter data based on the search term
    const filteredData = data.filter((hotel) =>
        hotel.nama.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Main Content */}
            <main data-lenis-prevent className="flex-1 h-full  overflow-auto ">
                {/* Dashboard Header */}
                <div className="p-4 bg-gray-800 text-center ">
                    <h1 className="text-2xl font-bold">Manajemen Hotel</h1>
                </div>

                {/* Content Area */}
                <div className="p-4 gap-2 border flex flex-col md:flex-row md:flex-wrap">
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
                        <div className="overflow-auto max-h-80">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-700">
                                        <th className="p-2">ID</th>
                                        <th className="p-2">Nama Hotel</th>
                                        <th className="p-2">
                                            Klasifikasi <br />
                                            bintang
                                        </th>
                                        <th className="p-2">Kapasitas Kamar</th>
                                        <th className="p-2">Harga</th>
                                        <th className="p-2">Alamat</th>
                                        <th className="p-2">Deskripsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((hotel) => (
                                            <tr
                                                key={hotel.id}
                                                className="border-b border-gray-700"
                                            >
                                                <td className="p-2">
                                                    {hotel.id}
                                                </td>
                                                <td className="p-2">
                                                    {hotel.nama}
                                                </td>
                                                <td className="p-2">
                                                    {hotel.klasifikasi}
                                                </td>
                                                <td className="p-2">
                                                    {hotel.kapasitas_kamar}
                                                </td>
                                                <td className="p-2">
                                                    {hotel.harga.toLocaleString(
                                                        "id-ID",
                                                        {
                                                            style: "currency",
                                                            currency: "IDR",
                                                        }
                                                    )}
                                                </td>
                                                <td className="p-2">
                                                    {hotel.lokasi}
                                                </td>
                                                <td className="p-2">
                                                    {hotel.deskripsi}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="px-4 py-3 text-center text-gray-500"
                                            >
                                                Tidak ada hotel yang ditemukan
                                            </td>
                                        </tr>
                                    )}
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
