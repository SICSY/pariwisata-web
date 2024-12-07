import Footer from "@/Components/Footer";
import Header from "@/Layouts/Header";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

const Berita = () => {
    const { posts, auth } = usePage().props;

    console.log(posts);

    return (
        <>
            {/* Header */}
            <div className="sticky top-0 z-50 backdrop-blur-lg backdrop-brightness-75 border-b border-white/20">
                <Header auth={auth}></Header>
            </div>

            {/* Page Wrapper */}
            <div className=" text-white font-sans flex flex-col min-h-screen">
                {/* Hero Section */}
                <section
                    className="relative bg-cover bg-center min-h-[40vh] flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://picsum.photos/1920/1080?grayscale')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white text-center drop-shadow-md">
                            Explore the Wonders of Our Top Tourist Destinations
                        </h1>
                    </div>
                </section>

                {/* Main Content Section */}
                <main className="container mx-auto px-4 py-12 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts && posts.length > 0 ? (
                            posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src={
                                            post.image_url ||
                                            "https://via.placeholder.com/400"
                                        }
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <span className="relative text-end  justify-start w-full items-end flex">
                                            Di upload :
                                            {post.created_at.split("T")[0]}
                                        </span>
                                        <Link
                                            href={`/berita/${post.id}`}
                                            className=" text-indigo-400 relative text-end  justify-end w-full items-end flex hover:text-indigo-300 font-semibold"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-400">
                                No posts available.
                            </p>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Berita;
