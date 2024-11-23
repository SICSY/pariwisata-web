import { Link } from "@inertiajs/react";
import { React, useState } from "react";

const SideBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };
    return (
        <div className="flex flex-col w-64 min-h-screen bg-gray-800 text-white overflow-hidden box-border">
            {/* Logo */}
            <div className="flex items-center justify-center h-16  font-bold text-xl">
                Admin Panel
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col mt-4">
                <Link
                    href="/admin/dashboard"
                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    <span className="material-icons">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                    </span>
                    <span className="ml-3">Dashboard</span>
                </Link>

                <div>
                    <ul className="flex flex-col text-gray-300">
                        <li
                            className="flex items-center px-4 py-3 hover:bg-gray-700 hover:text-white cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <svg
                                className="h-5 w-5 text-gray-300"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                            </svg>
                            <span className="ml-2">Data</span>
                            <svg
                                className="h-5 w-5 text-slate-500 ml-auto"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </li>

                        {showDropdown && (
                            <div className="flex flex-col space-y-1 mt-1 pl-8">
                                <li>
                                    <Link
                                        href="/admin/data/hotel"
                                        className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        <span className="material-icons">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ml-3"> Hotel</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin/data/destinasi"
                                        className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        <span className="material-icons">
                                            <svg
                                                className="w-7 h-7  text-white/90 relative flex right-1"
                                                viewBox="0 60 140 100"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M90.8601 125.51C85.4101 132.65 65.8601 132.99 59.2501 126.07C53.0601 133.18 31.6601 133.99 24.6801 120.39L28.8401 115.83C35.0501 125.42 51.3701 126.45 58.6601 115.83C59.1215 115.778 59.5856 115.751 60.0501 115.75C64.7901 123.75 78.19 125.34 85.7701 120.1C85.69 109.88 85.4501 79.1001 85.4501 76.7001C85.4501 56.5301 112.86 57.8301 111.28 78.6001L105.18 79.1301C105.18 68.4901 93.8701 69.0401 93.8601 76.7901C93.8601 78.8901 94.0701 109.27 94.1401 118.38C101.88 124.81 114.83 123.91 121.36 116.06L125.36 119.67C118.74 133.64 98.7701 133.21 90.8601 125.51ZM73.4901 103.9C67.3801 103.82 58.0401 103.84 52.7201 103.9C52.7801 109.63 52.8301 113.9 52.8301 113.9L44.5301 116.34C44.5301 116.34 44.1801 79.7801 44.1801 76.7501C44.1801 56.5801 71.8701 57.5401 70.2901 77.3901L63.9201 78.6301C63.9201 67.2501 52.5001 69.5201 52.5001 76.6301C52.5001 80.8601 52.5601 88.7301 52.6401 96.1501L80.9201 95.8301C80.9201 95.8301 82.4701 104 73.4901 103.9ZM58.6601 133C59.1215 132.946 59.5855 132.916 60.0501 132.91C65.8301 142.62 84.4801 142.91 89.7601 132.85H91.4901C98.4901 142.15 114.01 142.09 121.36 133.26L125.36 136.87C118.78 150.87 98.8101 150.41 90.9001 142.71C85.4501 149.85 65.9001 150.18 59.2901 143.27C53.1001 150.38 31.7001 151.18 24.7201 137.59L28.8401 133C35.0501 142.62 51.3701 143.65 58.6601 133Z"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ml-2">Destinasi</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("admin.pengunjung")}
                                        className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        <span className="material-icons">
                                            <svg
                                                className="w-7 h-7  text-white/90 relative flex right-1"
                                                viewBox="0 60 140 100"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M90.8601 125.51C85.4101 132.65 65.8601 132.99 59.2501 126.07C53.0601 133.18 31.6601 133.99 24.6801 120.39L28.8401 115.83C35.0501 125.42 51.3701 126.45 58.6601 115.83C59.1215 115.778 59.5856 115.751 60.0501 115.75C64.7901 123.75 78.19 125.34 85.7701 120.1C85.69 109.88 85.4501 79.1001 85.4501 76.7001C85.4501 56.5301 112.86 57.8301 111.28 78.6001L105.18 79.1301C105.18 68.4901 93.8701 69.0401 93.8601 76.7901C93.8601 78.8901 94.0701 109.27 94.1401 118.38C101.88 124.81 114.83 123.91 121.36 116.06L125.36 119.67C118.74 133.64 98.7701 133.21 90.8601 125.51ZM73.4901 103.9C67.3801 103.82 58.0401 103.84 52.7201 103.9C52.7801 109.63 52.8301 113.9 52.8301 113.9L44.5301 116.34C44.5301 116.34 44.1801 79.7801 44.1801 76.7501C44.1801 56.5801 71.8701 57.5401 70.2901 77.3901L63.9201 78.6301C63.9201 67.2501 52.5001 69.5201 52.5001 76.6301C52.5001 80.8601 52.5601 88.7301 52.6401 96.1501L80.9201 95.8301C80.9201 95.8301 82.4701 104 73.4901 103.9ZM58.6601 133C59.1215 132.946 59.5855 132.916 60.0501 132.91C65.8301 142.62 84.4801 142.91 89.7601 132.85H91.4901C98.4901 142.15 114.01 142.09 121.36 133.26L125.36 136.87C118.78 150.87 98.8101 150.41 90.9001 142.71C85.4501 149.85 65.9001 150.18 59.2901 143.27C53.1001 150.38 31.7001 151.18 24.7201 137.59L28.8401 133C35.0501 142.62 51.3701 143.65 58.6601 133Z"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ml-2">
                                            {" "}
                                            Pengunjung
                                        </span>
                                    </Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>

                <Link
                    href="#"
                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    <span className="material-icons">
                        <svg
                            className="h-5 w-5 text-white-900"
                            fill="none"
                            viewBox="0 0 20 22"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </span>
                    <span className="ml-3">Statistik</span>
                </Link>

                <Link
                    href="#"
                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    <span className="material-icons">
                        <svg
                            class=" left-[0.9px]  flex relative h-5 w-5 text-white/80"
                            viewBox="0 0 25 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </span>
                    <span className="ml-3">Pengaturan</span>
                </Link>
                <Link
                    href="/admin/tools"
                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    <span className="material-icons">
                        <svg
                            className="h-6 w-6 text-white/70"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            {" "}
                            <path d="M12 19l7-7 3 3-7 7-3-3z" />{" "}
                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />{" "}
                            <path d="M2 2l7.586 7.586" />{" "}
                            <circle cx="11" cy="11" r="2" />
                        </svg>
                    </span>
                    <span className="ml-3">Tools</span>
                </Link>
                <Link
                    href="/admin/post"
                    className="flex items-center px-4 py-4 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    <span className="material-icons">
                        <svg
                            fill="#ffffff"
                            height="20px"
                            width="21px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 28.048 28.048"
                            xml:space="preserve"
                        >
                            <g>
                                <path
                                    d="M25.818,0.433H2.229C0.995,0.433,0,1.451,0,2.699v22.654c0,1.25,0.995,2.262,2.229,2.262h23.589
		c1.229,0,2.23-1.012,2.23-2.262V2.699C28.049,1.451,27.047,0.433,25.818,0.433z M3.642,2.06h20.765
		c1.082,0,1.963,0.895,1.963,1.994V8.54H1.678V4.054C1.678,2.954,2.554,2.06,3.642,2.06z M18.979,10.796v15.193H8.911V10.796H18.979
		z M1.678,23.995V10.796h5.06v15.193H3.642C2.554,25.99,1.678,25.097,1.678,23.995z M24.406,25.99h-3.251V10.796h5.214v13.199
		C26.369,25.097,25.488,25.99,24.406,25.99z"
                                />
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                            </g>
                        </svg>
                    </span>
                    <span className="ml-3">Post</span>
                </Link>
            </nav>
        </div>
    );
};

export default SideBar;
