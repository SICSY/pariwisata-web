import Card from "@/Components/Card";
import Header from "@/Layouts/Header";
import { Head, Link } from "@inertiajs/react";

const IndustriPariwisata = ({ hotel, auth }) => {
    return (
        <>
            <div className="min-h-full mx-auto max-w-screen-2xl  rounded-b-xl sticky top-0 z-50 backdrop-blur-xl backdrop-brightness-[0.5] border-white/20 border">
                {/* Navbar */}
                <Header auth={auth}></Header>
                <Head title="Industri Pariwisata" />
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
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                            Explore the Wonders of Our Top Tourist Destinations
                        </h1>
                    </div>
                </section>

                {/* Section */}
                <section className="w-full py-8 ">
                    <div className="container mx-auto text-white">
                        {/* Destinasi  Section */}

                        <div className="mb-8" id="destinasi-destinasi">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2 text-sm">
                                {hotel.map(
                                    (value, index) => (
                                        console.log(value),
                                        (
                                            <Card
                                                image={`storage/${value.gambar}`}
                                                key={index}
                                                bodyClassName=" text-black/50 flex-1 "
                                                footerClassName="bg-slate-800 "
                                                className="flex flex-col "
                                                footer={
                                                    <Link
                                                        href={route(
                                                            "user.industri.show",
                                                            { id: value.id }
                                                        )}
                                                        className=" text-blue-500 hover:text-blue-700"
                                                    >
                                                        Selengkapnya
                                                    </Link>
                                                }
                                                title={value.nama}
                                            >
                                                <p className="text-ellipsis overflow-hidden line-clamp-2">
                                                    {value.deskripsi}
                                                </p>
                                            </Card>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default IndustriPariwisata;
