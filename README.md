# Shaik Sameera Bhanu — Cinematic 3D Developer Portfolio

A production-quality, award-winning personal portfolio website designed and engineered for **Shaik Sameera Bhanu** (Frontend Developer & Web Development Enthusiast).

Built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Three.js / React Three Fiber**.

---

## 🌟 Creative Vision & Architecture

* **Aesthetic Direction:** Cinematic 3D + Organic Futurism + Editorial Minimalism.
* **Color Palette:**
  * Canvas: `#F5F3EE` (Light architectural stone)
  * Secondary Surface: `#ECEAE3`
  * Text / Accents: `#171918` (Deep Charcoal)
  * Secondary Text: `#777B76`
  * Accent Forest: `#283C32`
  * Muted Sage: `#A9B7A0`
* **3D WebGL Features:**
  * **Hero Sculpture:** Complex procedural torus knot with physical transmission and clearcoat materials, orbiting metallic rings, and floating parametric architectural shards.
  * **Atmospheric Particle Constellation:** 3D spatial particle volume drifting dynamically with camera movement and mouse parallax.
  * **Interactive Skills Constellation:** Orbiting planetary technology nodes for confirmed and in-progress competencies. Hovering highlights the node and clicking launches an interactive technical inspector.
  * **Spatial 3D Projects Gallery:** Procedurally rendered 3D browser viewports with realistic chassis frames, lighting reflections, and deep case studies with Google Drive walkthrough links.
  * **Cinematic Camera Choreography:** Smooth camera position interpolation that glides between sections as the user scrolls.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3 |
| **3D Engine** | Three.js & React Three Fiber (`@react-three/fiber`, `@react-three/drei`) |
| **Icons** | Lucide React |
| **Motion** | GSAP 3 & Framer Motion |

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: v18.0.0 or higher (v24+ recommended)
* **npm**: v9.0.0 or higher

### Installation

```bash
# Clone or navigate to the repository
cd e:\sameera

# Install dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and create an optimized production build
npm run build

# Start the production server
npm run start
```

---

## 📁 Project Architecture

```
e:\sameera/
├── public/
│   ├── resume.pdf                     # Downloadable resume
│   └── sameera-resume.pdf             # Original candidate resume
├── src/
│   ├── app/
│   │   ├── globals.css                # Global architectural styling, glassmorphism, scrollbars
│   │   ├── layout.tsx                 # Root layout with SEO metadata & viewport settings
│   │   └── page.tsx                   # Main orchestrator integrating 3D Canvas & Content Sections
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navigation.tsx         # Header, mobile drawer, anchor links & resume download CTA
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Cinematic opening, monumental headline, CTAs
│   │   │   ├── AboutSection.tsx       # Personal bio, candidate profile, languages, strengths
│   │   │   ├── SkillsSection.tsx      # Constellation filter, category pills & skill inspector
│   │   │   ├── ProjectsSection.tsx    # Spatial gallery focus, walkthrough links, case studies
│   │   │   ├── EducationSection.tsx   # Academic timeline (Vishnu Women's Univ & VIT Junior College)
│   │   │   ├── LearningJourneySection.tsx # Structured milestones (React, C++, DSA, Git)
│   │   │   └── ContactSection.tsx     # Direct email CTA, phone, LinkedIn, GitHub & copy actions
│   │   └── three/
│   │       ├── WorldCanvas.tsx        # Master Three.js canvas with lighting & error boundary
│   │       ├── CameraController.tsx   # Smooth section-aware camera interpolation
│   │       ├── HeroSculpture.tsx      # Central abstract architectural sculpture
│   │       ├── ParticleField.tsx      # Atmospheric 3D particle cloud
│   │       ├── SkillsConstellation.tsx # Orbiting planetary technology nodes
│   │       ├── Project3DCard.tsx      # 3D browser frame mesh & interactive hover/select
│   │       └── projectTextures.ts     # Procedural high-resolution browser UI canvas textures
│   └── data/
│       ├── profile.ts                 # Candidate information, contact details, bio
│       ├── projects.ts                # Real projects, features, architecture, and video links
│       ├── skills.ts                  # Confirmed vs learning skills with 3D orbit coordinates
│       └── education.ts               # Degrees, institutions, graduation dates, and scores
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ How to Configure & Update Content

### 1. Updating Personal Information & Social Links
Open [`src/data/profile.ts`](file:///e:/sameera/src/data/profile.ts):
* Edit `email`, `phone`, `location`, `linkedIn`, or `github`.
* When Sameera creates her actual GitHub profile URL, update the `github` field:
  ```ts
  github: "https://github.com/sameera-bhanu",
  ```

### 2. Updating or Adding Projects
Open [`src/data/projects.ts`](file:///e:/sameera/src/data/projects.ts):
* Add or modify projects in the `projectsData` array.
* Set `driveVideoUrl`, `githubUrl`, or `liveDemoUrl`.
* The 3D browser texture generator in [`src/components/three/projectTextures.ts`](file:///e:/sameera/src/components/three/projectTextures.ts) will automatically adapt.

### 3. Updating Skills or Learning Trajectory
Open [`src/data/skills.ts`](file:///e:/sameera/src/data/skills.ts):
* Adjust `status: "confirmed"` or `"learning"`.
* Configure 3D constellation orbital properties (`orbitRadius`, `orbitSpeed`, `elevation`, `color`).

### 4. Updating Resume
Replace [`public/sameera-resume.pdf`](file:///e:/sameera/public/sameera-resume.pdf) with the updated PDF. The header and modal download links automatically target this file.

---

## 🚢 Deployment

### Deploy on Vercel
```bash
# Using Vercel CLI
npx vercel
```
Or connect your GitHub repository directly to Vercel. Next.js App Router will deploy with zero additional configuration.

### Deploy on Netlify
```bash
npx netlify deploy --build
```
