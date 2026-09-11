# Ravi Nishad — Personal Portfolio

A personal portfolio website for **Ravi Nishad**, positioned as an **AI Automation & Full-Stack Developer**.

Built with a fast, modern static architecture using **React + Vite** and custom **Vanilla CSS** design tokens. Designed for visual clarity, technical authenticity, and responsiveness across desktop and mobile.

---

## 🌟 Professional Identity & Highlights

- **Identity**: AI Automation & Full-Stack Developer
- **Experience**: 3+ Years of Hands-on Web Development
- **Education**: Bachelor of Computer Applications (BCA), 2nd Year, Siddharth University
- **Core Stacks**:
  - **Frontend**: HTML, CSS, JavaScript, React
  - **Backend**: Node.js, Python, Backend Architecture
  - **Automation & AI**: AI Automation, n8n, AI-powered workflows, AI-assisted development, Prompt Engineering

---

## 📁 Architecture & Directory Structure

```
├── index.html                   # SEO tags, typography preconnects & viewport setup
├── package.json                 # React, Vite, Lucide icons
├── vite.config.js               # Vite bundler configuration
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Main routing & state controller (hash navigation)
│   ├── index.css                # Obsidian & cyan dark theme design system
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed desktop header & mobile drawer
│   │   ├── Footer.jsx           # Standardized minimal footer
│   │   ├── SkillCard.jsx        # 5 categorized capability cards
│   │   ├── ProjectCard.jsx      # Verified project cards with visual previews
│   │   ├── ProjectModal.jsx     # Accessible capability & tech inspector modal
│   │   └── Icons.jsx            # Pixel-perfect SVG brand icons (GitHub, LinkedIn)
│   ├── pages/
│   │   ├── Home.jsx             # Hero section with experience badge & 3 core pillars
│   │   ├── About.jsx            # Background narrative & Siddharth University education card
│   │   ├── Skills.jsx           # Categorized capability matrix
│   │   ├── Projects.jsx         # AI Content Studio & Personal Website cards
│   │   ├── ContentExperiments.jsx # Builds & Experiments with filterable tags
│   │   └── Connect.jsx          # GitHub & LinkedIn digital presence hub
│   └── data/
│       ├── profile.js           # Verified bio, education & social profile data
│       ├── skills.js            # Categorized capabilities & skill descriptions
│       ├── projects.js          # Project details, confirmed capabilities & repo links
│       └── experiments.js       # Experimental builds, AI video workflows & n8n pipelines
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build & Linting
```bash
# Verify code quality with Oxlint
npm run lint

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠 Adding New Projects or Experiments

Data is cleanly decoupled from UI components. To add new work:
1. Open [`src/data/projects.js`](./src/data/projects.js) or [`src/data/experiments.js`](./src/data/experiments.js).
2. Append a new structured entry with verified capabilities, tags, and links.
3. The UI will render the new entries automatically.

---

## 📄 License
© 2026 Ravi Nishad. All rights reserved.
