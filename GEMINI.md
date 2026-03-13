# Vinícius Mattei Portfolio - Gemini CLI Context

This project is a personal portfolio built with modern web technologies, focusing on performance, clean aesthetics, and interactive project showcases.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Library**: React 19 (Experimental)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0 (Alpha) + PostCSS
- **Content**: MDX (`next-mdx-remote`) for project descriptions
- **Analytics**: Vercel Analytics & Speed Insights
- **Contact**: EmailJS for client-side email submission

## 📂 Project Structure

- `app/`: Next.js App Router directory.
    - `(routes)`: Home, About, Artworks, Projects, Contact Me.
    - `components/`: UI components (Navbar, Footer, ProjectCards, etc.).
    - `hooks/`: Custom React hooks (e.g., `useIntersectionObserver`).
    - `utils/`: Common utility functions.
- `assets/`: Structured project images (Anamnesis, Hebald Forest, etc.) and fonts.
- `public/`: Static assets (logos).

## 🧩 Key Components & Patterns

### Routing & Layout
- `app/layout.tsx`: Global layout containing `Navbar`, `Footer`, and Vercel analytics. Uses `Geist` fonts.
- `app/page.tsx`: Landing page featuring a hero section and project highlights.

### Project Showcases
- Projects are likely defined or rendered using MDX via `next-mdx-remote`.
- `ProjectCard.tsx`: Reusable component for displaying project previews.
- `FullScreenGallery.tsx`: Interactive image viewer for project assets.

### Styling Conventions
- **Tailwind CSS 4.0**: Utility-first styling. Note that version 4 uses a different configuration style than v3.
- **Global CSS**: Root colors and base styles are in `app/global.css`.

## 🤖 AI Assistance Guidelines

- **Surgical Edits**: When modifying components, ensure Tailwind classes remain consistent with the established aesthetic (dark theme, specific spacing).
- **TypeScript**: Maintain strict typing. Avoid using `any`.
- **Image Assets**: New projects should follow the existing directory structure in `assets/` (e.g., `assets/project_name_images/`).
- **Next.js Features**: Prefer Server Components where possible, but use `'use client'` for interactive hooks/components like `FullScreenGallery` or `ContactForm`.
