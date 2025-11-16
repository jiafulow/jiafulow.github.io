import type { APIRoute } from 'astro';

// You can update these values to match your site
const manifest = {
  name: 'Max Bytefield',
  short_name: 'MaxBytefield',
  description: "Full-stack developer, coffee enthusiast, and occasional debugger of life's mysteries.",
  start_url: '/',
  display: 'standalone',
  background_color: '#eff1f5',
  theme_color: '#1e66f5',
  icons: [
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any maskable',
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  ],
  lang: 'en',
};

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=86400, immutable',
    },
  });
};
