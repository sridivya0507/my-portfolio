// components/Section.tsx
import { ReactNode } from "react";   // ✅ important import!

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{title}</h2>
        <div style={{ display: "grid", gap: "12px" }}>{children}</div>
      </div>
    </section>
  );
}
