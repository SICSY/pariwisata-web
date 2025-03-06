import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Header = ({ auth }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    return (
        <>
            <div className="min-h-full mx-auto max-w-screen-2xl  rounded-b-xl ">
                {/* Navbar */}
                <header className=" shadow-2xl xl:rounded-xl">
                    <nav className="flex justify-between items-center px-4 py-2 ">
                        <Link
                            href="/"
                            className="text-lg font-extrabold text-black hover:text-blue-800 flex items-center flex-col"
                        >
                            <ApplicationLogo></ApplicationLogo>
                        </Link>

                        {/* Links for desktop view */}
                        <div className="hidden md:flex space-x-4  box-border   border-b-2  items-center">
                            <Link
                                href="/destinasi"
                                className="text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent "
                            >
                                Destinasi
                            </Link>
                            <Link
                                href="/industri-pariwisata"
                                className="text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent "
                            >
                                Industri Pariwisata
                            </Link>

                            {auth?.user ? (
                                <Link
                                    href={
                                        auth.user.role === "admin"
                                            ? route("admin.dashboard")
                                            : route("dashboard")
                                    }
                                    className="rounded-md px-3 py-2 hover:text-yellow-600 text-white focus:outline-none"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-3 py-2 h-fit w-fit text-white hover:text-blue-700"
                                    >
                                        Log in
                                    </Link>
                                    {/* <Link
                                        href={route("register")}
                                        className="rounded-md px-3 py-2 text-white hover:text-blue-700"
                                    >
                                        Register
                                    </Link> */}
                                </>
                            )}
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={toggleDropdown}
                                className="ml-4 p-2 text-black border rounded-md bg-white hover:text-blue-600"
                            >
                                {/* Icon for menu (you can use any icon library) */}
                                ☰
                            </button>
                        </div>
                    </nav>

                    {/* Dropdown for mobile view */}
                    {isDropdownOpen && (
                        <div className="md:hidden absolute top-14 left-0 right-0 backdrop-filter   backdrop-brightness-90 backdrop-blur-xl bg-black  rounded-b-2xl overflow-hidden border-current z-10">
                            <Link
                                href="/destinasi"
                                className="block text-white hover:text-blue-600 border-b p-2"
                            >
                                Destinasi
                            </Link>
                            <Link
                                href="/industri-pariwisata"
                                className="block text-white hover:text-blue-600 border-b p-2 m"
                            >
                                Industri Pariwisata
                            </Link>

                            <Link
                                href="/about"
                                className="block text-white hover:text-blue-600 border-b p-2"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-white hover:text-blue-600 border-b p-2"
                            >
                                Kontak
                            </Link>
                            {auth.user ? (
                                <Link
                                    href={
                                        auth.user.role === "admin"
                                            ? route("admin.dashboard")
                                            : route("dashboard")
                                    }
                                    className="rounded-md px-2 py-2 hover:text-yellow-600 text-white focus:outline-none"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className=" block text-white hover:text-blue-600 border-b p-2 "
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="block text-white hover:text-blue-600 border-b-c p-2 "
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </header>
            </div>
        </>
    );
};

export default Header;
