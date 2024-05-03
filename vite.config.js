import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/main.tsx',
            ],
            refresh: true,
        }),
        react({
            include: "**/*.{jsx,tsx}",
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@": path.resolve("./resources/js"),
            assets: `${path.resolve("./resources/assets/")}`,
        },
    },
});