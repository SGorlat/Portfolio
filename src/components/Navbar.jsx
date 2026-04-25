// import React from "react";
// import "../style/Navbar.css";

// function Navbar() {
//   return (
//     <div className="navbar-content">
//       <h1 className="name">SGorlat</h1>
//       <section className="me-content">
//         <ul>
//           <li>
//             <a href="#about">Sobre mi</a>
//           </li>
//           <li>
//             <a href="#skills">Skills</a>
//           </li>
//           <li>
//             <a href="#certificates">Certificados</a>
//           </li>
//           <li>
//             <a href="#projects">Proyectos</a>
//           </li>
//           <li>
//             <a href="#contact">Contactame</a>
//           </li>
//         </ul>
//       </section>
//       <section className="cv-content">
//         <a
//           className="online-cv"
//           href="/CV/cv-salvador_ortega_gorlat.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Ver CV Online
//         </a>

//         <a
//           className="download-cv"
//           href="/CV/cv-salvador_ortega_gorlat.pdf"
//           download="cv-salvador_ortega_gorlat.pdf"
//         >
//           Descargar CV
//         </a>
//       </section>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-content">
      <h1 className="name">SGorlat</h1>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <section className={`me-content ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contactame
            </a>
          </li>
        </ul>
      </section>

      <section className={`cv-content ${menuOpen ? "open" : ""}`}>
        <a
          className="online-cv"
          href="/CV/cv-salvador_ortega_gorlat.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Ver CV Online
        </a>
        <a
          className="download-cv"
          href="/CV/cv-salvador_ortega_gorlat.pdf"
          download="cv-salvador_ortega_gorlat.pdf"
          onClick={handleLinkClick}
        >
          Descargar CV
        </a>
      </section>
    </div>
  );
}

export default Navbar;
