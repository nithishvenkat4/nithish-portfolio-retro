import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  FolderKanban,
  Home,
  Mail,
  MapPin,
  Menu,
  Trophy,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

const profile = {
  name: "NITHISH V",
  role: "AI / ML ENGINEER",
  email: "nithishvenkat4507@gmail.com",
  github: "https://github.com/nithishvenkat4",
  linkedin: "https://www.linkedin.com/in/nithishvenkat4507/",
  location: "Coimbatore, India",
};

const navItems = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: UserRound },
  { href: "#work", label: "Projects", icon: FolderKanban },
  { href: "#skills", label: "Skills", icon: Wrench },
  { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "#achievements", label: "Achievements", icon: Trophy },
  { href: "#contact", label: "Contact", icon: Mail },
];

const projects = [
  {
    number: "01",
    title: "Geo-Hazard ML",
    type: "MACHINE LEARNING / GEOSPATIAL AI",
    description:
      "Risk prediction using 160K+ USGS and INFORM records, feature engineering, model evaluation and geospatial dashboards.",
    stats: ["160K+ records", "10+ features", "~82% accuracy"],
    tags: ["Python", "Pandas", "Scikit-learn", "Power BI", "Streamlit"],
    tone: "yellow",
  },
  {
    number: "02",
    title: "FinMate",
    type: "PERSONAL FINANCE / INTELLIGENT SYSTEMS",
    description:
      "A personal finance intelligence platform for expense tracking, savings, investment analytics and a finance knowledge graph.",
    stats: ["Expense intelligence", "Investment analytics", "Knowledge graph"],
    tags: ["Python", "React", "APIs", "Analytics"],
    tone: "pink",
  },
  {
    number: "03",
    title: "CrisisMesh",
    type: "ANDROID / OFFLINE COMMUNICATION",
    description:
      "An offline emergency communication system where smartphones relay SOS messages through Bluetooth-based peer communication.",
    stats: ["BLE / GATT", "Multi-hop relay", "Offline-first"],
    tags: ["Kotlin", "Android", "BLE", "GATT", "MapLibre"],
    tone: "blue",
  },
  {
    number: "04",
    title: "CLOTE",
    type: "BACKEND / SECURITY / FILE MANAGEMENT",
    description:
      "A privacy-centric file management system with JWT authentication, REST APIs, local storage and role-based access.",
    stats: ["100+ operations", "JWT auth", "Role-based access"],
    tags: ["Python", "Flask", "SQLite", "JWT", "REST"],
    tone: "green",
  },
  {
    number: "05",
    title: "Crypto Arbitrage",
    type: "DATA ANALYTICS / FINANCIAL SYSTEMS",
    description:
      "Graph-based analysis of cryptocurrency prices across exchanges using negative-cycle detection for potential arbitrage paths.",
    stats: ["5+ exchanges", "10K+ price points", "Bellman-Ford"],
    tags: ["Python", "Pandas", "NumPy", "APIs"],
    tone: "orange",
  },
];

const moreProjects = [
  {
    title: "Vulnerability Triage",
    description:
      "Adaptive risk analytics combining KEV, EPSS, CVSS, exposure and business importance.",
    tags: ["FastAPI", "React", "Security"],
  },
  {
    title: "CircleShare",
    description:
      "Campus resource exchange platform with listings, bookings, trust scoring and analytics.",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    title: "Warren Brokerage",
    description:
      "Java Swing stock brokerage application with MySQL integration and trading/account modules.",
    tags: ["Java", "Swing", "JDBC"],
  },
];

const skills = [
  ["AI & DATA", "Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "Feature Engineering"],
  ["DEVELOPMENT", "React", "FastAPI", "Flask", "REST APIs", "HTML", "CSS"],
  ["DATABASES", "MySQL", "MongoDB", "SQLite", "Oracle", "PL/SQL"],
  ["SYSTEMS", "Wireshark", "Packet Tracer", "Nmap", "Docker", "BLE"],
  ["CLOUD", "AWS", "Vercel", "Render", "Git", "GitHub", "Domain Management"],
  ["APPLIED AREAS", "Financial Analytics", "Geospatial AI", "Intelligent Systems", "Security Analytics"],
];

function Label({ children }) {
  return <div className="eyebrow-label">{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <div className="bg-shape bg-blue" />
      <div className="bg-shape bg-peach" />
      <div className="bg-shape bg-coral" />

      <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-mark">&lt;/&gt;</div>
          <div>
            <strong>NITHISH</strong>
            <span>PORTFOLIO</span>
          </div>
        </div>

        <nav className="side-nav">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a href={href} key={label} onClick={closeMenu}>
              <Icon size={15} strokeWidth={2.4} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </aside>

      <main className="dashboard" id="top">
        <header className="topbar">
          <a className="mobile-brand" href="#top" onClick={closeMenu}>
            NV<span>.</span>
          </a>

          <div className="topbar-search">
            <span>⌕</span>
            <span>AI / ML · DATA · SOFTWARE</span>
          </div>

          <div className="topbar-actions">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="top-avatar">
              NV
            </a>
          </div>

          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <section className="profile-section">
          <div className="back-chip">← PROFILE</div>

          <div className="profile-heading">
            <Label>AI / ML ENGINEER</Label>
            <h1>
              Building useful
              <br />
              <span>intelligent systems.</span>
            </h1>
            <p>
              MSc Artificial Intelligence & Machine Learning Integrated student
              at Coimbatore Institute of Technology. I turn data, ideas and
              systems problems into practical software.
            </p>
          </div>

          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-photo-wrap">
                <img src="/images/profile.jpg" alt="Nithish V" className="profile-photo" />
                <div className="photo-tag">NV / 2026</div>
              </div>

              <div className="profile-info">
                <div className="profile-name-row">
                  <div>
                    <h2>Nithish V</h2>
                    <p>{profile.email}</p>
                  </div>
                  <div className="initials-badge">AI</div>
                </div>

                <div className="profile-metrics">
                  <div>
                    <strong>8.3</strong>
                    <span>CGPA / 10</span>
                  </div>
                  <div>
                    <strong>160K+</strong>
                    <span>Records</span>
                  </div>
                  <div>
                    <strong>5+</strong>
                    <span>Projects</span>
                  </div>
                  <div>
                    <strong>2026</strong>
                    <span>Industry</span>
                  </div>
                </div>

                <p className="profile-copy">
                  Machine learning · data analytics · software development ·
                  financial systems · geospatial AI.
                </p>

                <div className="profile-actions">
                  <a className="retro-button dark" href="#work">
                    View projects <ArrowUpRight size={16} />
                  </a>
                  <a className="retro-button light" href={`mailto:${profile.email}`}>
                    Contact me
                  </a>
                </div>
              </div>
            </div>

            <div className="quick-panel">
              <div className="panel-title">
                <span>QUICK INFO</span>
                <span>01</span>
              </div>

              <div className="quick-row">
                <span>Education</span>
                <strong>MSc AIML Integrated</strong>
              </div>
              <div className="quick-row">
                <span>Institute</span>
                <strong>CIT, Coimbatore</strong>
              </div>
              <div className="quick-row">
                <span>Focus</span>
                <strong>AI · Data · Systems</strong>
              </div>
              <div className="quick-row">
                <span>Location</span>
                <strong>Coimbatore, India</strong>
              </div>

              <div className="availability">
                <span className="green-dot" />
                Open to opportunities
              </div>
            </div>
          </div>
        </section>

        <section className="section-block about-block" id="about">
          <div className="section-topline">
            <Label>02 / ABOUT</Label>
            <span>CURIOUS BY DEFAULT</span>
          </div>

          <div className="two-column">
            <h2 className="display-title">
              Curious by default.
              <br />
              <span>Practical by design.</span>
            </h2>

            <div className="about-copy">
              <p>
                I enjoy taking a problem from messy data or an early idea and
                turning it into something that can actually be used.
              </p>
              <p>
                My work sits at the intersection of machine learning, data
                analysis, backend development, financial technology and
                real-world systems.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block work-block" id="work">
          <div className="section-topline">
            <Label>03 / SELECTED WORK</Label>
            <span>BUILD / LEARN / SHIP</span>
          </div>

          <div className="projects-stack">
            {projects.map((project, index) => (
              <motion.article
                className={`retro-project ${project.tone}`}
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className="project-index">{project.number}</div>

                <div className="project-content">
                  <Label>{project.type}</Label>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-stats">
                    {project.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-arrow">
                  <ArrowUpRight size={23} />
                </div>
              </motion.article>
            ))}
          </div>

          <div className="more-heading">
            <Label>MORE WORK</Label>
          </div>

          <div className="more-grid">
            {moreProjects.map((project) => (
              <article className="more-card" key={project.title}>
                <div className="more-number">+</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block skills-block" id="skills">
          <div className="section-topline">
            <Label>04 / TOOLKIT</Label>
            <span>TOOLS I USE</span>
          </div>

          <div className="skills-board">
            {skills.map((group, index) => (
              <div className={`skill-box skill-${index + 1}`} key={group[0]}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group[0]}</h3>
                <div className="skill-list">
                  {group.slice(1).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block experience-block" id="experience">
          <div className="section-topline">
            <Label>05 / EXPERIENCE</Label>
            <span>REAL WORK</span>
          </div>

          <article className="experience-board">
            <div className="experience-year">
              <strong>2026</strong>
              <span>03 WEEKS</span>
            </div>

            <div className="experience-main">
              <Label>DATA ANALYST INTERN · ATS, COIMBATORE</Label>
              <h2>US financial markets & data analysis</h2>
              <p>
                Gained practical exposure to industry data-analysis workflows,
                US financial markets, public-company reporting and SEC filings.
                Worked with Python and Pandas for cleaning, preprocessing,
                financial statement extraction and company-level analysis, with
                NLP and statistical analysis of corporate disclosures.
              </p>
            </div>

            <div className="experience-side">
              <span>Python</span>
              <span>Pandas</span>
              <span>NLP</span>
              <span>Statistics</span>
              <span>Financial Data</span>
            </div>
          </article>
        </section>

        <section className="section-block achievement-block" id="achievements">
          <div className="section-topline">
            <Label>06 / ACHIEVEMENTS</Label>
            <span>RECOGNITION</span>
          </div>

          <div className="achievement-grid">
            <article className="ieee-card">
              <div className="achievement-image-wrap">
                <img
                  src="/images/ieee-winning.jpg"
                  alt="IEEE Tech Sculpt Project Expo achievement"
                />
                <span className="image-label">IEEE / WINNER</span>
              </div>

              <div className="achievement-copy">
                <div className="achievement-number">01</div>
                <Label>IEEE</Label>
                <h2>Tech Sculpt Project Expo Winner</h2>
                <p>
                  Project showcase achievement at Coimbatore Institute of
                  Technology.
                </p>
                <div className="achievement-footer">
                  <strong>PROJECT EXPO</strong>
                  <span>WINNER ↗</span>
                </div>
              </div>
            </article>

            <article className="statistella-card">
              <div className="achievement-number">02</div>
              <div className="rank-big">#4</div>
              <Label>TOP 32 / STATISTELLA</Label>
              <h2>Data Analytics Competition</h2>
              <p>
                Ranked 4th among the Top 32 participants in the Statistella
                Data Analytics Competition conducted by IIT-BHU.
              </p>
              <div className="rank-bars">
                <span />
                <span />
                <span />
                <span className="active" />
                <span />
              </div>
              <div className="achievement-footer">
                <strong>IIT-BHU</strong>
                <span>DATA ANALYTICS</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section-block leadership-block">
          <div className="section-topline">
            <Label>07 / LEADERSHIP</Label>
            <span>BEYOND THE CODE</span>
          </div>

          <div className="leadership-board">
            <div className="leadership-item">
              <strong>Treasurer</strong>
              <span>Student Developer Cell · Jun 2026 — Present</span>
            </div>
            <div className="leadership-item">
              <strong>Finance & Management Team Member</strong>
              <span>GDG-CIT · Jan 2026 — Jun 2026</span>
            </div>
            <div className="leadership-item">
              <strong>Association Board Member</strong>
              <span>Department of AIML · Aug 2024 — Jun 2026</span>
            </div>
          </div>
        </section>

        <section className="contact-block" id="contact">
          <div className="contact-inner">
            <Label>08 / CONTACT</Label>
            <h2>
              Have an idea?
              <br />
              <span>Let’s build something useful.</span>
            </h2>

            <div className="contact-row">
              <a className="contact-mail" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={22} />
              </a>

              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a href={`mailto:${profile.email}`}>Email ↗</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Nithish V</span>
          <span>
            <MapPin size={14} /> Coimbatore, India
          </span>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
