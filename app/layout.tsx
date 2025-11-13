// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sridivya Puttoju — Portfolio",
  description: "Data Analyst / Data Modeler portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="top-nav">
          <div className="nav-inner">
            <div className="nav-logo">SP</div>
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
