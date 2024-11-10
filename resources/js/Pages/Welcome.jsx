import ApplicationLogo from "@/Components/ApplicationLogo";
import StudioBackground from "@/Components/StudioBackground";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

export default function Welcome({ auth }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const intervalRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { hotel, kolamRenang, user, kontenView } = usePage().props;

  const slides = [
    {
      id: 1,
      content: "Slide 1: Keindahan Pariwisata",
      background: "/foto/card/foto1.jpg",
      deskripsi: "indah banget pokonya",
    },
    {
      id: 2,
      content: "Slide 2: Warisan Budaya",
      background: "/foto/card/foto2.jpg",
      deskripsi: "warisan budaya dari leluhur",
    },
    {
      id: 3,
      content: "Slide 3: Destinasi Menarik",
      background: "/foto/card/foto3.jpg",
      deskripsi: "sangat menarik untuk dikunjungi",
    },
  ];

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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

  const prevSlide = () => handleUserInteraction(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  const nextSlide = () => handleUserInteraction(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Head title='Welcome' />

      <div className='min-h-full mx-auto max-w-screen-2xl  rounded-b-xl '>
        {/* Navbar */}
        <header className=' shadow-2xl xl:rounded-xl'>
          <nav className='flex justify-between items-center px-4 py-2 '>
            <Link href='/' className='text-lg font-extrabold text-black hover:text-blue-800 flex items-center flex-col'>
              <ApplicationLogo></ApplicationLogo>

            </Link>

            {/* Links for desktop view */}
            <div className='hidden md:flex space-x-4'>
              <Link href='/destinasi' className='text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent '>
                Destinasi
              </Link>
              <Link href='/industri-pariwisata' className='text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent '>
                Industri Pariwisata
              </Link>
              <Link href='/profil' className='text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent '>
                Profil
              </Link>
              <Link href='/tentang-kami' className='text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent '>
                Tentang Kami
              </Link>
              <Link href='/kontak' className='text-white hover:text-blue-600 rounded-xl  p-2 shadow-xl border-transparent '>
                Kontak
              </Link>

              {auth.user ? (
                <Link href={auth.user.role === "admin" ? route("admin.dashboard") : route("dashboard")} className='rounded-md px-3 py-2 hover:text-yellow-600 text-white focus:outline-none'>
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href={route("login")} className='rounded-md px-3 py-2 hover:text-white'>
                    Log in
                  </Link>
                  <Link href={route("register")} className='rounded-md px-3 py-2 hover:text-white'>
                    Register
                  </Link>
                </>
              )}
            </div>
            <div className='md:hidden'>
              <button onClick={toggleDropdown} className='ml-4 p-2 text-black border rounded-md bg-white hover:text-blue-600'>
                {/* Icon for menu (you can use any icon library) */}☰
              </button>
            </div>
          </nav>

          {/* Dropdown for mobile view */}
          {isDropdownOpen && (
            <div className='md:hidden absolute top-20 left-0 right-0 backdrop-filter   backdrop-blur-2xl border rounded-b-2xl overflow-hidden border-gray-300 z-10'>
              <Link href='/destinasi' className='block text-white hover:text-blue-600 border-b p-2'>
                Destinasi
              </Link>
              <Link href='/industri-pariwisata' className='block text-white hover:text-blue-600 border-b p-2 m'>
                Industri Pariwisata
              </Link>
              <Link href='/profil' className='block text-white hover:text-blue-600 border-b p-2'>
                Profil
              </Link>
              <Link href='/about' className='block text-white hover:text-blue-600 border-b p-2'>
                Tentang Kami
              </Link>
              <Link href='/contact' className='block text-white hover:text-blue-600 border-b p-2'>
                Kontak
              </Link>
              {auth.user ? (
                <Link href={auth.user.role === "admin" ? route("admin.dashboard") : route("dashboard")} className='rounded-md px-2 py-2 hover:text-yellow-600 text-white focus:outline-none'>
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href={route("login")} className=' block text-black hover:text-blue-600 border-b p-2  hover:text-black/70'>
                    Log in
                  </Link>
                  <Link href={route("register")} className='block text-black hover:text-blue-600 border-b p-2  hover:text-black/70'>
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
        <section className='   py-10 w-full  min-h-fit flex-col flex m-0 p-0 left-0 box-border md:min-h-full  '>
          <div className='flex md:flex-row  flex-col'>
            <div className='container mx-auto text-center sm:h-[50vh] h-full w-full sm:flex-1  md:items-center self-justify-center flex flex-col relative md:top-32'>
              <h1
                style={{
                  backgroundImage: `url("foto/foto5.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className='sm:text-3xl w-full md:text-6xl md:text-start    xl:text-[8em] font-roboto font-semibold text-5xl text-white opacity-100  box-border md:pl-20  '
              >
                Destinasi Pariwisata <br />
                Kabupaten Cirebon
              </h1>
              <p className="text-white">halo semuanya semse
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 h-[50vh] gap-4  rounded-md   p-5 xl:mx-auto flex-auto '>
              {/* Carousel */}
              <div className='col-span-1 md:col-span-2 relative w-full  mx-auto mt-1 overflow-hidden rounded-lg'>
                <div
                  className='flex transition-transform duration-500 h-[50vh]'
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {slides.map((slide) => (
                    <div
                      key={slide.id}
                      className='w-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold  '
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
                <button onClick={prevSlide} aria-label='Previous Slide' className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'>
                  ❮
                </button>
                <button onClick={nextSlide} aria-label='Next Slide' className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'>
                  ❯
                </button>
              </div>
              {/* Sidebar Information */}
              <aside className=' text-white p-6 rounded-lg text-center'>
                <h2 className='text-[2rem] sm:text-[4rem] font-semibold font-roboto  text-wrap flex justify-center flex-wrap gap-2 p-2  '>
                  <span>WISATA</span> <span> FAVORIT </span>
                </h2>
                <p className=''>{slides[currentSlide].deskripsi}</p>
              </aside>
            </div>
          </div>

          <div className='h-[38vh] border border-black mt-5'></div>

          <p className=' flex w-full md:max-w-[1300px] md:left-0  xl:text-4xl text-1xl italic font-serif text-black text-start px-2 md:text-center md:w-full  xl:text-end underline opacity-70 '>
            Temukan keindahan warisan budaya kami dan jelajahi destinasi yang menakjubkan.
          </p>

          <div className='relative p-2 w-full grid grid-cols-2 md:grid-cols-4 gap-2 h-full'>
            <div
              id='foto-kanan'
              className={`sm:min-h-full bg-cover bg-center rounded-2xl transition-all duration-300 ${isHovered ? "filter grayscale" : "filter brightness-50 hover:brightness-100"}`}
              style={{
                backgroundImage: `url("foto/card/foto1.jpg")`,
              }}
            ></div>

            <div
              id='foto-kiri'
              className={`h-[300px] sm:h-[600px] relative top-0 bg-cover bg-center rounded-2xl sm:relative sm:top-10 transition-all duration-300 ${isHovered ? "filter grayscale" : "filter brightness-50 hover:brightness-100"}`}
              style={{
                backgroundImage: `url("foto/card/foto2.jpg")`,
              }}
            ></div>

            <div
              className={`hidden md:block h-[300px] sm:h-96 relative top-10 bg-cover bg-center rounded-2xl sm:relative sm:top-40 transition-all duration-300 ${isHovered ? "filter grayscale" : "filter brightness-50 hover:brightness-100"}`}
              style={{
                backgroundImage: `url("foto/card/foto2.jpg")`,
              }}
            ></div>

            <div
              className={`hidden md:block sm:h-[500px] bg-cover bg-center rounded-2xl sm:relative sm:top-10 transition-all duration-300 ${isHovered ? "filter grayscale" : "filter brightness-50 hover:brightness-100"}`}
              style={{
                backgroundImage: `url("foto/card/foto2.jpg")`,
              }}
            ></div>

            <div
              id='btn-explore'
              className='absolute justify-self-center self-center bottom-2 h-28 w-max max-w-full mb-4 flex items-center justify-center text-center bg-[#323e2c] border-[4px] border-black rounded-full cursor-pointer'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore with us
            </div>
          </div>
        </section>

        {/* Second Section */}

        <section id='section' className=' text-white relative   flex  border h-[100vh] w-full items-center justify-center'>
              <div className="absolute top-0 left-0 w-full h-full ">
              <StudioBackground></StudioBackground>
              </div>

              <div className=" border  ">


              <p className="z-20">halo{hotel.nama}</p>
              </div>

        </section>
      </main>
    </>
  );
}
