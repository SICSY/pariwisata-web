import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";
import React from "react";

const Berita = () => {
    const { posts } = usePage().props;
    console.log(posts); // Check the posts

    return (
        <div className="bg-gray-900 text-white font-sans">
            {/* Hero Section */}
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

            {/* Navigation */}
            <header className="relative top-0 left-0 w-full bg-black bg-opacity-75 z-10">
                <nav className="container mx-auto flex items-center p-4">
                    <div className="text-white font-bold text-xl">
                        News Portal
                    </div>
                    <div className="ml-auto space-x-6">
                        <a href="#" className="text-white">
                            Latest News
                        </a>
                        <a href="#" className="text-white">
                            Trending
                        </a>
                        <a href="#" className="text-white">
                            Opinions
                        </a>
                        <a href="#" className="text-white">
                            About Us
                        </a>
                    </div>
                </nav>
            </header>

            {/* Main Content Section */}
            <main className="pt-36 pb-12 px-6">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Articles */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                        {posts && posts.length > 0 ? (
                            posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg shadow-lg mb-8"
                                >
                                    <img
                                        src={
                                            post.image_url ||
                                            "https://via.placeholder.com/400"
                                        }
                                        alt={post.title}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-white mb-4">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400">
                                            {post.content.substring(0, 150)}...
                                        </p>
                                        <a
                                            href={`/posts/${post.id}`}
                                            className="text-indigo-400 hover:underline"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white">No posts available.</p>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="hidden lg:block">
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Featured Stories
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Major Event in the News
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Hot Topic: Climate Change
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Technology and Society
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Berita;
