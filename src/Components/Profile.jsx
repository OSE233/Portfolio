
import { useState } from "react";

const Profile=() =>{
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section) => {
    setActiveSection(section);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "Harmona",
      description:
        "A music discovery app that recommends songs based on different emotions and moods.",
      icon: "🎧",
      tech: "React • JavaScript • Vite",
      website: "https://harmona2026.vercel.app",
    },
    {
      title: "Anime Diary",
      description: "All about animes i've watched",
      icon: "🌐",
      tech: "React • CSS • JavaScript",
      website: "https://animediary2.vercel.app/", 
    },
    {
      title: "Coming Soon",
      description:
        "Another project is currently being created. Stay tuned!",
      icon: "🚀",
      tech: "Something exciting",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Vite",
    "Git",
    "GitHub",
    "UI Design",
  ];

  return (
    <div className="portfolio">

      {/* ================= GLOBAL STYLES ================= */}

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #080b12;
          color: #ffffff;
        }

        .portfolio {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(99, 102, 241, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 10% 60%,
              rgba(168, 85, 247, 0.12),
              transparent 30%
            ),
            #080b12;
        }

        /* ================= NAVBAR ================= */

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          background: rgba(8, 11, 18, 0.8);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .logo span {
          color: #8b5cf6;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links button {
          background: none;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
          font-size: 14px;
          transition: 0.3s;
        }

        .nav-links button:hover,
        .nav-links button.active {
          color: #ffffff;
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding: 120px 8% 80px;
          max-width: 1400px;
          margin: auto;
        }

        .hero-content {
          max-width: 700px;
        }

        .hello {
          color: #8b5cf6;
          font-size: 15px;
          font-weight: bold;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: clamp(48px, 7vw, 85px);
          line-height: 1;
          margin-bottom: 25px;
        }

        .hero h1 span {
          color: #8b5cf6;
        }

        .hero-description {
          color: #a1a1aa;
          font-size: 18px;
          line-height: 1.8;
          max-width: 600px;
          margin-bottom: 35px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          padding: 14px 24px;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .primary-button {
          background: #8b5cf6;
          color: white;
          border: none;
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(139,92,246,0.3);
        }

        .secondary-button {
          background: transparent;
          color: white;
          border: 1px solid #333743;
        }

        .secondary-button:hover {
          border-color: #8b5cf6;
          transform: translateY(-3px);
        }

        /* ================= HERO CARD ================= */

        .hero-card {
          width: 330px;
          height: 330px;
          border-radius: 35px;
          background: linear-gradient(
            135deg,
            #8b5cf6,
            #312e81
          );
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.5);
          transform: rotate(4deg);
          flex-shrink: 0;
        }

        .hero-card-inner {
          width: 270px;
          height: 270px;
          border-radius: 25px;
          background: #10131d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transform: rotate(-4deg);
        }

        .hero-card-inner span {
          font-size: 70px;
          margin-bottom: 15px;
        }

        .hero-card-inner p {
          color: #a1a1aa;
        }

        /* ================= SECTIONS ================= */

        section {
          max-width: 1200px;
          margin: auto;
          padding: 110px 7%;
        }

        .section-label {
          color: #8b5cf6;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 3px;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 42px;
          margin-bottom: 25px;
        }

        .section-text {
          color: #a1a1aa;
          line-height: 1.8;
          max-width: 700px;
        }

        /* ================= ABOUT ================= */

        .about-box {
          margin-top: 40px;
          padding: 30px;
          border: 1px solid #222633;
          border-radius: 20px;
          background: rgba(255,255,255,0.02);
        }

        /* ================= SKILLS ================= */

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 35px;
        }

        .skill {
          padding: 12px 18px;
          border-radius: 50px;
          background: #151925;
          border: 1px solid #282d3d;
          color: #d4d4d8;
          transition: 0.3s;
        }

        .skill:hover {
          border-color: #8b5cf6;
          transform: translateY(-3px);
        }

        /* ================= PROJECTS ================= */

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .project-card {
          padding: 28px;
          border-radius: 20px;
          background: #11151f;
          border: 1px solid #222633;
          transition: 0.3s;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #8b5cf6;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
        }

        .project-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .project-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .project-card p {
          color: #a1a1aa;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .project-tech {
          color: #8b5cf6;
          font-size: 13px;
        }

        /* ================= CONTACT ================= */

        .contact-box {
          text-align: center;
          padding: 70px 30px;
          border-radius: 30px;
          background:
            linear-gradient(
              135deg,
              rgba(139,92,246,0.18),
              rgba(49,46,129,0.08)
            );
          border: 1px solid #292d3b;
        }

        .contact-box h2 {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .contact-box p {
          color: #a1a1aa;
          margin-bottom: 30px;
        }

        .email {
          display: inline-block;
          color: white;
          background: #8b5cf6;
          padding: 15px 25px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: bold;
        }

        /* ================= FOOTER ================= */

        footer {
          text-align: center;
          padding: 40px;
          color: #71717a;
          border-top: 1px solid #1d202a;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 800px) {

          .navbar {
            padding: 0 5%;
          }

          .nav-links {
            gap: 12px;
          }

          .nav-links button {
            font-size: 12px;
          }

          .hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-card {
            width: 250px;
            height: 250px;
          }

          .hero-card-inner {
            width: 205px;
            height: 205px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 34px;
          }
        }

        @media (max-width: 500px) {

          .nav-links button:nth-child(2) {
            display: none;
          }

          .hero {
            padding-left: 6%;
            padding-right: 6%;
          }

          section {
            padding-left: 6%;
            padding-right: 6%;
          }
        }
      `}</style>


      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          PORT<span>FOLIO.</span>
        </div>

        <div className="nav-links">

          <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <main id="home" className="hero">

        <div className="hero-content">

          <div className="hello">
            HELLO, I'M
          </div>

          <h1>
            A Creative
            <br />
            <span>Developer.</span>
          </h1>

          <p className="hero-description">
            I build modern, interactive websites and digital
            experiences with React, JavaScript and a little
            bit of creativity.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              View My Work →
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>

          </div>

        </div>


        <div className="hero-card">

          <div className="hero-card-inner">
            <span>💻</span>
            <p>Creating ideas into reality</p>
          </div>

        </div>

      </main>


      {/* ================= ABOUT ================= */}

      <section id="about">

        <div className="section-label">
          ABOUT ME
        </div>

        <h2 className="section-title">
          A little bit about me.
        </h2>

        <div className="about-box">

          <p className="section-text">
            I'm a developer who enjoys creating websites that
            don't just work, but actually feel interesting to use.
            I'm constantly learning new technologies, experimenting
            with designs and turning random ideas into real projects.
          </p>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section>

        <div className="section-label">
          MY TOOLKIT
        </div>

        <h2 className="section-title">
          Skills & Technologies
        </h2>

        <p className="section-text">
          Some of the technologies and tools I use to bring
          ideas to life.
        </p>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div
              className="skill"
              key={skill}
            >
              {skill}
            </div>
          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects">

        <div className="section-label">
          MY WORK
        </div>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.title}
            >

              <div className="project-icon">
                {project.icon}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact">

        <div className="contact-box">

          <div className="section-label">
            GET IN TOUCH
          </div>

          <h2>
            Let's build something.
          </h2>

          <p>
            Have an idea or just want to say hello?
            I'd love to hear from you.
          </p>

          <a
            className="email"
            href="mailto:semilore.olatunji123@gmail.com"
          >
            Send Me an Email
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}


    </div>
  );
}
export default Profile