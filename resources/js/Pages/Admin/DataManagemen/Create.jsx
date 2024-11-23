import { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";

const Create = ({ menu: initialMenu }) => {
    const [menu, setMenu] = useState(initialMenu || "hotel");
    const [pesan, setPesan] = useState(null);
    const [show, setShow] = useState(false);

    const {
        data: hotelData,
        setData: setHotelData,
        post: postHotel,
        errors: hotelErrors,
        reset: resetHotel,
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
        data: destinasiData,
        setData: setDestinasiData,
        post: postDestinasi,
        errors: destinasiErrors,
        reset: resetDestinasi,
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

    useForm({
        nama: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setPesan("");
        if (menu === "hotel") {
            postHotel(route("admin.hotel.store"), {
                onSuccess: () => {
                    setPesan("Success: Hotel data Submitted & Edit error");
                    resetHotel();
                },
                onError: () => {
                    setPesan("Error: Hotel data Submitted & Edit error");
                },
            });
        } else {
            postDestinasi(route("admin.destinasi.store"), {
                onSuccess: () => {
                    setPesan("Success: Destinasi data Submitted & Edit error");
                    resetDestinasi();
                },
                onError: () => {
                    setPesan("Error: Destinasi data Submitted & Edit error");
                },
            });
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
        const numericValue = value.replace(/[^\d]/g, "");

        if (menu === "hotel") {
            setHotelData({
                ...hotelData,
                harga: {
                    ...hotelData.harga,
                    [id]: numericValue ? parseInt(numericValue, 10) : 0,
                },
            });
        } else if (menu === "destinasi") {
            setDestinasiData({
                ...destinasiData,
                harga: {
                    ...destinasiData.harga,
                    [id]: numericValue ? parseInt(numericValue, 10) : 0,
                },
            });
        }
    };
    useEffect(() => {
        if (pesan) {
            setShow(true); // Menampilkan pesan
            const timer = setTimeout(() => {
                setShow(false); // Menyembunyikan pesan setelah 3 detik
            }, 3000); // Durasi 3000ms = 3 detik

            return () => clearTimeout(timer); // Membersihkan timer saat komponen unmount atau pesan hilang
        }
    }, [pesan]);

    return (
        <div lenis-data-prevent className="flex w-full  h-screen relative ">
            {show && pesan && (
                <div className="absolute left-2/4 right-2/4 w-min-fit h-fit   flex items-center justify-center bg-gray-800 bg-opacity-50 duration-1000">
                    <div
                        className={`text-white px-6 py-4 rounded-lg transition-all ${
                            pesan.includes("Error")
                                ? "bg-red-500"
                                : "bg-green-500"
                        }`}
                    >
                        {pesan}
                    </div>
                </div>
            )}
            <div className="w-full p-4  bg-gray-800 text-white">
                <div className="container max-w-xs sm:max-w-screen-sm justify-self-center">
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
                            onClick={() => setMenu("destinasi")}
                            className={`${
                                menu === "destinasi"
                                    ? "bg-blue-500"
                                    : "bg-gray-500"
                            } p-2 rounded-r`}
                        >
                            Destinasi
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
                                        : destinasiData.nama
                                }
                                onChange={(e) => {
                                    if (menu === "hotel") {
                                        setHotelData({
                                            ...hotelData,
                                            nama: e.target.value,
                                        });
                                    } else {
                                        setDestinasiData({
                                            ...destinasiData,
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
                            {menu === "destinasi" && destinasiErrors.nama && (
                                <div className="text-red-500">
                                    {destinasiErrors.nama}
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="klasifikasi"
                                className="block text-sm"
                            >
                                Klasifikasi
                            </label>
                            <select
                                id="klasifikasi"
                                className="border text-black px-4 py-2 w-full"
                                value={
                                    menu === "hotel"
                                        ? hotelData.klasifikasi
                                        : destinasiData.klasifikasi
                                }
                                onChange={(e) => {
                                    if (menu === "hotel") {
                                        setHotelData({
                                            ...hotelData,
                                            klasifikasi: e.target.value,
                                        });
                                    } else {
                                        setDestinasiData({
                                            ...destinasiData,
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
                                {menu === "destinasi" && (
                                    <>
                                        <option value="0">Destinasi </option>
                                        <option value="1">
                                            Destinasi & Water Boom
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
                            {menu === "destinasi" &&
                                destinasiErrors.klasifikasi && (
                                    <div className="text-red-500">
                                        {destinasiErrors.klasifikasi}
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
                                        setDestinasiData({
                                            ...destinasiData,
                                            gambar: e.target.files[0],
                                        });
                                    }
                                }}
                            />
                            {(menu === "hotel" ? hotelErrors : destinasiErrors)
                                .gambar && (
                                <div className="text-red-500">
                                    {
                                        (menu === "hotel"
                                            ? hotelErrors
                                            : destinasiErrors
                                        ).gambar
                                    }
                                </div>
                            )}
                        </div>

                        {menu === "hotel" && (
                            <>
                                <div className="mb-4">
                                    <label
                                        htmlFor="min"
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
                                                )}
                                                onChange={handleChange}
                                                placeholder="xxx,xxx,xx"
                                            />
                                            {(menu === "hotel"
                                                ? hotelErrors
                                                : destinasiErrors
                                            ).min && (
                                                <div className="text-red-500">
                                                    {
                                                        (menu === "hotel"
                                                            ? hotelErrors
                                                            : destinasiErrors
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
                                                : destinasiErrors
                                            ).max && (
                                                <div className="text-red-500">
                                                    {
                                                        (menu === "hotel"
                                                            ? hotelErrors
                                                            : destinasiErrors
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
                                                : destinasiData.deskripsi
                                        }
                                        onChange={(e) => {
                                            if (menu === "hotel") {
                                                setHotelData({
                                                    ...hotelData,
                                                    deskripsi: e.target.value,
                                                });
                                            } else {
                                                setDestinasiData({
                                                    ...destinasiData,
                                                    deskripsi: e.target.value,
                                                });
                                            }
                                        }}
                                    ></textarea>
                                </div>
                            </>
                        )}
                        {menu === "destinasi" && (
                            <>
                                <div className="mb-4">
                                    <label
                                        htmlFor="min"
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
                                                    destinasiData.harga?.min ||
                                                        " "
                                                )}
                                                onChange={handleChange}
                                                placeholder="xxx,xxx,xx"
                                            />
                                            {(menu === "destinasi"
                                                ? destinasiErrors
                                                : hotelErrors
                                            ).min && (
                                                <div className="text-red-500">
                                                    {
                                                        (menu === "destinasi"
                                                            ? destinasiErrors
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
                                                    destinasiData.harga?.max ||
                                                        " "
                                                )}
                                                onChange={handleChange}
                                                placeholder="xxx,xxx,xx"
                                            />
                                            {(menu === "hotel"
                                                ? destinasiErrors
                                                : hotelErrors
                                            ).max && (
                                                <div className="text-red-500">
                                                    {
                                                        (menu === "hotel"
                                                            ? destinasiErrors
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
                                        value={destinasiData.lokasi}
                                        onChange={(e) =>
                                            setDestinasiData({
                                                ...destinasiData,
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
                                        value={destinasiData.deskripsi}
                                        onChange={(e) =>
                                            setDestinasiData({
                                                ...destinasiData,
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
        </div>
    );
};

export default Create;
