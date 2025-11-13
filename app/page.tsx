import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { profile } from "./content";

export default function Page() {
  return (
    <main className="shell">
      <Sidebar />

      <div className="content">
        {/* Decorative gradient glow */}
        <div className="bg-glow" />

        <Section id="about" title="About">
          <p className="muted" style={{ maxWidth: 820 }}>{profile.summary}</p>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <a className="btn btn-accent" href="#projects">View Projects</a>
            <a className="btn" href={`mailto:${profile.email}`}>Contact</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <Card>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {profile.skills.map((s) => <span key={s} className="badge">{s}</span>)}
            </div>
          </Card>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid grid-2">
            {profile.projects.map((p, i) => (
              <Card key={i}>
                <h3 style={{ fontWeight: 700 }}>{p.name}</h3>
                <p className="muted" style={{ marginTop: 6 }}>{p.desc}</p>
                {p.link && (
                  <a className="btn" href={p.link} target="_blank" rel="noreferrer" style={{ marginTop: 10 }}>
                    View Repository
                  </a>
                )}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
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

        <Section id="education" title="Education">
          {profile.education.map((ed, i) => (
            <Card key={i}>
              <div style={{ display:"flex", gap:8, justifyContent:"space-between", alignItems:"center", flexWrap:"wrap" }}>
                <h3 style={{ fontWeight: 600 }}>{ed.school}</h3>
                <span className="muted" style={{ fontSize: ".95rem" }}>{ed.gpa}</span>
              </div>
              <p style={{ marginTop: 6 }}>{ed.degree}</p>
            </Card>
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <p className="muted">Email me or reach out on LinkedIn.</p>
            <div style={{ display:"flex", gap:12, marginTop:12, flexWrap:"wrap" }}>
              <a className="btn btn-accent" href={`mailto:${profile.email}`}>Email</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </Card>
        </Section>

        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        </footer>
      </div>
    </main>
  );
}
