import React from "react";

const FormInput = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    options = [],
    error = null,
    required = false,
    checked = false, // Untuk checkbox/radio
}) => {
    return (
        <div className="flex flex-col space-y-2">
            {/* Label */}
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-semibold text-gray-700"
                >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}

            {/* Input Types */}
            {(() => {
                switch (type) {
                    case "textarea":
                        return (
                            <textarea
                                id={name}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={placeholder}
                                className={`border rounded p-2 ${
                                    error ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            ></textarea>
                        );

                    case "select":
                        return (
                            <select
                                id={name}
                                name={name}
                                value={value}
                                onChange={onChange}
                                className={`border rounded p-2 ${
                                    error ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            >
                                <option value="" disabled>
                                    {placeholder || "Pilih opsi"}
                                </option>
                                {options.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        );

                    case "checkbox":
                    case "radio":
                        return (
                            <div className="flex items-center space-x-2">
                                <input
                                    id={name}
                                    name={name}
                                    type={type}
                                    checked={checked}
                                    onChange={onChange}
                                    className={`${
                                        error
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } focus:ring-2 focus:ring-blue-500`}
                                />
                                <label
                                    htmlFor={name}
                                    className="text-sm font-semibold text-gray-700"
                                >
                                    {label}
                                </label>
                            </div>
                        );

                    default:
                        return (
                            <input
                                id={name}
                                name={name}
                                type={type}
                                value={value}
                                onChange={onChange}
                                placeholder={placeholder}
                                className={`border rounded p-2 ${
                                    error ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                        );
                }
            })()}

            {/* Error Message */}
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default FormInput;
