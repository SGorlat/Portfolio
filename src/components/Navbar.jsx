import { useState } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <h1 className="name">SGorlat</h1>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
          }
          aria-expanded={menuOpen}
          aria-controls="navbar-links navbar-cv"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="navbar-links"
          className={`me-content ${menuOpen ? "open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div id="navbar-cv" className={`cv-content ${menuOpen ? "open" : ""}`}>
          <a
            className="online-cv"
            href={`${import.meta.env.BASE_URL}CV/Salvador_Ortega_Gorlat.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            Ver CV Online
          </a>

          <a
            className="download-cv"
            href={`${import.meta.env.BASE_URL}CV/Salvador_Ortega_Gorlat.pdf`}
            download="Salvador_Ortega_Gorlat.pdf"
            onClick={handleLinkClick}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
