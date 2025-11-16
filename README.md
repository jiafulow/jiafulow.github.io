# Whisper - Minimal Astro Blog Theme

A beautifully minimal, accessible blog theme for Astro, featuring the elegant Catppuccin color palette. This theme comes pre-configured with example content featuring "Max Bytefield" - a fun developer character perfect for showcasing what a developer portfolio could look like.

## ✨ Features

- 🎨 **Catppuccin Colors** - Beautiful Latte (light) and Mocha (dark) themes
- ♿ **Fully Accessible** - WCAG AA compliant with proper contrast ratios
- 🌙 **Dark Mode** - Smooth theme switching with system preference support
- 📱 **Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Fast** - Built with Astro for optimal performance
- 🎯 **Minimal** - Clean, distraction-free reading experience
- 🔍 **SEO Optimized** - Proper meta tags and Open Graph support
- 📝 **Blog Ready** - Built-in blog with reading time and table of contents
- 🎭 **Example Content** - Pre-filled with fun developer portfolio content

## 🎭 Example Character: Max Bytefield

This theme comes with complete example content featuring Max Bytefield, a fictional full-stack developer with personality! The content includes:

- A welcoming home page with personality
- Detailed about page with developer story
- "Now" page showing current projects and focus
- "Uses" page with tools and setup (with humorous descriptions)
- Projects showcase with example repositories
- Quirky 404 error page

Feel free to replace all of this with your own content!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│  ├── assets
│  │  └── astro.svg
│  ├── components
│  │  └── Welcome.astro
│  ├── layouts
│  │  └── Layout.astro
│  └── pages
│      └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |

## 🎨 Customization

### Replacing Example Content

To make this portfolio your own:

1. **Update Site Config** (`src/config/site.ts`) - Change name, description, social links
2. **Update Page Config** (`src/config/page.ts`) - Update page titles and descriptions  
3. **Replace About Content** (`src/pages/about.astro`) - Tell your own story
4. **Update Now Page** (`src/pages/now.astro`) - Share what you're currently working on
5. **Customize Uses** (`src/pages/uses.astro`) - List your actual tools and setup
6. **Add Your Projects** (`src/pages/projects.astro`) - Showcase your real work
7. **Update Home Page** (`src/pages/index.astro`) - Make it yours
8. **Replace Blog Posts** (`src/content/blog/`) - Write your own articles

### Site Configuration

Edit `src/config/site.ts` to update your site metadata.

### Colors

The theme uses Catppuccin colors defined in `src/styles/main.css`. All colors are WCAG AA compliant for accessibility.

### Content

Add your blog posts as Markdown files in `src/content/blog/`.

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Catppuccin Palette](https://catppuccin.com)
- [Tailwind CSS](https://tailwindcss.com)
