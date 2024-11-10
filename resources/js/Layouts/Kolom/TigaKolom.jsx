import React from 'react';
import KiriKolom from './KiriKolom';
import KananKolom from './KananKolom';
import TengahKolom from './TengahKolom';

const TigaKolom = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-screen">
            <div className="col-span-1 h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                <KiriKolom />
            </div>
            <div className="col-span-1 h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                <TengahKolom />
            </div>
            <div className="col-span-1 h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                <KananKolom />
            </div>
        </div>
    );
};

export default TigaKolom;
