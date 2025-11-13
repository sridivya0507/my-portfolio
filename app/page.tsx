import Section from "@/components/Section";
import Card from "@/components/Card";
import { profile } from "./content";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <main className="shell">
      <Sidebar />
      <div className="content">
        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="h2">About</h2>
            <p className="muted" style={{ maxWidth: 820, marginTop: 12 }}>
              {profile.summary}
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="container">
            <h2 className="h2">Skills</h2>
            <Card>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {profile.skills.map((s) => <span key={s} className="badge">{s}</span>)}
              </div>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="h2">Projects</h2>
            <div className="grid grid-2">
              {profile.projects.map((p, i) => (
                <Card key={i}>
                  <h3 style={{ fontWeight: 700 }}>{p.name}</h3>
                  <p className="muted" style={{ marginTop: 6 }}>{p.desc}</p>
                  {p.link && (
                    <a href={p.link} target="_blank" className="btn" style={{ marginTop: 12 }}>
                      View Repository
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="container">
            <h2 className="h2">Experience</h2>
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
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section">
          <div className="container">
            <h2 className="h2">Education</h2>
            {profile.education.map((ed, i) => (
              <Card key={i}>
                <div style={{ display: "flex", gap: 8, justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                  <h3 style={{ fontWeight: 600 }}>{ed.school}</h3>
                  <span className="muted" style={{ fontSize: ".95rem" }}>{ed.gpa}</span>
                </div>
                <p style={{ marginTop: 6 }}>{ed.degree}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="h2">Contact</h2>
            <Card>
              <p className="muted">Email me or reach out on LinkedIn.</p>
              <div style={{ display:"flex", gap:12, marginTop:12, flexWrap:"wrap" }}>
                <a className="btn btn-accent" href={`mailto:${profile.email}`}>Email</a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </Card>
          </div>
        </section>

        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        </footer>
      </div>
    </main>
  );
}
