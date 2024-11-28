import Card from "@/Components/Card";
import Header from "@/Layouts/Header";
import { Link } from "@inertiajs/react";

import { useState } from "react";

const IndustriPariwisata = ({ hotel }) => {
    const industriPariwisata = hotel.all;
    console.log(industriPariwisata);
    return (
        <>
            <div className="sticky top-0 z-50 ">
                <Header></Header>
            </div>
            <div>
                <section>
                    <img src="https://picsum.photos/3440/1440?grayscale"></img>
                </section>
            </div>
        </>
    );
};

export default IndustriPariwisata;
