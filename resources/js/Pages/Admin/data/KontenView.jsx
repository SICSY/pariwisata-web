import React from "react";

const KontenView = ({ data }) => {
    return (
        <div>
            <table
                data-lenis-prevent
                className="table-fixed  sm:text[10vw] w-full bg-white border border-gray-200  text-black"
            >
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">ID</th>
                        <th className="px-4 py-2 border-b">Nama User</th>
                        <th className="px-4 py-2 border-b">IP</th>
                        <th className="px-4 py-2 border-b">Nama Hotel</th>
                        <th className="px-4 py-2 border-b">
                            Nama Kolam Renang
                        </th>
                    </tr>
                </thead>
                <tbody className="text-black">
                    {data.map((item) => {
                        return (
                            // Pastikan menggunakan 'return' untuk merender <tr>
                            <tr key={item.id}>
                                <td className="px-4 py-2 border-b max-w-2xl ">
                                    {item.user?.name}
                                </td>
                                <td className="px-4 py-2 border-b max-w-2xl ">
                                    {item.hotel?.nama}
                                </td>
                                <td className="px-4 py-2 border-b max-w-2xl ">
                                    {item.kolam_renang?.nama}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default KontenView;
