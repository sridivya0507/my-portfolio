// app/page.tsx
import Section from "@/components/Section";
import Card from "@/components/Card";
import { profile } from "./content";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <header style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container py-hero">
          <h1 className="h1">{profile.name}</h1>
          <p className="mt-2 muted">{profile.title}</p>

          <div className="mt-4" style={{ fontSize: ".95rem" }}>
            <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>
            {" • "}{profile.location}{" • "}{profile.phone}{" • "}
            <a className="underline" href={profile.linkedin} target="_blank">LinkedIn</a>
          </div>

          <p className="mt-6" style={{ maxWidth: 720 }}>{profile.summary}</p>
        </div>
      </header>

      {/* Skills */}
      <Section title="Skills">
        <Card>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {profile.skills.map((s) => (
              <span key={s} className="badge">{s}</span>
            ))}
          </div>
        </Card>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        {profile.experience.map((e, idx) => (
          <Card key={idx}>
            <h3 style={{ fontWeight: 600 }}>{e.role}</h3>
            <p className="muted" style={{ fontSize: ".95rem" }}>
              {e.company} • {e.location}
            </p>
            <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.6 }}>
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </Card>
        ))}
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="grid grid-2">
          {profile.projects.map((p, i) => (
            <Card key={i}>
              <h3 style={{ fontWeight: 600 }}>{p.name}</h3>
              <p className="muted" style={{ marginTop: 6, fontSize: ".95rem" }}>{p.desc}</p>
              {p.link && (
                <a href={p.link} target="_blank" className="underline" style={{ display: "inline-block", marginTop: 10 }}>
                  View repository
                </a>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        {profile.education.map((ed, i) => (
          <Card key={i}>
            <div style={{ display: "flex", gap: 8, justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
              <h3 style={{ fontWeight: 600 }}>{ed.school}</h3>
              <span className="muted" style={{ fontSize: ".95rem" }}>{ed.gpa}</span>
            </div>
            <p style={{ marginTop: 6 }}>{ed.degree}</p>
          </Card>
        ))}
      </Section>

      {/* Certifications & Awards */}
      <Section title="Certifications">
        <Card>
          <ul style={{ paddingLeft: 18, lineHeight: 1.6 }}>
            {profile.certifications.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </Card>
      </Section>

      <Section title="Awards">
        <Card>
          <ul style={{ paddingLeft: 18, lineHeight: 1.6 }}>
            {profile.awards.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
