// components/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <img src="/profile.jpg" alt="Sridivya" className="avatar sidebar-avatar" />
        <h1 className="sidebar-name">Sridivya Puttoju</h1>
        <p className="sidebar-role">Data Analyst · Data Modeler</p>

        <div className="sidebar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="sidebar-cta">
          <a className="btn btn-accent" href="/Sridivya_Puttoju_Resume.pdf" target="_blank" rel="noreferrer">
            Download Résumé
          </a>
        </div>
      </div>
    </aside>
  );
}
