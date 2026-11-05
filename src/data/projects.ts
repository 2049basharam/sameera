export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
  architecture: string;
  videoPath: string;
  videoDuration: string;
  driveId: string;
  drivePreviewUrl: string;
  driveVideoUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  palette: {
    accent: string;
    glow: string;
    surface: string;
  };
  preview: {
    theme: "ecommerce" | "culinary" | "arcade" | "intelligence" | "interactive";
    headline: string;
    accentColor: string;
    accentBg: string;
    mockupType: string;
  };
}

export const featuredReel = {
  title: "Multi-Project Overview Walkthrough",
  tagline: "Continuous live screen recording showcasing Sameera's frontend developments",
  videoPath: "/videos/portfolio-reel.mp4",
  duration: "0:37",
  driveId: "1OWFJUhRv1ZI_E-PanuBKt-h2xUL3qeXV",
  drivePreviewUrl: "https://drive.google.com/file/d/1OWFJUhRv1ZI_E-PanuBKt-h2xUL3qeXV/preview",
  driveUrl: "https://drive.google.com/file/d/1OWFJUhRv1ZI_E-PanuBKt-h2xUL3qeXV/view"
};

export const projectsData: ProjectItem[] = [
  {
    id: "amazon-clone",
    number: "01",
    title: "Amazon Clone",
    tagline: "Responsive E-Commerce Architecture",
    category: "Web Application / E-Commerce",
    technologies: ["HTML5", "CSS3"],
    description: "Developed a responsive e-commerce-style homepage inspired by modern online shopping interfaces.",
    features: [
      "Dynamic header with delivery location, search bar, and cart badge",
      "Multi-tier category navigation bar with departmental shortcuts",
      "Responsive hero banner with promotional layout",
      "Quad-box merchandising cards with product highlights",
      "Structured informational footer with regional navigation links"
    ],
    architecture: "Semantic HTML5 hierarchical structure paired with modern CSS Flexbox and CSS Grid layout algorithms, achieving responsive viewport fluidity.",
    videoPath: "/videos/amazon-clone.mp4",
    videoDuration: "0:15",
    driveId: "1vBxMT2haRQDCjNWgYsZ4KhKN909NZv04",
    drivePreviewUrl: "https://drive.google.com/file/d/1vBxMT2haRQDCjNWgYsZ4KhKN909NZv04/preview",
    driveVideoUrl: "https://drive.google.com/file/d/1vBxMT2haRQDCjNWgYsZ4KhKN909NZv04/view",
    githubUrl: undefined,
    liveDemoUrl: undefined,
    palette: {
      accent: "#D48B38",
      glow: "rgba(212, 139, 56, 0.2)",
      surface: "#FAF8F5"
    },
    preview: {
      theme: "ecommerce",
      headline: "Curated Storefront Layout",
      accentColor: "#E47911",
      accentBg: "#131921",
      mockupType: "Amazon Prime Storefront"
    }
  },
  {
    id: "restaurant-menu",
    number: "02",
    title: "Restaurant Menu",
    tagline: "Editorial Culinary Interface",
    category: "Hospitality & Dining",
    technologies: ["HTML5", "CSS3"],
    description: "Built a responsive restaurant menu website with a clean and user-friendly interface.",
    features: [
      "Typographic hierarchy highlighting culinary specialties",
      "Categorized food and beverage tabulations with pricing alignment",
      "Allergen and ingredient descriptions with clean typography",
      "High-contrast section demarcation allowing rapid scannability",
      "Mobile-optimized touch layout for handheld table browsing"
    ],
    architecture: "Crafted with an emphasis on editorial whitespace, CSS variables for cohesive theme management, and subgrid alignment for menu descriptions.",
    videoPath: "/videos/restaurant-menu.mp4",
    videoDuration: "0:24",
    driveId: "12rQlzYPinf89SOhVtE6lbwoPuD80IWwC",
    drivePreviewUrl: "https://drive.google.com/file/d/12rQlzYPinf89SOhVtE6lbwoPuD80IWwC/preview",
    driveVideoUrl: "https://drive.google.com/file/d/12rQlzYPinf89SOhVtE6lbwoPuD80IWwC/view",
    githubUrl: undefined,
    liveDemoUrl: undefined,
    palette: {
      accent: "#B85D36",
      glow: "rgba(184, 93, 54, 0.2)",
      surface: "#FBF7F2"
    },
    preview: {
      theme: "culinary",
      headline: "Artisanal Table Experience",
      accentColor: "#C96D48",
      accentBg: "#2C221E",
      mockupType: "Bistro Menu Interface"
    }
  },
  {
    id: "game-hub",
    number: "03",
    title: "Game Hub",
    tagline: "Interactive Arcade Portal",
    category: "Entertainment & Gaming",
    technologies: ["HTML5", "CSS3"],
    description: "Developed an interactive gaming website featuring multiple browser-based games.",
    features: [
      "Curated library grid showcasing various browser-ready gaming experiences",
      "Visual cards with custom game categories and badges",
      "Control panels explaining keyboard and touch inputs",
      "Immersive dark-themed layout designed for arcade presentation",
      "Lightweight styling engineered for rapid frame rates and zero stutter"
    ],
    architecture: "Employs CSS transform hardware acceleration, custom micro-interactions on hover, and modular layout components for seamless addition of new gaming titles.",
    videoPath: "/videos/game-hub.mp4",
    videoDuration: "0:21",
    driveId: "1Ia3XCRzb9veiDdnWv--5ELKrrxatajaT",
    drivePreviewUrl: "https://drive.google.com/file/d/1Ia3XCRzb9veiDdnWv--5ELKrrxatajaT/preview",
    driveVideoUrl: "https://drive.google.com/file/d/1Ia3XCRzb9veiDdnWv--5ELKrrxatajaT/view",
    githubUrl: undefined,
    liveDemoUrl: undefined,
    palette: {
      accent: "#3D6E58",
      glow: "rgba(61, 110, 88, 0.2)",
      surface: "#F3F7F4"
    },
    preview: {
      theme: "arcade",
      headline: "Browser Arcade Catalog",
      accentColor: "#4E876E",
      accentBg: "#17241E",
      mockupType: "Game Catalog Portal"
    }
  },
  {
    id: "ai-tools-hub",
    number: "04",
    title: "AI Tools Hub",
    tagline: "Curated Directory of Intelligent Software",
    category: "Developer Tools & AI",
    technologies: ["HTML5", "CSS3"],
    description: "Created a website showcasing useful AI tools organized into different categories.",
    features: [
      "Taxonomy-driven categorization spanning LLMs, Vision, Code, and Audio",
      "Concise capability summaries and use-case highlights for each tool",
      "Tag-based visual indexing facilitating swift comparative evaluation",
      "Direct external launch links with verified platform badges",
      "Fluid card grid that gracefully adapts across mobile, tablet, and wide screens"
    ],
    architecture: "Engineered with CSS component isolation, systematic CSS utility classes, and accessibility-first contrast ratios meeting WCAG AAA legibility.",
    videoPath: "/videos/ai-tools-hub.mp4",
    videoDuration: "0:20",
    driveId: "1sZB9c1j2Q6eUAvfUvzlQ_1pTnuAzO-9f",
    drivePreviewUrl: "https://drive.google.com/file/d/1sZB9c1j2Q6eUAvfUvzlQ_1pTnuAzO-9f/preview",
    driveVideoUrl: "https://drive.google.com/file/d/1sZB9c1j2Q6eUAvfUvzlQ_1pTnuAzO-9f/view",
    githubUrl: undefined,
    liveDemoUrl: undefined,
    palette: {
      accent: "#4A6B82",
      glow: "rgba(74, 107, 130, 0.2)",
      surface: "#F2F5F8"
    },
    preview: {
      theme: "intelligence",
      headline: "AI Software Directory",
      accentColor: "#587C96",
      accentBg: "#1A2228",
      mockupType: "Curated Model Directory"
    }
  },
  {
    id: "rock-paper-scissors",
    number: "05",
    title: "Rock Paper Scissors",
    tagline: "Algorithmic Browser Game Engine",
    category: "Interactive JavaScript Application",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: "Built an interactive browser-based game using JavaScript game logic and real-time user interaction.",
    features: [
      "Pure JavaScript state machine evaluating win, loss, and draw conditions",
      "Randomized computer decision engine delivering fair competition",
      "Real-time score accumulator maintaining player vs computer session tally",
      "Dynamic DOM manipulation updating game rounds and visual status flags instantly",
      "Tactile button feedback with game state reset capability"
    ],
    architecture: "Event-driven JavaScript utilizing strict DOM caching, modular game-loop functions, and zero external runtime libraries for immediate execution.",
    videoPath: "/videos/rock-paper-scissors.mp4",
    videoDuration: "0:31",
    driveId: "10ZMaAQo4xXNs3P36zQYvPwB21Pd2r3Fh",
    drivePreviewUrl: "https://drive.google.com/file/d/10ZMaAQo4xXNs3P36zQYvPwB21Pd2r3Fh/preview",
    driveVideoUrl: "https://drive.google.com/file/d/10ZMaAQo4xXNs3P36zQYvPwB21Pd2r3Fh/view",
    githubUrl: undefined,
    liveDemoUrl: undefined,
    palette: {
      accent: "#8B6B48",
      glow: "rgba(139, 107, 72, 0.2)",
      surface: "#F8F5F1"
    },
    preview: {
      theme: "interactive",
      headline: "JavaScript Match Engine",
      accentColor: "#9C7952",
      accentBg: "#2A231C",
      mockupType: "Interactive Logic Game"
    }
  }
];
