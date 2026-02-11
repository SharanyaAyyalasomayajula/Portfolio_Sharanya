import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-dark text-light">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-sm py-3">
  <div className="container d-flex justify-content-between align-items-center">
    
    <a className="navbar-brand fw-bold text-info fs-4" href="#">
      <span className="text-light">Sharanya's</span>
      <span className="text-light"> Portfolio</span>
    </a>

    <div className="d-flex gap-4">
      <a className="nav-link text-light" href="#about">About</a>
      <a className="nav-link text-light" href="#experience">Experience</a>

      <a className="nav-link text-light" href="#projects">Projects</a>
      <a className="nav-link text-light" href="#contact">Contact</a>
    </div>

  </div>
</nav>


      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-center">
  <div className="container">
    <h1 className={`fw-bold display-5 text-white ${loaded ? "fade-in" : ""}`}>
      Hi, I'm Sharanya
    </h1>
    <p className="lead text-info fw-semibold">
      Frontend Developer | React Developer
    </p>

    <div className="mt-3">
    <span className="badge bg-info text-dark m-1">React.js</span>
    <span className="badge bg-info text-dark m-1">JavaScript</span>
    <span className="badge bg-info text-dark m-1">TypeScript</span>
    <span className="badge bg-info text-dark m-1">Node.js</span>
    <span className="badge bg-info text-dark m-1">Express.js</span>
    <span className="badge bg-info text-dark m-1">Python</span>
    <span className="badge bg-info text-dark m-1">SQL</span>
    <span className="badge bg-info text-dark m-1">. Net Core</span>
    <span className="badge bg-info text-dark m-1">REST APIs</span>
    </div>


    <a href="/resume.pdf" download className="btn btn-outline-info mt-4">
      Download Resume
    </a>
  </div>
</section>


      {/* About */}
      <section id="about" className="py-5 bg-dark">
  <div className="container">
    <h2 className="text-info mb-4">About Me</h2>

    <p>
      Frontend Developer with 2+ years of experience building responsive,
      scalable web applications using <strong>React.js, JavaScript, TypeScript, Node JS, Express JS, .NET CORE, SQL</strong>,
      and REST APIs. Experienced in developing reusable UI components,
      integrating backend services, managing application state, and ensuring
      cross-browser compatibility and performance optimization.
    </p>

    <hr className="my-4 text-secondary" />

    <h5 className="text-info">Education</h5>
    <p>
      B.Tech – Information Technology <br />
      MLR Institute of Technology (2019 – 2023)
    </p>
  </div>
</section>

<section id="experience" className="py-5 bg-black">
  <div className="container">
    <h2 className="text-info mb-4">Experience</h2>

    <div className="card bg-dark text-light shadow p-4">
      <h5 className="fw-bold">Software Engineer – Cybage</h5>
      <p className="text-info mb-2">Nov 2023 – Present</p>

      <ul>
        <li>
          Developed and maintained responsive web applications for enterprise
          clients including ZF.
        </li>
        <li>
          Built scalable UI components and integrated backend REST APIs for
          fleet and remote update systems.
        </li>
        <li>
          Collaborated with QA and Business Analysts for requirement analysis,
          testing, and documentation.
        </li>
        <li>
          Contributed to bug fixes, performance improvements, and stable
          production deployments.
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* Projects */}
      {/* Projects */}
<section id="projects" className="py-5 bg-black">
  <div className="container">
    <h2 className="text-info text-center mb-5">Projects</h2>
    <h4 className="text-info mb-4">Professional Projects</h4>

    <div className="row">

      {/* Project 1 */}
      <div className="col-md-6 mb-4">
        <div className="card bg-dark text-light shadow project-card">
          <div className="card-body">
            <h5 className="card-title">TX-KEPLER | CLIENT - ZF</h5>

            <p className="text-info small">
              Tech Stack: Typescript, Require js, Node.js, Express.js, SQL, REST APIs
            </p>

            <ul className="mt-3">
              <li>Developed and maintained web screens enabling seamless access to fleet,driver and operational data</li>
              <li>Integrated UI with backend APIs to fetch device logs, telemetry data, and configuration statuses</li>
              <li>Created detailed documentation for workflows, settings, permissions, and change history</li>
            </ul>
          </div>
        </div>
      </div>

       <div className="col-md-6 mb-4">
        <div className="card bg-dark text-light shadow project-card">
          <div className="card-body">
            <h5 className="card-title">Remote Update Tool | CLIENT - ZF</h5>

            <p className="text-info small">
              Tech Stack: React.js, .NET Core Web API, SQL Server, REST APIs
            </p>

            <ul className="mt-3">
               <li>Developed React dashboards for scheduling updates,monitoring progress, and generating status reports</li>
              <li>Designed REST APIs in .NET Core for workflow orchestration, error-handling, logging</li>
              <li>Resolved application issues and collaborated with QA to ensure reliable deployments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <h4 className="text-info mb-4">Personal Projects</h4>

      <div className="col-md-6 mb-4">
        <div className="card bg-dark text-light shadow project-card">
          <div className="card-body">
            
            <h5 className="card-title">Spotify Clone</h5>

            <p className="text-info small">
              Tech Stack: React.js, Node.js, Express.js, MongoDB, REST APIs
            </p>

            <ul className="mt-3">
               <li>Developed responsive UI with playlist and search functionality.</li>
              <li>Integrated external APIs for music metadata and playback data.</li>
              <li>Built RESTful APIs for managing user playlists and profiles.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card bg-dark text-light shadow project-card">
          <div className="card-body">
            <h5 className="card-title">USER MANAGEMENT SYSTEM</h5>

            <p className="text-info small">
              Tech Stack: React.js, Node.js, Express.js, SQL, REST APIs
            </p>

            <ul className="mt-3">
              <li>Developed a full-stack CRUD application for managing users and roles.</li>
              <li>Implemented authentication and role-based access control.</li>
              <li>Integrated REST APIs and database operations for user data management.</li>
            </ul>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-5 bg-dark text-center">
  <div className="container">
    <h2 className="text-info mb-4">Contact</h2>

    <div className="contact-item mb-3">
      <i className="bi bi-envelope-fill text-info me-2"></i>
      <a href="mailto:ayysolasharanya26@gmail.com" className="contact-link">
        ayysolasharanya26@gmail.com
      </a>
    </div>

    <div className="contact-item mb-3">
      <i className="bi bi-linkedin text-info me-2"></i>
      <a
        href="https://www.linkedin.com/in/sharanya-a-a0bba51ba/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        linkedin.com/in/sharanya-a-a0bba51ba
      </a>
    </div>

    <div className="contact-item mb-3">
      <i className="bi bi-github text-info me-2"></i>
      <a
        href="https://github.com/Sharanya261"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        github.com/Sharanya261
      </a>
    </div>

    <div className="contact-item">
      <i className="bi bi-telephone-fill text-info me-2"></i>
      <span className="contact-link">
        +91-9160764296
      </span>
    </div>
  </div>
</section>




      <footer className="bg-black text-center py-3 text-secondary">
        © 2026 Sharanya
      </footer>

    </div>
  );
}

export default App;
