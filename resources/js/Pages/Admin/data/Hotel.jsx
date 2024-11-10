import React from 'react'

const Hotel = ({ data }) => {
  return (
    <div>
    <table data-lenis-prevent className='table-fixed text-black sm:text[10vw] w-full bg-white border border-gray-200   '>
      <thead>
        <tr>
          <th className='px-4 py-2 border-b t'>ID</th>
          <th className='px-4 py-2 border-b'>Nama Hotel</th>
          <th className='px-4 py-2 border-b'>Rating</th>
          <th className='px-4 py-2 border-b'>Kapasitas Kamar</th>
          <th className='px-4 py-2 border-b'>Harga</th>
          <th className='px-4 py-2 border-b'>Alamat</th>
          <th className='px-4 py-2 border-b'>Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((hotel) => (
          <tr key={hotel.id} className='text-black'>
            <td className='px-4 py-2 border-b max-w-xs truncate'>{hotel.id}</td>
            <td className='px-4 py-2 border-b max-w-xs truncate'>{hotel.nama}</td>
            <td className='px-4 py-2 border-b max-w-xs truncate'>{hotel.rating}</td>
            <td className='px-4 py-2 border-b max-w-xs truncate'>{hotel.kapasitas_kamar}</td>
            <td className='px-4 py-2 border-b max-w-xs truncate'>{hotel.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
            <td className='px-4 py-2 border-b max-w-xs truncate '>{hotel.lokasi}</td>
            <td className='px-4 py-2 border-b max-w-xs truncate '>{hotel.deskripsi}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Hotel
