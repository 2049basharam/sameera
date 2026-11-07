export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  score?: string;
  location: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "btech",
    institution: "Vishnu Women's University",
    degree: "Bachelor of Technology (B.Tech)",
    period: "First Year · Expected 2029–30",
    status: "Currently Pursuing — Year 1",
    location: "Andhra Pradesh, India",
    description: "Building foundational engineering knowledge in computer science, software design principles, procedural programming, mathematics, and problem-solving methodologies.",
    highlights: [
      "Core Engineering Mathematics & Computational Problem Solving",
      "Programming Fundamentals & Algorithm Design",
      "Active participant in technical workshops and developer communities",
      "Dedicated focus on frontend web architecture alongside academic coursework"
    ]
  },
  {
    id: "intermediate",
    institution: "VIT Junior College",
    degree: "Intermediate Education (MPC — Mathematics, Physics, Chemistry)",
    period: "Completed · 2024",
    status: "Graduated with 98% Distinction",
    score: "98%",
    location: "Andhra Pradesh, India",
    description: "Completed pre-university education with a 98% aggregate score, focusing on advanced mathematics, analytical physics, and chemistry.",
    highlights: [
      "98% aggregate score in Mathematics, Physics, and Chemistry",
      "Advanced calculus, analytical algebra, and coordinate geometry",
      "Strong academic consistency and quantitative problem-solving foundations"
    ]
  }
];
