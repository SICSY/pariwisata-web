import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ hotels, destinasi }) => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        postable_type: "",
        postable_id: "",
        is_visible: true,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/admin/post", formData);
    };

    // Determine the options for `postable_id` based on `postable_type`
    const relatedOptions =
        formData.postable_type === "Hotel"
            ? hotels
            : formData.postable_type === "Destinasi"
            ? destinasi
            : [];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-6">Create Post</h1>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Content */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        rows="4"
                        required
                    />
                </div>

                {/* Select Related Type */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">
                        Related Type
                    </label>
                    <select
                        name="postable_type"
                        value={formData.postable_type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    >
                        <option disabled value="">
                            -- Select Type --
                        </option>
                        <option value="Hotel">Hotel</option>
                        <option value="Destinasi">Destinasi</option>
                    </select>
                </div>

                {/* Select Related ID */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">
                        Related ID
                    </label>
                    <select
                        name="postable_id"
                        value={formData.postable_id}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                        disabled={!relatedOptions.length}
                    >
                        <option disabled value="">
                            -- Select ID --
                        </option>
                        {relatedOptions
                            .sort((a, b) => a.nama.localeCompare(b.nama)) // Mengurutkan secara alfabet
                            .map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.nama}
                                </option>
                            ))}
                    </select>
                </div>

                {/* Visibility */}
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="is_visible"
                            checked={formData.is_visible}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    is_visible: e.target.checked,
                                })
                            }
                            className="mr-2"
                        />
                        Visible
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default Create;
