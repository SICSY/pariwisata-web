import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto Condensed", "sans-serif"],
            },
            textColor: {
                primary: "#ff6a00", // Example primary color
            },
        },
    },

    plugins: [
        forms,
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".text-stroke": {
                        "font-family": "poppins, sans-serif",
                        "-webkit-text-stroke": "1px #0c0c2f", // Customize stroke width and color
                        color: "transparent",
                    },
                    ".text-stroke-2": {
                        "-webkit-text-stroke": "2px #0c0c2f", // Example for a thicker stroke
                        color: "transparent",
                    },
                },
                ["responsive", "hover"]
            );
        },
    ],
};
