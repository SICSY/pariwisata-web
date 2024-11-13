import { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";

export default function Edit({ data }) {
    const {
        data: formData,
        setData,
        put,
        errors,
    } = useForm({
        name: data.name,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.data-managemen.update", data.id));
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Edit Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="border px-4 py-2 w-full"
                        value={formData.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <div className="text-red-500">{errors.name}</div>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
}
