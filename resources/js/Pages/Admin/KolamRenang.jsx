import FooterMobile from "@/Components/FooterMobile";
import IconHome from "@/Components/icon/IconHome";
import IconProfil from "@/Components/icon/IconProfil";
import IconSetting from "@/Components/icon/IconSetting";
import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import Hotel from "./data/Hotel";
import KolamRenang from "./data/KolamRenang";

export default function Data() {
  const { props } = usePage();
  const data = props.data;

  const links = [

    {
        text: 'Setting',
        url: '/',
        icon: IconSetting, // Absolute path
      },
    {
        text: 'Home',
        url: '/',
        icon: IconHome, // Absolute path
      },
    {
        text: 'Profil',
        url: '/',
        icon: IconProfil, // Absolute path
      },
  ];

  return (
    <main className='box-border left-0 p-0 m-0 w-full overflow-hidden max-h-screen '>
      <div className='relative flex'>
        {/* Sidebar for Desktop */}
        <div className='hidden sm:block relative left-0 top-0 h-full w-64 text-white shadow-lg'>
          <SideBar />
        </div>

        <div className='flex-1'>
          <AuthenticatedLayout>
            <Head title='Data' />
          </AuthenticatedLayout>

          <div className='flex flex-col'>
            <div className='mx-auto max-w-7xl flex-row flex'>
              <div className='bg-white shadow-sm sm:rounded-lg w-full'>

                <div className='max-h-[100vh] overflow-auto justify-self-center  flex'>
                    <KolamRenang data={data}> </KolamRenang>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        <FooterMobile links={links} ></FooterMobile>
    </main>
  );
}
