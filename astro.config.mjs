import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';


// https://astro.build/config
export default defineConfig({
    site: 'https://backupfailed.com',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify(),
    plugins: [typography()]
});
