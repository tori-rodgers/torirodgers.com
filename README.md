
<p align="center">
	<img src="/globe.svg" alt="torirodgers.com logo" width="80" height="80" />
</p>

# torirodgers.com

> Personal portfolio and project showcase for Tori Rodgers

---

Welcome to the source code for [torirodgers.com](https://torirodgers.com) — a modern, responsive portfolio site built with Next.js and Tailwind CSS.

## 🚀 Quick Start

```bash
git clone https://github.com/tori-rodgers/torirodgers.com.git
cd torirodgers.com
npm install
npm run dev
```


Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📝 Editing Your Site Locally

After starting the development server, open [http://localhost:3000](http://localhost:3000) in your browser. You can edit the main page by modifying `src/app/page.js` (or any component in `src/app/components/`). The site will automatically update as you save your changes.

## ✨ Features

- Clean, accessible, and mobile-friendly design
- Project gallery with interactive modals
- Built with Next.js App Router and React 19
- Tailwind CSS for rapid UI development
- Optimized images and custom font integration
- Easy to extend and customize

## 🗂️ Project Structure

- `src/app/` — Main app, routing, and layout
- `src/app/components/` — UI components (ProjectSection, ProjectModal, etc.)
- `public/` — Static assets (images, SVGs)
- `styles/` — Global and Tailwind styles

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

## 🖼️ Example Projects

```admonition note
The site features a selection of projects, each with a modal for details and tech stack. See `src/app/components/ProjectSection.js` for configuration.
```

## 📦 Deployment

Deploy instantly to [Vercel](https://vercel.com/) or your preferred platform:

```bash
npm run build
npm start
```

---

```admonition tip
You can easily adapt this template for your own portfolio by editing the project data and content in the components.
```
