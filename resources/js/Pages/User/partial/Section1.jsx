// import React from "react";
// import clsx from "clsx";
// import barba from '@barba/core';
// const Section1 = () => {
//     const cards = [
//         { id: "card1", text: "Destinasi", bg: "hover:bg-orange-500" },
//         { id: "card2", text: "Kuliner", bg: "hover:bg-[#697565]" },
//         { id: "card3", text: "Akomodasi", bg: "hover:bg-[#76ABAE]" },
//     ];

//     return (
//         <section className="w-full h-screen bg-black/40">
//             <div className="flex mx-auto p-2 h-full gap-2 flex-col md:flex-row " data-barba="container">
//                 {cards.map((card, index) => (
//                     <div
//                         key={card.id}
//                         className={clsx(
//                             "w-full md:flex-1  flex items-center justify-center border duration-1000 hover:md:flex-[2] group  ",
//                             `${card.bg}`
//                         )}
//                     >
//                         <div className="m-2 h-60 flex-col w-full px-20 transition-transform group-hover:translate-y-20 duration-1000">
//                             <h2 className="text-3xl font-bold text-orange-300">
//                                 0{index + 1}
//                             </h2>
//                             <h1 className="font-light leading-relaxed text-5xl text-white">
//                                 {card.text}
//                             </h1>
//                             <p className="text-white w-fit">halo</p>

//                             <button
//                                 type="button"
//                                 id="btn"
//                                 className="text-black font-bold text-center flex justify-center  opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:ease-in-out transition-opacity duration-[5000ms] ease-in-out "
//                             >
//                                 <a href="#">Go to</a>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Section1;

// import React, { useEffect } from "react";
// import clsx from "clsx";
// import barba from "@barba/core";
// import { Link } from "@inertiajs/react";

// const Section1 = () => {
//     const cards = [
//         { id: "card1", text: "Destinasi", bg: "hover:bg-orange-500" },
//         { id: "card2", text: "Kuliner", bg: "hover:bg-[#697565]" },
//         { id: "card3", text: "Akomodasi", bg: "hover:bg-[#76ABAE]" },
//     ];

//     useEffect(() => {
//         barba.init({
//             preventRunning: true,
//             transitions: [
//                 {
//                     name: "fade",
//                     leave: ({ current }) => {
//                         return new Promise((resolve) => {
//                             current.container.style.opacity = 0;
//                             setTimeout(resolve, 500);
//                         });
//                     },
//                     enter: ({ next }) => {
//                         next.container.style.opacity = 1;

//                     },
//                 },
//             ],
//         });
//     }, []);

//     const handleGotoAkomodasi = () => {
//         barba.go("/akomodasi");
//     };

//     return (
//         <div data-barba="wrapper">
//             {/* Wrapper Barba.js */}
//             <section
//                 className="w-full h-screen bg-black/40"
//                 data-barba="container"
//                 data-barba-namespace="section1"
//             >
//                 <div className="flex mx-auto p-2 h-full gap-2 flex-col md:flex-row">
//                     {cards.map((card, index) => (
//                         <div
//                             key={card.id}
//                             className={clsx(
//                                 "w-full md:flex-1 flex items-center justify-center border duration-1000 hover:md:flex-[2] group",
//                                 `${card.bg}`
//                             )}
//                         >
//                             <div className="m-2 h-60 flex-col w-full px-20 transition-transform group-hover:translate-y-20 duration-1000">
//                                 <h2 className="text-3xl font-bold text-orange-300">
//                                     0{index + 1}
//                                 </h2>
//                                 <h1 className="font-light leading-relaxed text-5xl text-white">
//                                     {card.text}
//                                 </h1>
//                                 <p className="text-white w-fit">halo</p>
//                                 <button
//                                     type="button"
//                                     id="btn"
//                                     className="text-black font-bold text-center flex justify-center opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:ease-in-out transition-opacity duration-[5000ms] ease-in-out"
//                                     onClick={handleGotoAkomodasi}
//                                 >
//                                     <Link href={route("user.akomodasi")}>
//                                         go to
//                                     </Link>
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Section1;
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "@inertiajs/react";
import clsx from "clsx";
import Spline from "@splinetool/react-spline";

const Section1 = () => {
    const cards = [
        {
            id: "card1",
            text: "Destinasi",
            bg: "hover:bg-orange-500",
            url: "user.akomodasi",
        },
        {
            id: "card2",
            text: "Kuliner",
            bg: "hover:bg-[#697565]",
            url: "user.profil",
        },
        {
            id: "card3",
            text: "Akomodasi",
            bg: "hover:bg-[#76ABAE]",
            url: "user.profil",
        },
    ];

    // Fungsi untuk menangani animasi klik pada kartu
    const handleCardClick = (cardId) => {
        gsap.fromTo(
            `.card-${cardId}`,
            {
                opacity: 1, // Mulai dengan kartu yang terlihat
                scale: 1, // Mulai dengan ukuran normal
                yPercent: 0, // Mulai dari posisi normal
                xPercent: 0, // Mulai dari posisi normal
                duration: 1, // Durasi awal animasi (langsung tampil)
                zIndex: 100,
            },
            {
                opacity: 1, // Tetap terlihat selama proses
                zoom: 1.2, // Efek zoom
                duration: 1.5, // Durasi untuk zoom
                ease: "power3.inOut", // Jenis easing untuk animasi zoom
                onComplete: () => {
                    // Setelah efek zoom selesai, transisi ke fullscreen
                    gsap.to(`.card-${cardId}`, {
                        // Meningkatkan ukuran untuk memberi efek zoom
                        position: "absolute",
                        width: "100%", // Kartu mengisi lebar layar penuh
                        height: "100%", // Kartu mengisi tinggi layar penuh
                        duration: 1, // Durasi untuk membuat kartu fullscreen
                        ease: "power3.inOut", // Jenis easing untuk animasi fullscreen
                        onComplete: () => {
                            // Setelah animasi fullscreen selesai, lanjutkan ke transisi halaman baru
                            gsap.to(`.card-${cardId}`, {
                                opacity: 1, // Kartu menghilang setelah full screen
                                duration: 1, // Durasi animasi menghilang
                                ease: "power3.inOut",
                                onComplete: () => {
                                    // Setelah animasi selesai, lakukan transisi ke halaman baru
                                    window.location.href = route(
                                        cards.find((card) => card.id === cardId)
                                            .url
                                    );
                                },
                            });
                        },
                    });
                },
            }
        );
    };

    return (
        <div className="overflow-hidden">
            <section className="w-full h-screen bg-black/40">
                <div className="flex mx-auto p-2 h-full gap-2 flex-col md:flex-row">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={clsx(
                                `w-full md:flex-1 flex items-center justify-center  card-${card.id} duration-1000 hover:md:flex-[2] group`,
                                `${card.bg}`
                            )}
                        >
                            <div
                                className={
                                    "m-2 h-60 flex-col w-full px-20 transition-transform group-hover:translate-y-20 duration-1000 "
                                }
                            >
                                <h2 className="text-3xl font-bold text-orange-300">
                                    0{index + 1}
                                </h2>
                                <h1 className="font-light leading-relaxed text-5xl text-white">
                                    {card.text}
                                </h1>
                                <p className="text-white w-fit">halo</p>
                                <button
                                    type="button"
                                    className="text-black font-bold text-center flex justify-center opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:ease-in-out transition-opacity duration-[5000ms] ease-in-out"
                                    onClick={() => handleCardClick(card.id)} // Menambahkan klik pada kartu
                                >
                                    <span>Go to</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
               
            </section>
        </div>
    );
};

export default Section1;
