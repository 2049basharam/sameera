import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Sameera Bhanu — Frontend Developer & Web Development Enthusiast",
  description: "Portfolio of Shaik Sameera Bhanu, a Frontend Developer and B.Tech student from Narasaraopet, India. Crafting responsive, intuitive, and interactive digital experiences with HTML5, CSS3, and JavaScript.",
  keywords: ["Shaik Sameera Bhanu", "Frontend Developer", "Web Developer Portfolio", "JavaScript", "HTML5", "CSS3", "React", "Narasaraopet"],
  authors: [{ name: "Shaik Sameera Bhanu" }],
  openGraph: {
    title: "Shaik Sameera Bhanu — Frontend Developer Portfolio",
    description: "Curated 3D digital experience and works of Shaik Sameera Bhanu, Frontend Developer & Web Development Enthusiast.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F3EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F5F3EE] antialiased">
      <body className="min-h-screen bg-[#F5F3EE] text-[#171918] selection:bg-[#283C32] selection:text-[#F5F3EE] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
