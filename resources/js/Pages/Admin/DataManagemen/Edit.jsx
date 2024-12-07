import { useEffect, useState } from "react";
import { Link, router, useForm } from "@inertiajs/react";

const Edit = ({
    menu: initialMenu,
    editDataHotel = {},
    editDataDestinasi = {},
}) => {
    const [menu, setMenu] = useState(initialMenu);
    const [pesan, setPesan] = useState(false);
    const [show, setShow] = useState(false);
    //
    const harga =
        menu === "hotel"
            ? JSON.parse(editDataHotel.harga)
            : JSON.parse(editDataDestinasi.harga);
    const {
        data: hotelData,
        setData: setHotelData,
        errors: hotelErrors,
        reset: resetHotel,
    } = useForm({
        nama: editDataHotel.nama || "",
        klasifikasi: editDataHotel.klasifikasi || "",
        harga: {
            min: harga.min || "",
            max: harga.max || "",
        },
        gambar: "",
        deskripsi: editDataHotel.deskripsi || "",
        lokasi: editDataHotel.lokasi || "",
        kapasitas_kamar: editDataHotel.kapasitas_kamar || "",
    });

    const {
        data: destinasiData,
        setData: setDestinasiData,
        errors: destinasiErrors,
        reset: resetDestinasi,
    } = useForm({
        nama: editDataDestinasi.nama || "",
        klasifikasi: editDataDestinasi.klasifikasi || "",
        harga: {
            min: harga.min || "",
            max: harga.max || "",
        },
        gambar: "",
        deskripsi: editDataDestinasi.deskripsi || "",
        lokasi: editDataDestinasi.lokasi || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setPesan("");
        if (menu === "hotel") {
            router.post(
                route("admin.hotel.update", editDataHotel.id),
                {
                    ...hotelData,
                    _method: "PUT",
                },
                {
                    onSuccess: () => {
                        setPesan(
                            "Success: Destinasi data Submitted & Edit error"
                        );
                        resetHotel();
                    },
                    onError: (e) => {
                        setPesan("Error: Hotel data Submitted & Edit error");
                        resetHotel();
                        console.log(e);
                    },
                }
            );
        } else {
            router.post(
                route("admin.destinasi.update", editDataDestinasi.id),
                {
                    ...destinasiData,
                    _method: "PUT",
                },
                {
                    onSuccess: () => {
                        setPesan(
                            "Success: Destinasi data Submitted & Edit successfully."
                        );
                        resetDestinasi();
                    },
                    onError: (e) => {
                        setPesan(
                            "Error: Destinasi data Submitted & Edit error."
                        );
                        console.log(e);
                    },
                }
            );
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (menu === "hotel") {
                setHotelData({
                    ...hotelData,
                    gambar: file,
                });
            } else {
                setDestinasiData({
                    ...destinasiData,
                    gambar: file,
                });
            }
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
                        Edit Data {menu === "hotel" ? "Hotel" : "Destinasi"}
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="type" value={menu} />
                        <div className="mb-4">
                            <label htmlFor="nama" className="block text-sm">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
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
                                name="klasifikasi"
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
                                name="gambar"
                                className="border text-black px-4 py-2 w-full"
                                onChange={handleFileChange}
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
                                                name="min"
                                                className="border text-black  px-4 py-2 w-full"
                                                value={formatRupiah(
                                                    hotelData.harga?.min || " "
                                                )} // Menggunakan formatRupiah untuk menampilkan nilai
                                                onChange={handleChange} // Mengubah nilai raw ketika ada perubahan input
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
                                                name="max"
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
                                        name="kapasitas_kamar"
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
                                        name="lokasi"
                                        className="border text-black px-4 py-2 w-full"
                                        value={
                                            menu === "hotel"
                                                ? hotelData.lokasi
                                                : destinasiData.lokasi
                                        }
                                        onChange={(e) => {
                                            if (menu === "hotel") {
                                                setHotelData({
                                                    ...hotelData,
                                                    lokasi: e.target.value,
                                                });
                                            } else {
                                                setDestinasiData({
                                                    ...destinasiData,
                                                    lokasi: e.target.value,
                                                });
                                            }
                                        }}
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
                                        name="deskripsi"
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
                                <div lenis-data-prevent className="mb-4">
                                    <label
                                        htmlFor="deskripsi"
                                        className="block text-sm"
                                    >
                                        Deskripsi
                                    </label>
                                    <input
                                        lenis-data-prevent
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

export default Edit;
