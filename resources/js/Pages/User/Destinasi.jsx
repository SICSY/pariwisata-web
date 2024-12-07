import Card from "@/Components/Card";
import Header from "@/Layouts/Header";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const Destinasi = ({ destinasi, auth }) => {
    let [idDestinasi, setidDestinasi] = useState("destinasi-destinasi");

    return (
        <>
            <div className="min-h-full mx-auto max-w-screen-2xl  rounded-b-xl sticky top-0 z-50 backdrop-blur-xl backdrop-brightness-[0.5] border-white/20 border">
                {/* Navbar */}
                <Header auth={auth}></Header>
            </div>

            <div className="w-full h-full ">
                {/* Header */}

                <section
                    className="relative bg-cover bg-center min-h-[30vh]"
                    style={{
                        backgroundImage:
                            "url('https://picsum.photos/3440/1440?grayscale')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        {" "}
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                            Explore the Wonders of Our Top Tourist Destinations
                        </h1>
                    </div>
                </section>
                <header className="relative flex w-full bg-black bg-opacity-75 z-10">
                    <nav className="justify-center w-full p-4 items-center flex">
                        <div
                            className="flex space-x-7 relative overflow-x-auto md:overflow-clip whitespace-nowrap w-[80%] left-0 -tracking-wider transition-all scroll-smooth"
                            style={{
                                scrollbarWidth: "thin",
                            }}
                        >
                            {[
                                "destinasi-destinasi",
                                "destinasi-kolam-renang",
                                "destinasi-alam",
                                "destinasi-budaya",
                                "destinasi-buatan",
                            ].map((destinasi) => (
                                <button
                                    key={destinasi}
                                    className={`text-orange-500 font-bold font-sm md:text-base transition-all  capitalize ${
                                        idDestinasi === destinasi
                                            ? "text-orange-800 underline"
                                            : "hover:text-orange-800 "
                                    }`}
                                    onClick={() => setidDestinasi(destinasi)} // Set tombol aktif
                                >
                                    {destinasi
                                        .replace("destinasi-", "")
                                        .replace("-", " ")}
                                </button>
                            ))}
                        </div>
                    </nav>
                </header>
                {/* Section */}
                <section className="w-full py-8 ">
                    <div className="container mx-auto text-white">
                        {/* Destinasi  Section */}
                        {idDestinasi === "destinasi-destinasi" && (
                            <div className="mb-8" id="destinasi-destinasi">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2 text-sm">
                                    {destinasi
                                        .filter(
                                            (value) =>
                                                value.klasifikasi_format ===
                                                "Destinasi"
                                        )
                                        .map((value, index) => (
                                            <Card
                                                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                key={index}
                                                bodyClassName=" text-black/50 flex-1 "
                                                footerClassName="bg-slate-800 "
                                                className="flex flex-col "
                                                footer={
                                                    <Link
                                                        href={route(
                                                            "user.destinasi.show",
                                                            {
                                                                destinasi:
                                                                    value.id,
                                                            }
                                                        )}
                                                        className="underline hover:text-blue-600"
                                                    >
                                                        Read More
                                                    </Link>
                                                }
                                                title={value.nama}
                                                headerClassName="uppercase font-extrabold"
                                            >
                                                <p className="text-ellipsis overflow-hidden line-clamp-2">
                                                    {value.deskripsi}
                                                </p>
                                            </Card>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* Destinasi WaterBoom  Section */}
                        {idDestinasi === "destinasi-kolam-renang" && (
                            <div className="mb-8" id="destinasi-kolam-renang">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2 text-sm">
                                    {destinasi
                                        .filter(
                                            (value) =>
                                                value.klasifikasi_format ===
                                                "Destinasi & Water Boom"
                                        )
                                        .map((value, index) => (
                                            <Card
                                                image={`storage/${value.gambar}`}
                                                key={index}
                                                bodyClassName="  text-black/50 flex-10"
                                                footerClassName="bg-slate-800"
                                                className="flex flex-col "
                                                footer={
                                                    <Link
                                                        href={route(
                                                            "user.destinasi.show",
                                                            {
                                                                destinasi:
                                                                    value.id,
                                                            }
                                                        )}
                                                        className="underline hover:text-blue-600"
                                                    >
                                                        Read More
                                                    </Link>
                                                }
                                                title={value.nama}
                                                headerClassName="uppercase font-extrabold"
                                            >
                                                <p className="text-ellipsis overflow-hidden line-clamp-2">
                                                    {value.deskripsi}
                                                </p>
                                            </Card>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* Destinasi Alam Section */}
                        {idDestinasi === "destinasi-alam" && (
                            <div className="mb-8" id="destinasi-alam">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2 text-sm">
                                    {destinasi
                                        .filter(
                                            (value) =>
                                                value.klasifikasi_format ===
                                                "Alam"
                                        )
                                        .map((value, index) => (
                                            <Card
                                                image={`storage/${value.gambar}`}
                                                key={index}
                                                bodyClassName="  text-black/50 flex-10"
                                                footerClassName="bg-slate-800"
                                                className="flex flex-col"
                                                footer={
                                                    <Link
                                                        href={route(
                                                            "user.destinasi.show",
                                                            {
                                                                destinasi:
                                                                    value.id,
                                                            }
                                                        )}
                                                        className="underline hover:text-blue-600"
                                                    >
                                                        Read More
                                                    </Link>
                                                }
                                                title={value.nama}
                                                headerClassName="uppercase font-extrabold"
                                            >
                                                <p className="text-ellipsis overflow-hidden line-clamp-2">
                                                    {value.deskripsi}
                                                </p>
                                            </Card>
                                        ))}
                                </div>
                            </div>
                        )}

                        {/* Destinasi Budaya Section */}
                        {idDestinasi === "destinasi-budaya" && (
                            <div className="mb-8" id="destinasi-budaya">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2 text-sm">
                                    {destinasi
                                        .filter(
                                            (value) =>
                                                value.klasifikasi_format ===
                                                "Budaya"
                                        )
                                        .map((value, index) => (
                                            <Card
                                                image={`storage/${value.gambar}`}
                                                key={index}
                                                bodyClassName=" text-black/50 flex-1"
                                                footerClassName="bg-slate-800"
                                                className="flex flex-col"
                                                footer={
                                                    <Link
                                                        href={route(
                                                            "user.destinasi.show",
                                                            {
                                                                destinasi:
                                                                    value.id,
                                                            }
                                                        )}
                                                        className="underline hover:text-blue-600"
                                                    >
                                                        Read More
                                                    </Link>
                                                }
                                                title={value.nama}
                                                headerClassName="uppercase font-extrabold"
                                            >
                                                <p className="text-ellipsis overflow-hidden line-clamp-2">
                                                    {value.deskripsi}
                                                </p>
                                            </Card>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Destinasi;
