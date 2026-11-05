export type SkillStatus = "confirmed" | "learning";
export type SkillCategory = "frontend" | "languages" | "foundations" | "tools" | "ai";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  status: SkillStatus;
  statusLabel: string;
  description: string;
  highlight: string;
  orbitRadius: number; // for 3D constellation layout
  orbitSpeed: number;
  initialAngle: number;
  elevation: number;
  color: string;
  glowColor: string;
}

export const skillsData: SkillItem[] = [
  // Confirmed Frontend
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend Architecture",
    status: "confirmed",
    statusLabel: "Core Foundation",
    description: "Semantic document structuring, modern web accessibility (ARIA standards), responsive metadata, and SEO-friendly document hierarchy.",
    highlight: "Semantic & Accessible Markup",
    orbitRadius: 3.2,
    orbitSpeed: 0.35,
    initialAngle: 0.1,
    elevation: 0.5,
    color: "#E44D26",
    glowColor: "rgba(228, 77, 38, 0.4)"
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Styling & Responsive Design",
    status: "confirmed",
    statusLabel: "Core Foundation",
    description: "Modern CSS Flexbox, CSS Grid layouts, media queries, custom variables, smooth transitions, and fluid typographic hierarchies.",
    highlight: "Responsive Grid & Flex Systems",
    orbitRadius: 3.8,
    orbitSpeed: -0.3,
    initialAngle: 1.2,
    elevation: -0.4,
    color: "#264DE4",
    glowColor: "rgba(38, 77, 228, 0.4)"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    categoryLabel: "Client-Side Scripting",
    status: "confirmed",
    statusLabel: "Core Foundation",
    description: "ES6+ syntax, DOM manipulation, asynchronous programming, event handling, game loop mechanics, and interactive user logic.",
    highlight: "Interactive Event & Logic Engines",
    orbitRadius: 4.5,
    orbitSpeed: 0.28,
    initialAngle: 2.3,
    elevation: 0.8,
    color: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.4)"
  },

  // Tools & AI
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    categoryLabel: "Development Environment",
    status: "confirmed",
    statusLabel: "Workflow Essential",
    description: "Primary IDE for coding, debugging, workspace optimization, live preview servers, and automated code formatting.",
    highlight: "Modular Developer Workspace",
    orbitRadius: 4.0,
    orbitSpeed: -0.22,
    initialAngle: 3.5,
    elevation: -0.7,
    color: "#007ACC",
    glowColor: "rgba(0, 122, 204, 0.4)"
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    categoryLabel: "Version Control & Collaboration",
    status: "confirmed",
    statusLabel: "Workflow Essential",
    description: "Git source control, repository branching, semantic commits, code reviews, and remote deployment workflows.",
    highlight: "Source Control & Collaboration",
    orbitRadius: 4.8,
    orbitSpeed: 0.25,
    initialAngle: 4.6,
    elevation: 0.3,
    color: "#283C32",
    glowColor: "rgba(40, 60, 50, 0.4)"
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "ai",
    categoryLabel: "AI-Assisted Engineering",
    status: "confirmed",
    statusLabel: "Workflow Accelerator",
    description: "Utilized for architectural brainstorming, syntax verification, code documentation, and rapid algorithmic prototyping.",
    highlight: "Architectural Synthesis & Ideation",
    orbitRadius: 3.5,
    orbitSpeed: -0.32,
    initialAngle: 5.4,
    elevation: -0.3,
    color: "#10A37F",
    glowColor: "rgba(16, 163, 127, 0.4)"
  },
  {
    id: "claude",
    name: "Claude",
    category: "ai",
    categoryLabel: "AI-Assisted Engineering",
    status: "confirmed",
    statusLabel: "Workflow Accelerator",
    description: "Applied for deep code reasoning, clean refactoring patterns, edge-case analysis, and creative concept formulation.",
    highlight: "Contextual Refactoring & Code Analysis",
    orbitRadius: 4.2,
    orbitSpeed: 0.2,
    initialAngle: 5.9,
    elevation: 0.6,
    color: "#CC785C",
    glowColor: "rgba(204, 120, 92, 0.4)"
  },

  // In-Progress / Currently Learning
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    categoryLabel: "Modern Component Framework",
    status: "learning",
    statusLabel: "Currently Learning",
    description: "Exploring declarative component architecture, state management with hooks, props passing, virtual DOM reconciliation, and Next.js integration.",
    highlight: "Component State & Lifecycle Dynamics",
    orbitRadius: 5.2,
    orbitSpeed: 0.18,
    initialAngle: 0.7,
    elevation: -0.5,
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.45)"
  },
  {
    id: "cpp",
    name: "C++",
    category: "languages",
    categoryLabel: "Systems Programming",
    status: "learning",
    statusLabel: "Currently Learning",
    description: "Strengthening deep programming fundamentals, object-oriented principles, memory management concepts, pointers, and performance optimization.",
    highlight: "Object-Oriented & Memory Foundations",
    orbitRadius: 5.5,
    orbitSpeed: -0.15,
    initialAngle: 2.8,
    elevation: 0.9,
    color: "#00599C",
    glowColor: "rgba(0, 89, 156, 0.45)"
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    category: "foundations",
    categoryLabel: "Computational Problem Solving",
    status: "learning",
    statusLabel: "Currently Learning",
    description: "Studying arrays, linked lists, stacks, queues, trees, time & space Big-O analysis, sorting algorithms, and mathematical problem-solving strategies.",
    highlight: "Algorithmic Efficiency & Big-O Analysis",
    orbitRadius: 5.8,
    orbitSpeed: 0.16,
    initialAngle: 4.0,
    elevation: -0.8,
    color: "#8E44AD",
    glowColor: "rgba(142, 68, 173, 0.45)"
  }
];

export interface LearningMilestone {
  title: string;
  focus: string;
  status: "In Progress" | "Continuous Practice";
  description: string;
  milestones: string[];
}

export const learningJourneyData: LearningMilestone[] = [
  {
    title: "React.js Exploration",
    focus: "Modern Component Architectures",
    status: "In Progress",
    description: "Transitioning from vanilla DOM manipulation to declarative, state-driven UI development.",
    milestones: [
      "Component modularity and clean prop interfaces",
      "Managing reactive states with useState and useEffect",
      "Building reusable UI systems and compound components",
      "Connecting component lifecycles to modern styling frameworks"
    ]
  },
  {
    title: "C++ Programming Fundamentals",
    focus: "Core Systems & Procedural Logic",
    status: "In Progress",
    description: "Deepening fundamental programming mental models through low-level type safety and memory comprehension.",
    milestones: [
      "Control flows, functions, and structured modular code",
      "Object-Oriented Programming (Classes, Inheritance, Encapsulation)",
      "Pointers, references, and memory allocation awareness",
      "Writing clean, deterministic procedural routines"
    ]
  },
  {
    title: "Data Structures & Algorithms",
    focus: "Computational Rigor & Big-O",
    status: "In Progress",
    description: "Cultivating structured problem-solving instincts to write optimized, high-throughput software.",
    milestones: [
      "Linear structures: Dynamic Arrays, Linked Lists, Stacks, Queues",
      "Non-linear structures: Trees, Graphs, and Hash Tables",
      "Sorting and Searching algorithmic strategies",
      "Time complexity and space complexity optimization"
    ]
  },
  {
    title: "Modern Frontend Mastery",
    focus: "Fluid User Interfaces & Accessibility",
    status: "Continuous Practice",
    description: "Refining semantic HTML, CSS layout algorithms, and performant vanilla JavaScript interactions.",
    milestones: [
      "Mobile-first responsive fluid grids and flex containers",
      "Interactive micro-animations and user feedback loops",
      "High-contrast, accessible typography and layout design",
      "Cross-browser compatibility testing and rendering speed"
    ]
  },
  {
    title: "Git & Version Control Workflows",
    focus: "Collaborative Code Management",
    status: "Continuous Practice",
    description: "Adopting professional version control hygiene to document and preserve project evolution.",
    milestones: [
      "Atomic git commits with clear semantic commit messages",
      "Branch-based feature development and merge hygiene",
      "Syncing with remote repositories and continuous backup",
      "Collaborative pull requests and code review habits"
    ]
  }
];
