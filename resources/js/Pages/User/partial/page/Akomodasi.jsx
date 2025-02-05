// import React from "react";

// const Akomodasi = () => {
//     return <div>Akomodasi</div>;
// };

// export default Akomodasi;

// import React from "react";

// const Akomodasi = () => {
//     return (
//         <section
//             className="w-full h-screen flex items-center justify-center bg-blue-500"
//             data-barba="container"
//             data-barba-namespace="akomodasi"
//         >
//             <h1 className="text-5xl text-white">Akomodasi Page</h1>
//         </section>
//     );
// };

// export default Akomodasi;
import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP

const Akomodasi = () => {
    useEffect(() => {
        // Menjalankan animasi hanya setelah halaman sepenuhnya dimuat
        gsap.fromTo(
            ".akomodasi-container-top", // Selektor untuk elemen yang ingin dianimasikan
            { opacity: 1 }, // Mulai dengan opacity 0 dan posisi y di bawah
            {
                opacity: 1,
                yPercent: 0,
                duration: 5,
                yPercent: -100,
                ease: "power3.inOut",
                fill: "backwards", // Memastikan animasi dimulai dengan properti yang ditentukan
            }
        );
        gsap.fromTo(
            ".akomodasi-container-bot", // Selektor untuk elemen yang ingin dianimasikan
            { opacity: 1 }, // Mulai dengan opacity 0 dan posisi y di bawah
            {
                opacity: 0,
                yPercent: 0,
                duration: 5,
                yPercent: 100,
                ease: "power3.inOut",
                fill: "forwards", // Memastikan animasi dimulai dengan properti yang ditentukan
            }
        );
    }); // Hanya dijalankan sekali saat komponen di-mount

    return (
        <section className="w-full h-screen  flex  items-center justify-center bg-blue-500  ">
            {/* Pastikan elemen yang dianimasikan ada */}
            <div className="border w-full absolute akomodasi-container-top bg-black top-0  left-0 h-[50%]"></div>
            <div className="border w-full absolute akomodasi-container-bot bg-black bottom-0   left-0 h-[50%]"></div>
            <h1 className="text-5xl text-white">Akomodasi Page</h1>
        </section>
    );
};

export default Akomodasi;
