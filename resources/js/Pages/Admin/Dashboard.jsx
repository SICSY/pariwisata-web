import FooterMobile from "@/Components/FooterMobile";
import IconHome from "@/Components/icon/IconHome";
import IconProfil from "@/Components/icon/IconProfil";
import IconSetting from "@/Components/icon/IconSetting";
import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard({ dataPengunjung }) {

    const sortedData = dataPengunjung.sort((a, b) => {
        // Menggunakan objek Date untuk parsing waktu
        const dateA = new Date(a.waktu_kunjungan); // Mengonversi ke objek Date
        const dateB = new Date(b.waktu_kunjungan); // Mengonversi ke objek Date

        // Mengurutkan berdasarkan perbedaan waktu (ascending)
        return dateA - dateB; // Jika dateA lebih kecil dari dateB, maka hasilnya negatif, urutkan ascending
      });

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
    <main className='box-border left-0 p-0 m-0 w-full overflow-hidden max-h-screen '>
      <div className='relative flex'>
        {/* Sidebar for Desktop */}
        <div className='hidden sm:block relative left-0 top-0 h-full w-64 text-white shadow-lg'>
          <SideBar />
        </div>

        <div className='flex-1'>
          <AuthenticatedLayout>
            <Head title='Dashboard' />
          </AuthenticatedLayout>

          <div className='flex flex-col'>
            <div className='mx-auto max-w-7xl flex-row flex'>
              <div className='bg-white shadow-sm sm:rounded-lg w-full'>
                <div className='max-h-[100vh] overflow-auto justify-self-center  flex'>
                  <div className='text-black border'>
                    <h1>Daftar Pengunjung</h1>
                    <table className='table-auto w-full text-left border-collapse'>
                      <thead>
                        <tr>
                          <th className='border px-4 py-2'>Waktu Kunjungan</th>
                          <th className='border px-4 py-2'>Total Pengunjung</th>
                          <th className='border px-4 py-2'>Role</th>
                          <th className='border px-4 py-2'>Hotel</th>
                          <th className='border px-4 py-2'>Kolam Renang</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataPengunjung.map((pengunjung, index) => (
                          <tr key={index} className='border-t'>
                            <td className='border px-4 py-2'>{pengunjung.waktu_kunjungan}</td>
                            <td className='border px-4 py-2'>{pengunjung.total_pengunjung}</td>
                            <td className='border px-4 py-2'>{pengunjung.role}</td>
                            <td className='border px-4 py-2'>{pengunjung.hotel?.nama || ""}</td>
                            <td className='border px-4 py-2'>{pengunjung.kolam_renang?.nama || ""}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
          <div className="text-white border">
      <h1>Dashboard Pengunjung</h1>
      <ul>
        {sortedData.map((pengunjung, index) => (
          <li key={index}>
            {pengunjung.waktu_kunjungan} || Total Pengunjung: {pengunjung.total_pengunjung} || Role: {pengunjung.role} || Hotel: {pengunjung.hotel?.nama} || Kolam Renang: {pengunjung.kolam_renang?.nama}
          </li>
        ))}
      </ul>
    </div>
          </div>
        </div>
      </div>

      <FooterMobile links={links}></FooterMobile>
    </main>
  );
}
