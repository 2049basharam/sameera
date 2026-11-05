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
    period: "First Year (Expected Graduation: 2029–30)",
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
    period: "Completed",
    status: "Graduated with Distinction",
    score: "98%",
    location: "Andhra Pradesh, India",
    description: "Completed rigorous pre-university education with an exceptional 98% academic distinction, mastering foundational mathematics, analytical physics, and chemistry.",
    highlights: [
      "Outstanding academic performance achieving 98% aggregate score",
      "Advanced analytical calculus, algebra, and coordinate geometry",
      "Disciplined academic consistency and strong work ethic"
    ]
  }
];
