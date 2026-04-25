import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <div className="final">
      <p>
        © 2026 Salvador Ortega Gorlat · Granada
        <span className="footer-sep"> · </span>
        <a
          href="https://www.linkedin.com/in/sgorlat/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de LinkedIn de Salvador Ortega Gorlat"
        >
          LinkedIn
        </a>
        <span className="footer-sep"> · </span>
        <a
          href="https://github.com/SGorlat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de GitHub de Salvador Ortega Gorlat"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default Footer;
