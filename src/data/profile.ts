export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  subRole: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  github: string;
  status: string;
  bio: string;
  hero: {
    yearLabel: string;
    headline: string;
    subheadline: string;
    identityLine: string;
    badge: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    strengths: string[];
    languages: { name: string; level: string }[];
  };
  contact: {
    heading: string;
    subheading: string;
    cta: string;
  };
}

export const profileData: ProfileData = {
  name: "Sameera Bhanu",
  fullName: "Shaik Sameera Bhanu",
  role: "Frontend Developer",
  subRole: "Web Development Enthusiast",
  location: "Narasaraopet, Andhra Pradesh, India",
  phone: "+91 9063372716",
  email: "sksameera@321sgmail.com",
  linkedIn: "https://www.linkedin.com/in/shaik-sameera-bhanu-86b67341a/",
  github: "https://github.com/sameera-bhanu",
  status: "Open to frontend internships",
  bio: "I'm Shaik Sameera Bhanu, a first-year B.Tech student interested in frontend development and building responsive, user-friendly websites. I enjoy turning ideas into interactive web experiences using HTML, CSS, and JavaScript. I'm currently learning React.js, strengthening my C++ fundamentals, and exploring Data Structures and Algorithms.",
  hero: {
    yearLabel: "Portfolio 2026",
    headline: "I create experiences for the digital world.",
    subheadline: "I'm Sameera Bhanu, a frontend development enthusiast exploring the intersection of technology, creativity, and interactive web experiences.",
    identityLine: "Shaik Sameera Bhanu — Frontend Developer — Narasaraopet, India",
    badge: "Available for internships",
  },
  about: {
    heading: "Curiosity leads to creation",
    paragraphs: [
      "I'm Sameera Bhanu, a first-year B.Tech student interested in frontend development and building responsive, user-friendly websites.",
      "I enjoy turning ideas into interactive digital experiences using HTML, CSS, and JavaScript. I'm currently learning React.js, strengthening C++ fundamentals, and exploring Data Structures and Algorithms.",
      "My work focuses on clean layout structure, semantic web standards, and building interfaces that feel direct and easy to use."
    ],
    strengths: [
      "Problem Solving",
      "Quick Learner",
      "Teamwork",
      "Communication",
      "Consistency",
      "Attention to Detail"
    ],
    languages: [
      { name: "English", level: "Professional working proficiency" },
      { name: "Telugu", level: "Native proficiency" },
      { name: "Hindi", level: "Working proficiency" }
    ]
  },
  contact: {
    heading: "Let's create something meaningful",
    subheading: "I'm open to frontend development internships, learning opportunities, and meaningful collaborations.",
    cta: "Send an email"
  }
};
