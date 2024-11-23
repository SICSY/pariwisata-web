import ApplicationLogo from "@/Components/ApplicationLogo";
import DataChart from "@/Components/DataChart";
import FooterMobile from "@/Components/FooterMobile";
import StudioBackground from "@/Components/StudioBackground";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

export default function Welcome({ auth }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const intervalRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const slides = [
        {
            id: 1,
            content: "Slide 1: Keindahan Pariwisata",
            background: "/foto/card/foto1.jpg",
            link: "url",
        },
        {
            id: 2,
            content: "Slide 2: Warisan Budaya",
            background: "/foto/card/foto2.jpg",
            link: "warisan budaya dari leluhur",
        },
        {
            id: 3,
            content: "Slide 3: Destinasi Menarik",
            background: "/foto/card/foto3.jpg",
            link: "sangat menarik untuk dikunjungi",
        },
    ];

    const startAutoPlay = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 3000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleUserInteraction = (slideIndex) => {
        stopAutoPlay();
        setIsUserInteracting(true);
        setCurrentSlide(slideIndex);
        setTimeout(() => {
            setIsUserInteracting(false);
        }, 5000);
    };

    useEffect(() => {
        if (!isUserInteracting) {
            startAutoPlay();
        }
        return () => stopAutoPlay();
    }, [isUserInteracting]);

    const prevSlide = () =>
        handleUserInteraction(
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        );
    const nextSlide = () =>
        handleUserInteraction(
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        );

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <>
            <Head title="Welcome" />

            <div className="min-h-full mx-auto max-w-screen-2xl  rounded-b-xl sticky top-0 z-50 backdrop-blur-xl backdrop-brightness-[0.5] border-white/20 border">
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
                            <Link
                                href="/profil"
                                className="text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent "
                            >
                                Profil
                            </Link>
                            <Link
                                href="/tentang-kami"
                                className="text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent "
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/kontak"
                                className="text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent "
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
                                    className="rounded-md px-3 py-2 hover:text-yellow-600 text-white focus:outline-none"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-3 py-2 h-fit w-fit text-white hover:border"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="rounded-md px-3 py-2 text-white hover:text-white"
                                    >
                                        Register
                                    </Link>
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
                        <div className="md:hidden absolute top-14 left-0 right-0 backdrop-filter   backdrop-blur-2xl  rounded-b-2xl overflow-hidden border-current z-10">
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
                                href="/profil"
                                className="block text-white hover:text-blue-600 border-b p-2"
                            >
                                Profil
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

            {/* Main Content Area */}
            <main>
                {/* First Section */}
                <section className="   py-1 w-full  min-h-fit flex-col flex m-0 p-0 left-0 box-border md:min-h-full  overflow-hidden">
                    <div className="flex md:flex-row  flex-col">
                        <div className="container mx-auto text-center sm:h-[50vh] h-full w-full sm:flex-1  md:items-center self-justify-center flex flex-col relative md:top-32 ">
                            <h1
                                style={{
                                    backgroundImage: `url("foto/foto5.jpg")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                                className="sm:text-3xl w-full md:text-6xl md:text-start    xl:text-[8em] font-roboto font-semibold text-5xl text-white opacity-100  box-border md:pl-20  "
                            >
                                Destinasi Industri & Pariwisata <br />
                                <span className="text-lg sm:text-2xl  font-bold align-text-top xl:justify-end justify-center   flex  xl:max-w-[200px] ">
                                    Kabupaten Cirebon
                                </span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 h-full gap-4  rounded-md   p-5 xl:mx-auto flex-auto ">
                            {/* Carousel */}
                            <div className="col-span-1 md:col-span-2 relative w-full   border-[10px] border-solid border-slate-800  mx-auto mt-1 overflow-hidden rounded-lg">
                                <div
                                    className="flex transition-transform duration-500 h-[50vh]"
                                    style={{
                                        transform: `translateX(-${
                                            currentSlide * 100
                                        }%)`,
                                    }}
                                >
                                    {slides.map((slide) => (
                                        <div
                                            key={slide.id}
                                            className="w-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold  "
                                            style={{
                                                backgroundImage: `url(${slide.background})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            {slide.content}
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    aria-label="Previous Slide"
                                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                                >
                                    ❮
                                </button>
                                <button
                                    onClick={nextSlide}
                                    aria-label="Next Slide"
                                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                                >
                                    ❯
                                </button>
                            </div>
                            {/* Sidebar Information */}
                            <aside className=" text-white p-6 rounded-lg text-center relative ">
                                <h2 className="text-[1rem] sm:text-[4rem] font-semibold font-roboto  text-wrap flex justify-center  p-2   overflow-hidden h-fit flex-nowrap ">
                                    <span className="text-[11vw]   w-full   absolute   transform translate-x-[-50%] translate-y-[-50%] scale-x-[2] xl:translate-x-[-50%] xl:-rotate-12 xl:scale-[3] xl:w-[200%] xl:-left-64 scale-y-[2] top-[50%] -z-10     left-2/4 p-0   text-stroke md:text-stroke-2    ">
                                        WISATA
                                    </span>{" "}
                                    <span> FAVORIT </span>
                                </h2>
                                <p className="">{slides[currentSlide].link}</p>
                            </aside>
                        </div>
                    </div>

                    <div className="bg-gradient-to-t from-cyan-600/40 to-[#020717] sm:h-[35vh] w-full sm:mt-20 items-center align-middle flex flex-col relative justify-center">
                        <h2 className="text-5xl font-bold font-sans text-slate-500 capitalize">
                            {" "}
                            Data yang tersedia
                        </h2>
                        <div className="relative sm:h-fit mt-10 sm:justify-center sm:items-center h-fit my-2  flex gap-6 text-white   flex-col md:flex-row  w-full  ">
                            <div className="relative min-w-40 h-fit  sm:min-h-3.5 sm:min-w-64 items-center justify-center flex flex-row backdrop-blur-md backdrop-filter backdrop-invert-0 backdrop-brightness-100 gap-1 rounded-l-2xl rounded-r-sm shadow-lg p-4 border border-white/15 self-start sm:self-center mx-5 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-bl from-yellow-700 via-black to-red-900 opacity-5  "></div>

                                <div class="absolute inset-0  bg-gradient-to-tl from-white via-red-500 to-blue-900 opacity-10 "></div>
                                <div className="flex   relative z-10">
                                    <div className="text-[1rem] sm:text-3xl  ">
                                        26+
                                    </div>
                                </div>

                                <div className="absolute inset-0  w-full h-full flex items-center justify-center -z-10  ">
                                    <div className="text-[2rem] md:text-5xl font-sans text-primary uppercase opacity-50">
                                        Hotel
                                    </div>
                                </div>
                            </div>
                            <div className="relative max-w-2xl  h-fit sm:min-h-3.5 sm:min-w-64 items-center justify-center flex  backdrop-blur-xl backdrop-filter backdrop-invert-0 backdrop-brightness-100 gap-1 rounded-2xl shadow-lg p-4 border border-white/15 ">
                                <div className="flex flex-row items-end relative z-10">
                                    <div className="text-[1rem] sm:text-3xl  ">
                                        1
                                    </div>
                                </div>

                                <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-10   ">
                                    <div className="text-[2rem] md:text-4xl font-sans text-primary uppercase opacity-50">
                                        Museum
                                    </div>
                                </div>
                            </div>
                            <div className="mx-5 relative min-w-40 h-fit w-fit  sm:min-h-3.5 sm:min-w-64 items-center justify-center flex flex-row backdrop-blur-md backdrop-filter backdrop-invert-0 backdrop-brightness-100 gap-1 rounded-r-2xl rounded-l-sm shadow-lg p-4 border border-white/15 sm:self-center self-end">
                                <div class="absolute inset-0 bg-gradient-to-bl from-yellow-700 via-black to-red-900 opacity-5  "></div>

                                <div class="absolute inset-0 bg-gradient-to-tl from-white via-red-500 to-blue-900 opacity-10 "></div>
                                <div className="flex flex-row items-end relative z-10">
                                    <div className="text-[1rem] sm:text-3xl ">
                                        30+
                                    </div>
                                </div>

                                <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-10  ">
                                    <div className="text-[2rem] md:text-5xl font-sans text-primary uppercase opacity-50">
                                        Destinasi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="gap-4  relative h-full w-full overflow-hidden p-4 md:p-20  ">
                    <div className="flex">
                        <p className=" flex w-full md:max-w-[1300px] relative self-center  md:left-0  xl:text-4xl text-xs md:text-2xl mb-3 italic font-serif  text-start px-2    opacity-70  text-white tracking-tighter">
                            Temukan keindahan warisan budaya kami dan jelajahi
                            destinasi yang menakjubkan.
                        </p>
                        <div className="relative p-2 w-full grid grid-cols-2 md:grid-cols-4 gap-2 h-full">
                            <div
                                id="foto-kanan"
                                className={`sm:min-h-full bg-cover bg-center rounded-2xl transition-all duration-300 ${
                                    isHovered
                                        ? "filter grayscale"
                                        : "filter brightness-50 hover:brightness-100"
                                }`}
                                style={{
                                    backgroundImage: `url("foto/card/foto1.jpg")`,
                                }}
                            ></div>

                            <div
                                id="foto-kiri"
                                className={`h-[300px] sm:h-[600px] relative top-0 bg-cover bg-center rounded-2xl sm:relative sm:top-10 transition-all duration-300 ${
                                    isHovered
                                        ? "filter grayscale"
                                        : "filter brightness-50 hover:brightness-100"
                                }`}
                                style={{
                                    backgroundImage: `url("foto/card/foto2.jpg")`,
                                }}
                            ></div>

                            <div
                                className={`hidden md:block h-[300px] sm:h-96 relative top-10 bg-cover bg-center rounded-2xl sm:relative sm:top-40 transition-all duration-300 ${
                                    isHovered
                                        ? "filter grayscale"
                                        : "filter brightness-50 hover:brightness-100"
                                }`}
                                style={{
                                    backgroundImage: `url("foto/card/foto2.jpg")`,
                                }}
                            ></div>

                            <div
                                className={`hidden md:block sm:h-[500px] bg-cover bg-center rounded-2xl sm:relative sm:top-10 transition-all duration-300 ${
                                    isHovered
                                        ? "filter grayscale"
                                        : "filter brightness-50 hover:brightness-100"
                                }`}
                                style={{
                                    backgroundImage: `url("foto/card/foto2.jpg")`,
                                }}
                            ></div>

                            <div
                                id="btn-explore"
                                className="absolute justify-self-center self-center bottom-2 h-28 w-max max-w-full mb-4 flex items-center justify-center text-center bg-[#323e2c] border-[4px] border-black rounded-full cursor-pointer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Explore with us
                            </div>
                        </div>
                    </div>

                    <div className="text-white">halo</div>
                </section>

                {/* <section>
                    <DataChart></DataChart>
                </section> */}
                <section className=" text-white relative   flex   h-[100vh] w-full items-center justify-center bg-gradient-to-b from-cyan-600/40 to-[#020717]">
                    <div className="absolute top-0 left-0 w-full h-full ">
                        <StudioBackground></StudioBackground>
                    </div>

                    <div className=" border  ">
                        <p className="z-20">halo</p>
                    </div>

                    <footer className="border w-full h-1/5 absolute bottom-0 text-center">
                        halo
                    </footer>
                </section>
            </main>
        </>
    );
}
