import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Globe2,
  GraduationCap,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";

const experience = [
  {
    years: "2022 — 2025",
    role: "Pistis Online Facilitator",
    company: "Word of Faith Christian Center · Toronto",
    description:
      "Administered 44 courses and 320+ lessons in Docebo, coordinated launches, supported 100+ learners, and kept the entire learning experience running smoothly.",
  },
  {
    years: "2020 — 2022",
    role: "Pistis Online Facilitator",
    company: "Keith Butler Ministries · Krakow",
    description:
      "Managed enrollment, course setup, progress tracking, technical support, academic records, and curriculum updates for an online education program.",
  },
  {
    years: "2017 — 2022",
    role: "Social Media Manager",
    company: "Keith Butler Ministries · Krakow",
    description:
      "Led multilingual content and community engagement, increased engagement by 25%, and translated more than 200 documents.",
  },
  {
    years: "2014 — 2022",
    role: "Administrative Coordinator",
    company: "Slavic Mission in Europe · International",
    description:
      "Coordinated conferences across five countries, partner communication, travel logistics, and live interpretation in multilingual settings.",
  },
];

const capabilities = [
  {
    icon: Layers3,
    number: "01",
    title: "Learning platforms",
    text: "Docebo administration, course setup, quality assurance, reporting, and Zoom integration.",
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Program operations",
    text: "The full learner journey, from registration and onboarding through progress and completion.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Human support",
    text: "Clear documentation, thoughtful troubleshooting, and communication that makes technology feel simple.",
  },
];

const languages = [
  ["Ukrainian", "Native"],
  ["Russian", "Native"],
  ["English", "Professional"],
  ["Polish", "Working"],
];

const trainingCards = [
  {
    category: "Learning Technology",
    title: "Confident Starts in Your LMS",
    description:
      "A practical onboarding experience that helps learners navigate, engage, and complete their first steps with confidence.",
    format: "Self-paced · 45 min",
    accent: "coral",
  },
  {
    category: "Program Operations",
    title: "From Enrollment to Graduation",
    description:
      "A clear framework for managing the learner lifecycle while keeping records accurate and communication human.",
    format: "Workshop · 90 min",
    accent: "blue",
  },
  {
    category: "Communication",
    title: "Support That Builds Trust",
    description:
      "Simple techniques for writing instructions and solving learner issues without adding friction or confusion.",
    format: "Live session · 60 min",
    accent: "plum",
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Veronika Petrukhina home">
        <span className="brand-mark">VP</span>
        <span className="brand-name">
          Veronika
          <br />
          Petrukhina
        </span>
      </Link>

      <button
        className="menu-button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "main-nav open" : "main-nav"}>
        <NavLink to="/" end>
          About me
        </NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <a className="nav-contact" href="mailto:vrk.petrukhina@gmail.com">
          Let’s talk <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow light">Let’s make learning work</p>
        <h2>Have a program in mind?</h2>
      </div>
      <a className="footer-email" href="mailto:vrk.petrukhina@gmail.com">
        vrk.petrukhina@gmail.com <ArrowUpRight />
      </a>
      <div className="footer-bottom">
        <span>Winnipeg, Manitoba · Available worldwide</span>
        <a
          href="https://www.linkedin.com/in/veronika-petrukhina"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <span>© {new Date().getFullYear()} Veronika Petrukhina</span>
      </div>
    </footer>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-visual reveal delay-1">
          <img
            className="portrait-photo"
            src="/images/veronika-portrait.webp"
            alt="Portrait of Veronika Petrukhina"
            width="900"
            height="900"
          />
          <div className="floating-note">
            <Sparkles size={18} />
            <span>
              Turning complex
              <br />
              systems into clear journeys
            </span>
          </div>
        </div>
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span />
            Learning technology & program coordination
          </p>
          <h1>
            Learning should feel
            <br />
            <em>effortless.</em>
          </h1>
          <p className="hero-intro">
            I create the systems, support, and clarity that help learners focus
            on what matters: learning and growing.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/portfolio">
              Explore my work <ArrowDownRight size={18} />
            </Link>
            <a className="text-link" href="#story">
              Get to know me <ChevronRight size={17} />
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <Stat value="5+" label="years in online learning" />
          <Stat value="44" label="courses administered" />
          <Stat value="320+" label="lessons supported" />
          <Stat value="4" label="languages spoken" />
        </div>
      </section>

      <section className="story section-shell" id="story">
        <div className="section-index">01 / About</div>
        <div className="story-content">
          <p className="eyebrow">A little about me</p>
          <h2>
            Technology is at its best
            <br />
            when it feels <em>human.</em>
          </h2>
          <div className="story-columns">
            <p className="lead">
              I’m Veronika, a multilingual Learning Technology and Program
              Coordination professional based in Winnipeg.
            </p>
            <div>
              <p>
                For more than five years, I’ve worked behind the scenes of
                online education: building courses, supporting learners,
                coordinating instructors, and making sure every moving part is
                ready when it needs to be.
              </p>
              <p>
                I care about the details because details shape how people
                experience learning. My approach combines operational calm,
                technical curiosity, and genuine care for the person on the
                other side of the screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-shell">
          <div className="section-index light">02 / What I do</div>
          <div className="section-heading light">
            <p className="eyebrow light">How I help</p>
            <h2>Structure, support, and momentum.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, text }) => (
              <article className="capability-card" key={title}>
                <div className="capability-top">
                  <Icon />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight className="card-arrow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-shell">
        <div className="section-index">03 / Experience</div>
        <div className="experience-heading">
          <div>
            <p className="eyebrow">The journey so far</p>
            <h2>Experience built across platforms, programs, and borders.</h2>
          </div>
          <p>
            From LMS administration to international events, my work has
            always connected people, information, and action.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role + item.company}>
              <time>{item.years}</time>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="languages section-shell">
        <div className="language-intro">
          <Languages />
          <p className="eyebrow">Communication without borders</p>
          <h2>Four languages. One goal: make people feel understood.</h2>
        </div>
        <div className="language-list">
          {languages.map(([language, level]) => (
            <div key={language}>
              <span>{language}</span>
              <small>{level}</small>
              <Check size={18} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function TrainingCard({ item, index }) {
  return (
    <article className={`training-card ${item.accent}`}>
      <div className="training-art">
        <span className="training-number">0{index + 1}</span>
        <div className="orb" />
        <div className="shape shape-one" />
        <div className="shape shape-two" />
        <button aria-label={`Preview ${item.title}`}>
          <Play fill="currentColor" size={18} />
        </button>
      </div>
      <div className="training-content">
        <p className="category">{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="training-meta">
          <span>{item.format}</span>
          <span className="coming-soon">Coming soon</span>
        </div>
      </div>
    </article>
  );
}

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...new Set(trainingCards.map((card) => card.category))];
  const visible =
    filter === "All"
      ? trainingCards
      : trainingCards.filter((card) => card.category === filter);

  return (
    <main>
      <section className="portfolio-hero section-shell">
        <div className="section-index">01 / Portfolio</div>
        <div className="portfolio-title reveal">
          <p className="eyebrow">Learning, thoughtfully designed</p>
          <h1>
            Training that turns
            <br />
            knowledge into <em>action.</em>
          </h1>
          <p>
            A growing collection of practical learning experiences designed to
            build confidence, clarity, and real-world capability.
          </p>
        </div>
        <div className="portfolio-stamp">
          <BookOpen />
          <span>New learning library</span>
        </div>
      </section>

      <section className="portfolio-library section-shell">
        <div className="filter-bar">
          <span>Browse by topic</span>
          <div>
            {filters.map((item) => (
              <button
                className={filter === item ? "active" : ""}
                key={item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="training-grid">
          {visible.map((item, index) => (
            <TrainingCard item={item} index={index} key={item.title} />
          ))}
        </div>
      </section>

      <section className="portfolio-note section-shell">
        <div className="note-icon">
          <Sparkles />
        </div>
        <div>
          <p className="eyebrow">This space is growing</p>
          <h2>More training experiences are on the way.</h2>
          <p>
            I’m currently shaping new workshops and self-paced resources. The
            final library will include course previews, outcomes, formats, and
            downloadable materials.
          </p>
        </div>
        <a className="button dark" href="mailto:vrk.petrukhina@gmail.com">
          Ask about a training <Mail size={17} />
        </a>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </>
  );
}
