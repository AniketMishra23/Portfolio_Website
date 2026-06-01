# Aniket Mishra — Portfolio Website

A dark cyberpunk-themed personal portfolio built with **React + Tailwind CSS v4 + Vite**.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion |
| Typewriter | react-type-animation |
| Icons | lucide-react + custom SVGs (`src/components/icons.jsx`) |
| Contact | Formspree (falls back to `mailto:` if not configured) |
| Deploy | Netlify / Vercel |

---

## Sections

1. **Hero** — Animated typewriter cycling through roles, Resume download, social links
2. **About** — Bio, background, traits
3. **Projects** — 6 project cards with tech tags and live/GitHub links
4. **Skills** — Animated progress bars + full tech stack cloud + certifications
5. **Experience** — Work history timeline (internships)
6. **Education** — Academic timeline (Deakin MDS + TCET B.E.)
7. **Contact** — Formspree-powered contact form + social links

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev          # → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Contact Form Setup (Formspree)

The contact form sends messages directly to your email via [Formspree](https://formspree.io) — no backend needed.

1. Sign up at [formspree.io](https://formspree.io) with `mishraaniket557@gmail.com`
2. Create a **New Form** → copy the form ID (e.g. `xpzgkqbd`)
3. Create a `.env.local` file in the project root:

```env
VITE_FORMSPREE_ID=your_form_id_here
```

4. Restart the dev server — form submissions will now land in your Gmail inbox.

> **Without `.env.local`:** The form falls back to `mailto:`, which opens the visitor's email client.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── icons.jsx        ← custom GitHub & LinkedIn SVG icons
├── data.js              ← all content (projects, skills, timeline, etc.)
├── App.jsx
├── main.jsx
└── index.css
public/
└── resume.pdf           ← linked from Hero "Resume" button
```

---

## Customisation

All content lives in **`src/data.js`** — edit projects, skills, timeline entries, and personal info there without touching any component code.

> **Note:** `lucide-react` (latest) does not include brand icons (GitHub, LinkedIn). Custom SVG icons are in `src/components/icons.jsx`.

---

## Deployment

```bash
npm run build
# Upload the dist/ folder to Netlify, Vercel, or GitHub Pages
```

For Netlify drag-and-drop: build → drag `dist/` to [app.netlify.com/drop](https://app.netlify.com/drop).
