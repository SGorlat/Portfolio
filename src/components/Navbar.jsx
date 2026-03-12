import React from "react";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-content">
      <h1 className="name">SGorlat</h1>
      <section className="me-content">
        <ul>
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certificates">Certificados</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contactame</a>
          </li>
        </ul>
      </section>
      <section className="cv-content">
        <a
          className="online-cv"
          href="/CV/SALVADOR_ORTEGA_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver CV Online
        </a>

        <a
          className="download-cv"
          href="/CV/SALVADOR_ORTEGA_CV.pdf"
          download="SALVADOR_ORTEGA_CV.pdf"
        >
          Descargar CV
        </a>
      </section>
    </div>
  );
}

export default Navbar;
