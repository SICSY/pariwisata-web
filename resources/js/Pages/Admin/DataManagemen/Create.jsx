import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Create() {
    const [menu, setMenu] = useState("hotel");

    // Form hooks for hotel and swimming pool data
    const {
        data: hotelData,
        setData: setHotelData,
        post: postHotel,
        errors: hotelErrors,
    } = useForm({
        nama: "",
        klasifikasi: "",
        harga: {
            min: "",
            max: "",
        },
        gambar: "",
        deskripsi: "",
        lokasi: "",
        kapasitas_kamar: "",
    });

    const {
        data: kolamData,
        setData: setKolamData,
        post: postKolam,
        errors: kolamErrors,
    } = useForm({
        nama: "",
        klasifikasi: "",
        harga: {
            min: "",
            max: "",
        },
        gambar: "",
        deskripsi: "",
        lokasi: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (menu === "hotel") {
            postHotel(route("hotel.store"), hotelData, {
                onSuccess: (re) => {
                    console.log("berhasil", re);
                },
            });
        } else {
            postKolam(route("kolamRenang.store", kolamData));
        }
    };

    const formatRupiah = (value) => {
        const validValue = value
            ? value.toString().replace(/[^0-9]/g, "")
            : "0";
        return validValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const handleChange = (e) => {
        const { id, value } = e.target;
        const numericValue = value.replace(/[^\d]/g, ""); // Menghapus karakter non-angka

        if (menu === "hotel") {
            setHotelData({
                ...hotelData,
                harga: {
                    ...hotelData.harga,
                    [id]: numericValue ? parseInt(numericValue, 10) : 0,
                },
            });
        } else if (menu === "kolam") {
            setKolamData({
                ...kolamData,
                harga: {
                    ...kolamData.harga,
                    [id]: numericValue ? parseInt(numericValue, 10) : 0,
                },
            });
        }
    };

    console.log(hotelData);
    return (
        <div className="flex w-full h-screen overflow-hidden">
            <div className="w-full p-4 bg-gray-800 text-white">
                <Link
                    onClick={() => window.history.back()}
                    className="text-sm underline"
                >
                    Kembali
                </Link>
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Tambah Data Pariwisata
                </h1>

                <div className="mb-4">
                    <button
                        onClick={() => setMenu("hotel")}
                        className={`${
                            menu === "hotel" ? "bg-blue-500" : "bg-gray-500"
                        } p-2 rounded-l`}
                    >
                        Hotel
                    </button>
                    <button
                        onClick={() => setMenu("kolam")}
                        className={`${
                            menu === "kolam" ? "bg-blue-500" : "bg-gray-500"
                        } p-2 rounded-r`}
                    >
                        Kolam Renang
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="type" value={menu} />

                    <div className="mb-4">
                        <label htmlFor="nama" className="block text-sm">
                            Nama
                        </label>
                        <input
                            type="text"
                            id="nama"
                            className="border text-black px-4 py-2 w-full"
                            value={
                                menu === "hotel"
                                    ? hotelData.nama
                                    : kolamData.nama
                            }
                            onChange={(e) => {
                                if (menu === "hotel") {
                                    setHotelData({
                                        ...hotelData,
                                        nama: e.target.value,
                                    });
                                } else {
                                    setKolamData({
                                        ...kolamData,
                                        nama: e.target.value,
                                    });
                                }
                            }}
                        />
                        {menu === "hotel" && hotelErrors.nama && (
                            <div className="text-red-500">
                                {hotelErrors.nama}
                            </div>
                        )}
                        {menu === "kolam" && kolamErrors.nama && (
                            <div className="text-red-500">
                                {kolamErrors.nama}
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="klasifikasi" className="block text-sm">
                            Klasifikasi
                        </label>
                        <select
                            id="klasifikasi"
                            className="border text-black px-4 py-2 w-full"
                            value={
                                menu === "hotel"
                                    ? hotelData.klasifikasi
                                    : kolamData.klasifikasi
                            }
                            onChange={(e) => {
                                if (menu === "hotel") {
                                    setHotelData({
                                        ...hotelData,
                                        klasifikasi: e.target.value,
                                    });
                                } else {
                                    setKolamData({
                                        ...kolamData,
                                        klasifikasi: e.target.value,
                                    });
                                }
                            }}
                        >
                            <option disabled value="">
                                Pilih Klasifikasi
                            </option>
                            {menu === "hotel" && (
                                <>
                                    <option value="0">Non Bintang</option>
                                    <option value="1">Bintang 1</option>
                                    <option value="2">Bintang 2</option>
                                    <option value="3">Bintang 3</option>
                                    <option value="4">Bintang 4</option>
                                    <option value="5">Bintang 5</option>
                                </>
                            )}
                            {menu === "kolam" && (
                                <>
                                    <option value="0">Kolam Renang</option>
                                    <option value="1">
                                        Kolam Renang & Water Boom
                                    </option>
                                    <option value="2">Budaya</option>
                                    <option value="3">Buatan</option>
                                    <option value="4">Alam</option>
                                </>
                            )}
                        </select>
                        {menu === "hotel" && hotelErrors.klasifikasi && (
                            <div className="text-red-500">
                                {hotelErrors.klasifikasi}
                            </div>
                        )}
                        {menu === "kolam" && kolamErrors.klasifikasi && (
                            <div className="text-red-500">
                                {kolamErrors.klasifikasi}
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="gambar" className="block text-sm">
                            Gambar
                        </label>
                        <input
                            type="file"
                            id="gambar"
                            className="border text-black px-4 py-2 w-full"
                            onChange={(e) => {
                                if (menu === "hotel") {
                                    setHotelData({
                                        ...hotelData,
                                        gambar: e.target.files[0],
                                    });
                                } else {
                                    setKolamData({
                                        ...kolamData,
                                        gambar: e.target.files[0],
                                    });
                                }
                            }}
                        />
                        {(menu === "hotel" ? hotelErrors : kolamErrors)
                            .gambar && (
                            <div className="text-red-500">
                                {
                                    (menu === "hotel"
                                        ? hotelErrors
                                        : kolamErrors
                                    ).gambar
                                }
                            </div>
                        )}
                    </div>

                    {menu === "hotel" && (
                        <>
                            <div className="mb-4">
                                <label
                                    htmlFor="min:max"
                                    className="block text-sm"
                                >
                                    Harga
                                </label>
                                <div className="flex justify-between">
                                    <div className="w-full pr-2">
                                        <label
                                            htmlFor="min"
                                            className="block text-sm"
                                        >
                                            Min
                                        </label>
                                        <input
                                            type="text"
                                            id="min"
                                            className="border text-black  px-4 py-2 w-full"
                                            value={formatRupiah(
                                                hotelData.harga?.min || " "
                                            )} // Menggunakan formatRupiah untuk menampilkan nilai
                                            onChange={handleChange} // Mengubah nilai raw ketika ada perubahan input
                                            placeholder="xxx,xxx,xx"
                                        />
                                        {(menu === "hotel"
                                            ? hotelErrors
                                            : kolamErrors
                                        ).min && (
                                            <div className="text-red-500">
                                                {
                                                    (menu === "hotel"
                                                        ? hotelErrors
                                                        : kolamErrors
                                                    ).min
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full pr-2">
                                        <label
                                            htmlFor="max"
                                            className="block text-sm"
                                        >
                                            Max
                                        </label>
                                        <input
                                            type="text"
                                            id="max"
                                            className="border text-black  px-4 py-2 w-full"
                                            value={formatRupiah(
                                                hotelData.harga?.max || " "
                                            )}
                                            onChange={handleChange}
                                            placeholder="xxx,xxx,xx"
                                        />
                                        {(menu === "hotel"
                                            ? hotelErrors
                                            : kolamErrors
                                        ).max && (
                                            <div className="text-red-500">
                                                {
                                                    (menu === "hotel"
                                                        ? hotelErrors
                                                        : kolamErrors
                                                    ).max
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="kapasitas_kamar"
                                    className="block text-sm"
                                >
                                    Kapasitas Kamar
                                </label>
                                <input
                                    type="teks"
                                    id="kapasitas_kamar"
                                    className="border text-black px-4 py-2 w-full"
                                    value={hotelData.kapasitas_kamar}
                                    onChange={(e) =>
                                        setHotelData({
                                            ...hotelData,
                                            kapasitas_kamar: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="lokasi"
                                    className="block text-sm"
                                >
                                    Lokasi
                                </label>
                                <input
                                    type="teks"
                                    id="lokasi"
                                    className="border text-black px-4 py-2 w-full"
                                    value={hotelData.lokasi}
                                    onChange={(e) =>
                                        setHotelData({
                                            ...hotelData,
                                            lokasi: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="deskripsi"
                                    className="block text-sm"
                                >
                                    Deskripsi
                                </label>
                                <textarea
                                    id="deskripsi"
                                    className="border text-black px-4 py-2 w-full"
                                    rows={4}
                                    value={
                                        menu === "hotel"
                                            ? hotelData.deskripsi
                                            : kolamData.deskripsi
                                    }
                                    onChange={(e) => {
                                        if (menu === "hotel") {
                                            setHotelData({
                                                ...hotelData,
                                                deskripsi: e.target.value,
                                            });
                                        } else {
                                            setKolamData({
                                                ...kolamData,
                                                deskripsi: e.target.value,
                                            });
                                        }
                                    }}
                                ></textarea>
                            </div>
                        </>
                    )}
                    {menu === "kolam" && (
                        <>
                            <div className="mb-4">
                                <label
                                    htmlFor="min:max"
                                    className="block text-sm"
                                >
                                    Harga
                                </label>
                                <div className="flex justify-between">
                                    <div className="w-full pr-2">
                                        <label
                                            htmlFor="min"
                                            className="block text-sm"
                                        >
                                            Min
                                        </label>
                                        <input
                                            type="text"
                                            id="min"
                                            className="border text-black  px-4 py-2 w-full"
                                            value={formatRupiah(
                                                kolamData.harga?.min || " "
                                            )} // Menggunakan formatRupiah untuk menampilkan nilai
                                            onChange={handleChange} // Mengubah nilai raw ketika ada perubahan input
                                            placeholder="xxx,xxx,xx"
                                        />
                                        {(menu === "kolam"
                                            ? kolamErrors
                                            : hotelErrors
                                        ).min && (
                                            <div className="text-red-500">
                                                {
                                                    (menu === "kolam"
                                                        ? kolamErrors
                                                        : hotelErrors
                                                    ).min
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full pl-2">
                                        <label
                                            htmlFor="max"
                                            className="block text-sm"
                                        >
                                            Max
                                        </label>
                                        <input
                                            type="text"
                                            id="max"
                                            className="border text-black px-4 py-2 w-full"
                                            value={formatRupiah(
                                                kolamData.harga?.max || " "
                                            )}
                                            onChange={handleChange}
                                            placeholder="xxx,xxx,xx"
                                        />
                                        {(menu === "hotel"
                                            ? kolamErrors
                                            : hotelErrors
                                        ).max && (
                                            <div className="text-red-500">
                                                {
                                                    (menu === "hotel"
                                                        ? kolamErrors
                                                        : hotelErrors
                                                    ).max
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="lokasi"
                                    className="block text-sm"
                                >
                                    Lokasi
                                </label>
                                <input
                                    type="teks"
                                    id="lokasi"
                                    className="border text-black px-4 py-2 w-full"
                                    value={kolamData.lokasi}
                                    onChange={(e) =>
                                        setKolamData({
                                            ...kolamData,
                                            lokasi: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="deskripsi"
                                    className="block text-sm"
                                >
                                    Deskripsi
                                </label>
                                <input
                                    type="teks"
                                    id="deskripsi"
                                    className="border text-black px-4 py-2 w-full"
                                    value={kolamData.deskripsi}
                                    onChange={(e) =>
                                        setKolamData({
                                            ...kolamData,
                                            deskripsi: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
