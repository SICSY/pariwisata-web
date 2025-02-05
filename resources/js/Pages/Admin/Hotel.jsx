// import FooterMobile from "@/Components/FooterMobile";
// import IconHome from "@/Components/icon/IconHome";
// import IconProfil from "@/Components/icon/IconProfil";
// import IconSetting from "@/Components/icon/IconSetting";
// import SideBar from "@/Components/SideBar";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, usePage } from "@inertiajs/react";
// import Hotel from "./data/Hotel";

// export default function Data() {
//     const { props } = usePage();
//     const data = props.data;

//     const links = [
//         {
//             text: "Setting",
//             url: "/",
//             icon: IconSetting, // Absolute path
//         },
//         {
//             text: "Home",
//             url: "/",
//             icon: IconHome, // Absolute path
//         },
//         {
//             text: "Profil",
//             url: "/",
//             icon: IconProfil, // Absolute path
//         },
//     ];

//     return (
//         <main className="box-border w-full h-screen overflow-hidden">
//             <div className="flex flex-col sm:flex-row">
//                 {/* Sidebar for Desktop */}
//                 <div className="hidden sm:block sm:w-64 bg-gray-900 text-white shadow-lg">
//                     <SideBar />
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 bg-gray-900  overflow-auto">
//                     <AuthenticatedLayout>
//                         <Head title="Data" />
//                     </AuthenticatedLayout>

//                     <Hotel data={data} />
//                 </div>
//             </div>

//             {/* FooterMobile for Small Screens */}
//             <FooterMobile links={links} />
//         </main>
//     );
// }
import FooterMobile from "@/Components/FooterMobile";
import IconHome from "@/Components/icon/IconHome";
import IconProfil from "@/Components/icon/IconProfil";
import IconSetting from "@/Components/icon/IconSetting";
import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

import Hotel from "./data/Hotel";

export default function Data() {
    const { props } = usePage();
    const data = props.data;

    const links = [
        {
            text: "Setting",
            url: "/",
            icon: IconSetting, // Absolute path
        },
        {
            text: "Home",
            url: "/",
            icon: IconHome, // Absolute path
        },
        {
            text: "Profil",
            url: "/",
            icon: IconProfil, // Absolute path
        },
    ];

    return (
        <main className="box-border w-full h-screen overflow-hidden">
            <div className="flex flex-col sm:flex-row">
                {/* Sidebar for Desktop */}
                <div className="hidden sm:block sm:w-64 bg-gray-900 text-white shadow-lg">
                    <SideBar />
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-gray-900  overflow-auto">
                    <AuthenticatedLayout>
                        <Head title="Data" />
                    </AuthenticatedLayout>

                    <Hotel data={data} />
                </div>
            </div>

            {/* FooterMobile for Small Screens */}
            <FooterMobile links={links} />
        </main>
    );
}
