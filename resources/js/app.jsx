import "../css/app.css";
import "./bootstrap";
import "./lenis.js";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack"; // Import SnackbarProvider

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const anchorOrigin = {
            horizontal: "right",
            vertical: "top",
        };

        if (import.meta.env.SSR) {
            hydrateRoot(
                el,
                <SnackbarProvider maxSnack={3} anchorOrigin={anchorOrigin}>
                    <App {...props} />
                </SnackbarProvider>
            );
            return;
        }

        createRoot(el).render(
            <SnackbarProvider maxSnack={3} anchorOrigin={anchorOrigin}>
                <App {...props} />
            </SnackbarProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
