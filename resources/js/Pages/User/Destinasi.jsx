import Card from "@/Components/Card";
import Header from "@/Layouts/Header";
import { Link } from "@inertiajs/react";

const Destinasi = ({ destinasi }) => {
    return (
        <div className="w-full h-screen">
            {/* Header */}
            <div className="container mx-auto relative">
                <Header />
            </div>

            {/* Section */}
            <section className="w-full py-8 bg-slate-900">
                <div className="container mx-auto text-white">
                    {/* Destinasi Alam Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-4">
                            Destinasi Alam
                        </h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
                            {destinasi.map((value, index) => (
                                <Card
                                    image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    key={index}
                                    bodyClassName="text-black"
                                    footerClassName="bg-slate-800"
                                    footer={
                                        <Link
                                            href={route("user.destinasi.show", {
                                                destinasi: value.id,
                                            })}
                                            className="underline hover:text-blue-600"
                                        >
                                            Read More
                                        </Link>
                                    }
                                    title="Card with Icon"
                                    actions={[
                                        {
                                            label: "Like",
                                            variant: "primary",
                                            onClick: () => alert("Liked!"),
                                        },
                                        {
                                            label: "Share",
                                            variant: "secondary",
                                            onClick: () => alert("Shared!"),
                                        },
                                    ]}
                                >
                                    <p>
                                        This card showcases actions with primary
                                        and secondary buttons.
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Destinasi Kota Section */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            Destinasi Kota
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[...Array(4)].map((_, index) => (
                                <Card
                                    key={index}
                                    bodyClassName="bg-slate-900"
                                    className="bg-cyan-800 shadow-lg transition-transform hover:scale-105"
                                    footer={
                                        <Link className="underline hover:text-blue-600 ">
                                            {" "}
                                            Read More
                                        </Link>
                                    }
                                    footerClassName="bg-slate-800"
                                    title="Card with Icon"
                                    actions={[
                                        {
                                            label: "Like",
                                            variant: "primary",
                                            onClick: () => alert("Liked!"),
                                        },
                                        {
                                            label: "Share",
                                            variant: "secondary",
                                            onClick: () => alert("Shared!"),
                                        },
                                    ]}
                                >
                                    <p>
                                        This card showcases actions with primary
                                        and secondary buttons.
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Destinasi;
