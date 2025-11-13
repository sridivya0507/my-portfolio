// app/page.tsx
import Section from "@/components/Section";
import Card from "@/components/Card";
import { profile } from "./content";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-inner">
          {/* LEFT TEXT */}
          <div>
            <p className="hero-eyebrow">Hi there! 👋</p>
            <h1 className="hero-name">
              <span className="gradient">Sridivya Puttoju</span>
            </h1>
            <p className="hero-text">
              I&apos;m a Data Analyst / Data Modeler with 3+ years of experience
              working with Python, SQL, Oracle, Snowflake, AWS, and ML models.
              I love turning messy data into clear insights, building
              dashboards, and designing clean data models that support
              decision-making.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a
                href="/Sridivya_Puttoju_Resume.pdf"
                className="btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                Download Résumé
              </a>
            </div>

            <div className="social-pill">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
              >
                ✉️
              </a>
              {/* add GitHub later if you want */}
            </div>
          </div>

          {/* RIGHT PHOTO */}
          <div className="hero-photo-wrap">
            <div className="hero-outline" />
            <img
              src="/profile.jpg"
              alt="Sridivya"
              className="hero-photo"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-inner">
          <h2 className="section-title">Skills</h2>
          <Card>
            <div>
              {profile.skills.map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-inner">
          <h2 className="section-title">Projects</h2>
          <div
            style={{
              display: "grid",
              gap: "18px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {profile.projects.map((p, i) => (
              <Card key={i}>
                <h3 style={{ fontWeight: 600 }}>{p.name}</h3>
                <p className="muted" style={{ marginTop: 6 }}>
                  {p.desc}
                </p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ marginTop: 10, display: "inline-flex" }}
                  >
                    View Repository
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-inner">
          <h2 className="section-title">Experience</h2>
          {profile.experience.map((e, idx) => (
            <Card key={idx}>
              <h3 style={{ fontWeight: 600 }}>{e.role}</h3>
              <p className="muted" style={{ fontSize: ".95rem" }}>
                {e.company} • {e.location}
              </p>
              <ul
                style={{
                  marginTop: 12,
                  paddingLeft: 18,
                  lineHeight: 1.6,
                  color: "#e5e7eb",
                  fontSize: "0.95rem",
                }}
              >
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-inner">
          <h2 className="section-title">Education</h2>
          {profile.education.map((ed, i) => (
            <Card key={i}>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h3 style={{ fontWeight: 600 }}>{ed.school}</h3>
                <span className="muted" style={{ fontSize: ".95rem" }}>
                  {ed.gpa}
                </span>
              </div>
              <p style={{ marginTop: 6 }}>{ed.degree}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section-inner">
          <h2 className="section-title">Contact</h2>
          <Card>
            <p className="muted">
              Feel free to reach out if you&apos;d like to discuss data roles,
              projects, or collaborations.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
              >
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </main>
  );
}
