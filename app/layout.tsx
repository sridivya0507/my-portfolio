import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sridivya Puttoju — Portfolio",
  description: "Data Analyst / Data Modeler portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
