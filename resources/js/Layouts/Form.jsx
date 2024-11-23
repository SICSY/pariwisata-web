import React from "react";
import { useForm } from "@inertiajs/react";

const Form = ({
    fields = [],
    initialValues = {},
    onSubmit,
    errors = {},
    submitButtonLabel = "Submit",
}) => {
    const { data, setData, post, reset } = useForm(initialValues);

    // Fungsi untuk menangani perubahan pada input
    const handleChange = (key, value) => {
        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    // Fungsi untuk menangani pengiriman form
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col">
                    <label htmlFor={field.name} className="mb-1 font-semibold">
                        {field.label}
                    </label>
                    {field.type === "textarea" ? (
                        <textarea
                            id={field.name}
                            name={field.name}
                            value={data[field.name] || ""}
                            onChange={(e) =>
                                handleChange(field.name, e.target.value)
                            }
                            placeholder={field.placeholder}
                            className="border p-2 rounded"
                        />
                    ) : (
                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type || "text"}
                            value={data[field.name] || ""}
                            onChange={(e) =>
                                handleChange(field.name, e.target.value)
                            }
                            placeholder={field.placeholder}
                            className="border p-2 rounded"
                        />
                    )}
                    {errors[field.name] && (
                        <span className="text-red-500 text-sm">
                            {errors[field.name]}
                        </span>
                    )}
                </div>
            ))}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                {submitButtonLabel}
            </button>
        </form>
    );
};

export default Form;
