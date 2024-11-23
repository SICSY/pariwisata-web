import React from "react";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Create = ({ hotels, destinasis }) => {
    const { data, setData, post, errors } = useForm({
        role: "wisman",
        total_pengunjung: "",
        related_id: "",
        related_type: "hotel", // default ke Hotel
    });

    const options = data.related_type === "hotel" ? hotels : destinasis;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(
            route("admin.kunjungan-managemen.store"),
            {
                role: data.role,
                total_pengunjung: data.total_pengunjung,
                related_id: data.related_id,
                related_type: data.related_type, // Send related_type explicitly
            },
            {
                onSuccess: () => {
                    alert("Data berhasil disimpan");
                    setData({
                        role: "wisman",
                        total_pengunjung: "",
                        related_id: "",
                        related_type: "hotel", // reset to default "hotel"
                    });
                },
            }
        );
    };

    return (
        <div className="items-center w-full h-screen justify-center">
            <div className="border w-full h-full flex flex-col">
                <div className="w-full h-fit border relative top-0">
                    <AuthenticatedLayout />
                </div>
                <div className="p-2 flex items-center justify-center w-full h-full">
                    <div className="max-w-2xl w-full border bg-gray-800 p-6 rounded-lg">
                        <h1 className="text-2xl font-semibold text-white mb-6">
                            Tambah Data Pengunjung
                        </h1>
                        <form onSubmit={handleSubmit}>
                            {/* Role */}
                            <div className="mb-4">
                                <label className="block text-white mb-2">
                                    Role:
                                </label>
                                <select
                                    name="role"
                                    value={data.role}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="wisman">Wisman</option>
                                    <option value="wisnus">Wisnus</option>
                                </select>
                                {errors.role && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.role}
                                    </div>
                                )}
                            </div>

                            {/* Total Pengunjung */}
                            <div className="mb-4">
                                <label className="block text-white mb-2">
                                    Total Pengunjung:
                                </label>
                                <input
                                    type="number"
                                    name="total_pengunjung"
                                    value={data.total_pengunjung}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.total_pengunjung && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.total_pengunjung}
                                    </div>
                                )}
                            </div>

                            {/* Related Type */}
                            <div className="mb-4">
                                <label className="block text-white mb-2">
                                    Type:
                                </label>
                                <select
                                    name="related_type"
                                    value={data.related_type}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="hotel">Hotel</option>
                                    <option value="destinasi">Destinasi</option>
                                </select>
                                {errors.related_type && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.related_type}
                                    </div>
                                )}
                            </div>

                            {/* Related ID */}
                            <div className="mb-4">
                                <label className="block text-white mb-2">
                                    {data.related_type === "hotel"
                                        ? "Hotel"
                                        : "Destinasi"}{" "}
                                    ID:
                                </label>
                                <select
                                    name="related_id"
                                    value={data.related_id}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option
                                        className="text-black"
                                        value=""
                                        disabled
                                    >
                                        Pilih{" "}
                                        {data.related_type === "hotel"
                                            ? "Hotel"
                                            : "Destinasi"}
                                    </option>
                                    {options.map((option) => (
                                        <option
                                            className="text-black"
                                            key={option.id}
                                            value={option.id}
                                        >
                                            {option.nama}
                                        </option>
                                    ))}
                                </select>
                                {errors.related_id && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.related_id}
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
