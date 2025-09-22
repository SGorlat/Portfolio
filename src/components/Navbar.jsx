import React from "react";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-content">
      <section className="me-content">
        <ul>
          <li>
            <a href="#Sobre mi">Sobre mi</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Certificados">Certificados</a>
          </li>
          <li>
            <a href="#Proyestos">Proyectos</a>
          </li>
          <li>
            <a href="#Contactame">Contactame</a>
          </li>
        </ul>
      </section>
      <section className="cv-content">
        <a
          className="online-cv"
          href="/CV/Salvador_Ortega_CV_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver CV Online
        </a>

        <a
          className="download-cv"
          href="/CV/Salvador_Ortega_CV_2025.pdf"
          download="Salvador_Ortega_CV_2025.pdf"
        >
          Descargar CV
        </a>
      </section>
    </div>
  );
}

export default Navbar;
