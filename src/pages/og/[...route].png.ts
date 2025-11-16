import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Catppuccin Latte & Mocha colors matching your theme
const colors = {
  light: {
    base: '#eff1f5',
    text: '#4c4f69',
    subtext: '#6c6f85',
    blue: '#1e66f5',
    mauve: '#7c3aed',
    surface: '#ccd0da',
  },
  dark: {
    base: '#1e1e2e',
    text: '#cdd6f4',
    subtext: '#a6adc8',
    blue: '#89b4fa',
    mauve: '#cba6f7',
    surface: '#313244',
  }
};

export async function getStaticPaths() {
  const blogEntries = await getCollection('blog');
  
  const paths = blogEntries.map((entry) => ({
    params: { route: `blog/${entry.id.replace('.md', '')}` },
    props: {
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      category: entry.data.category || 'Blog',
      theme: 'light',
    },
  }));

  // Add dark mode versions
  const darkPaths = blogEntries.map((entry) => ({
    params: { route: `blog/${entry.id.replace('.md', '')}/dark` },
    props: {
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      category: entry.data.category || 'Blog',
      theme: 'dark',
    },
  }));

  // Add a homepage OG image
  paths.push({
    params: { route: 'home' },
    props: {
      title: 'Max Bytefield',
      description: "Full-stack developer, coffee enthusiast, and occasional debugger of life's mysteries",
      pubDate: new Date(),
      category: 'Portfolio',
      theme: 'light',
    },
  });

  paths.push({
    params: { route: 'home/dark' },
    props: {
      title: 'Max Bytefield',
      description: "Full-stack developer, coffee enthusiast, and occasional debugger of life's mysteries",
      pubDate: new Date(),
      category: 'Portfolio',
      theme: 'dark',
    },
  });

  return [...paths, ...darkPaths];
}

export const GET: APIRoute = async ({ props }) => {
  const { title, description, category, theme } = props as {
    title: string;
    description: string;
    category: string;
    theme: 'light' | 'dark';
    pubDate: Date;
  };
  const themeColors = theme === 'dark' ? colors.dark : colors.light;

  // Load Noto Sans fonts from public directory
  let notoSansRegular: ArrayBuffer;
  let notoSansBold: ArrayBuffer;
  
  try {
    // Load from public/fonts directory
    const regularBuffer = await readFile(
      join(process.cwd(), 'public/fonts/NotoSans-Regular.ttf')
    );
    const boldBuffer = await readFile(
      join(process.cwd(), 'public/fonts/NotoSans-Bold.ttf')
    );
    
    notoSansRegular = regularBuffer.buffer.slice(
      regularBuffer.byteOffset,
      regularBuffer.byteOffset + regularBuffer.byteLength
    ) as ArrayBuffer;
    notoSansBold = boldBuffer.buffer.slice(
      boldBuffer.byteOffset,
      boldBuffer.byteOffset + boldBuffer.byteLength
    ) as ArrayBuffer;
  } catch (error) {
    console.error('Font loading error:', error);
    throw new Error('Unable to load font files');
  }

  // Create the SVG markup using satori (cleaner, more modern look)
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: themeColors.base,
          padding: '64px 96px',
          fontFamily: 'Noto Sans',
          boxSizing: 'border-box',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
          borderRadius: '32px',
        },
        children: [
          // Header with category badge
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '36px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      background: `linear-gradient(90deg, ${themeColors.blue}40 0%, ${themeColors.mauve}40 100%)`,
                      color: themeColors.blue,
                      padding: '10px 28px',
                      borderRadius: '999px',
                      fontSize: '22px',
                      fontWeight: 700,
                      border: `2px solid ${themeColors.blue}40`,
                      letterSpacing: '0.08em',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
                      textTransform: 'uppercase',
                    },
                    children: category,
                  },
                },
              ],
            },
          },
          // Title
          {
            type: 'div',
            props: {
              style: {
                fontSize: '68px',
                fontWeight: 900,
                color: themeColors.text,
                lineHeight: 1.1,
                marginBottom: '28px',
                letterSpacing: '-0.03em',
                fontFamily: 'Noto Sans',
                textShadow: '0 2px 8px rgba(0,0,0,0.04)',
                maxWidth: '1000px',
                wordBreak: 'break-word',
              },
              children: title,
            },
          },
          // Description
          {
            type: 'div',
            props: {
              style: {
                fontSize: '30px',
                color: themeColors.subtext,
                lineHeight: 1.5,
                marginBottom: 'auto',
                fontFamily: 'Noto Sans',
                maxWidth: '900px',
                wordBreak: 'break-word',
              },
              children: description,
            },
          },
          // Footer with branding
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '36px',
                borderTop: `2.5px solid ${themeColors.surface}`,
                marginTop: '40px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '30px',
                      fontWeight: 700,
                      color: themeColors.text,
                      letterSpacing: '0.04em',
                    },
                    children: 'Max Bytefield',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '26px',
                      color: themeColors.subtext,
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                    },
                    children: 'maxbytefield.dev',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans',
          data: notoSansRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Noto Sans',
          data: notoSansBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  // Convert SVG to PNG using sharp
  const png = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  return new Response(png as unknown as BodyInit, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
