# About Me — Bruno Miotto

A personal portfolio and profile website built to present who I am, what I work with, and how my academic and professional journey is unfolding. This is a single-page application that serves as a living résumé — part portfolio, part introduction — designed to give visitors a clear picture of my skills, experience, education, and interests in software development.

**Live concept:** a clean, dark-themed personal site that tells my story as a developer and Software Engineering student from Caxias do Sul, Brazil.

---

## Overview

This project is my personal **about me / portfolio** page. It is not a generic template — it reflects my real background, the technologies I use daily at work and in my studies, and the path I am taking through university.

The site is intentionally focused and readable: no unnecessary frameworks, no build step, and no backend. Everything runs in the browser with plain HTML, CSS, and JavaScript, which keeps it fast, easy to host, and simple to maintain.

### What visitors will find

| Section | Description |
|---------|-------------|
| **Hero / Home** | Introduction with name, role, availability status, location, employer, and university |
| **Skills** | A curated breakdown of tools, languages, integrations, AI tools, and creative skills |
| **Experience & Education** | Professional role at Windel Sistemas and Software Engineering degree at UCS |
| **Academic Journey** | Tabbed view of completed, current, and upcoming university courses by semester |
| **Library** | Books that shaped how I think about software and problem-solving |
| **Contact** | Links to LinkedIn, GitHub, and email |

---

## About Me

**Bruno Miotto** — 21 years old, from Caxias do Sul, Rio Grande do Sul, Brazil.

I am a **Developer** and **Software Engineering student** at the Universidade de Caxias do Sul (UCS), enrolled since the second semester of 2023. I currently work at **Windel Sistemas** as a **Delphi Developer**, where I focus on optimizing ERP systems and applying structural fixes to management software used by micro and small businesses.

This website is how I present that combination of professional practice and academic growth: what I do at work, what I am learning at university, and the technologies I am building fluency in — from Delphi and Firebird to modern web stacks, automation, and AI-assisted development.

---

## Features

### Responsive navigation
- Fixed top navigation with smooth scroll to each section
- Scroll-aware background blur on the navbar
- Mobile hamburger menu with full-screen overlay

### Scroll reveal animations
- Elements fade and slide in as they enter the viewport
- Staggered delays on skill cards for a polished entrance effect
- Powered by `IntersectionObserver` — lightweight and performant

### Academic journey tabs
- Three interactive tabs: **Completed**, **Currently Taking**, and **Upcoming**
- Animated tab indicator that follows the active tab
- Courses grouped by academic semester (e.g. `2023/2`, `2026/2`)
- Visual status indicators: completed (green), current (amber), future (purple)

### Skills showcase
Skills are organized into meaningful groups rather than a flat list:

- **Work** — Delphi, SourceTree, Firebird
- **Languages** — HTML, CSS, JavaScript, TypeScript, Python, C, Delphi/Pascal
- **Tools & Integrations** — n8n, Supabase, REST APIs, Webhooks
- **AI Tools** — Claude, Gemini, Cursor, Lovable, NotebookLM
- **Creation & Content** — Canva, image editing, video editing

### Experience cards
Highlight cards for professional and academic milestones, each with logo, role, and a short description.

### Reading library
A small curated bookshelf with cover art (via Open Library), author, title, and a personal note on why each book matters.

### Contact footer
Direct links to [LinkedIn](https://linkedin.com/in/brunomiotto08), [GitHub](https://github.com/brunomiotto08), and email.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic, accessible structure) |
| Styling | CSS3 (custom properties, flexbox, grid, transitions) |
| Scripting | Vanilla JavaScript (ES6+, IIFE modules) |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Icons | [Devicon](https://devicon.dev/) + inline SVGs + Simple Icons CDN |
| Images | Local assets (`assets/profile/`, `UCS.png`) + external CDNs |

**No dependencies.** No npm, no bundler, no framework. Clone and open.

---

## Project Structure

```
about_me/
├── index.html      # Main page — all sections and content
├── style.css       # Global styles, layout, components, animations
├── script.js       # Navigation, mobile menu, smooth scroll, tabs, reveal
├── assets/
│   ├── profile/
│   │   ├── profile.jpeg   # Profile photo
│   │   └── profile2.jpeg  # Alternate profile photo (unused in current layout)
│   └── portfolio/         # Project screenshots
├── UCS.png         # Universidade de Caxias do Sul logo
└── README.md       # This file
```

---

## Getting Started

### Prerequisites

Any modern web browser. No Node.js or package manager required.

### Run locally

**Option 1 — Open directly**

```bash
# Clone the repository
git clone https://github.com/brunomiotto08/about_me.git
cd about_me

# Open index.html in your browser
```

**Option 2 — Local server (recommended)**

A local server avoids potential CORS issues with some external assets and better mimics production:

```bash
# Using Python 3
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8080
```

Then visit `http://localhost:8080` in your browser.

### Deploy

Because this is a static site, it can be deployed to any static hosting provider:

- **GitHub Pages** — push to `main` and enable Pages in repository settings
- **Netlify / Vercel** — connect the repo and deploy with zero configuration
- **Any web server** — upload the files to your host's public directory

---

## Design

The visual language is intentionally minimal and developer-oriented:

- **Dark theme** — deep charcoal background (`#0c0c0f`) with subtle card surfaces
- **Accent blue** — used for links, highlights, and interactive states
- **Inter typeface** — clean, readable, modern sans-serif
- **Subtle motion** — scroll reveals and tab transitions without being distracting
- **Mobile-first responsive layout** — hamburger navigation and stacked grids on smaller screens

The goal is clarity: visitors should understand who I am and what I do within seconds, then explore details if they want to go deeper.

---

## Academic Journey (current snapshot)

The **Academic Journey** section tracks my Software Engineering curriculum at UCS across three states:

- **Completed** — all finished courses, organized by semester from `2023/2` through `2026/2`
- **Currently Taking** (`2026/4`) — Fundamentos de Redes de Computadores, Inteligência Computacional, Projeto Temático II, Gestão de Projetos
- **Upcoming** — remaining courses before graduation, including mobile development, security, TCC, and more

This section is updated manually as semesters progress.

---

## JavaScript Modules

`script.js` is organized into self-contained IIFEs:

| Module | Responsibility |
|--------|----------------|
| `initNavScroll` | Adds scrolled state to navbar after 30px scroll |
| `initMobileMenu` | Toggles hamburger menu and locks body scroll |
| `initSmoothScroll` | Smooth anchor navigation with offset for fixed nav |
| `initReveal` | IntersectionObserver-based scroll reveal |
| `initTabs` | Academic journey tab switching with animated indicator |
| `initStagger` | Cascading transition delays on skill items |

---

## Customization

To adapt this site for your own use (or to update my information):

1. **Personal info** — edit the hero section and footer in `index.html`
2. **Skills** — add or remove `.skill-item` blocks inside the relevant `.skill-group`
3. **Experience** — update `.xp-card` entries in the Experience section
4. **Courses** — edit the tab panels under `#jornada`
5. **Books** — modify `.book-card` entries; cover images use Open Library ISBN URLs
6. **Colors & fonts** — adjust CSS custom properties in `:root` at the top of `style.css`
7. **Profile photo** — replace `assets/profile/profile.jpeg` (recommended: square, ~220×220px display size)

---

## Author

**Bruno Miotto**

- GitHub: [@brunomiotto08](https://github.com/brunomiotto08)
- LinkedIn: [brunomiotto08](https://linkedin.com/in/brunomiotto08)
- Location: Caxias do Sul, RS, Brazil

---

## License

This is a personal portfolio project. Feel free to use it as inspiration for your own site. If you fork or reuse significant portions, attribution is appreciated.

---

*Built with care — a small site that says a lot.*
