import "../style/Footer.css";

function Footer() {
  return (
    <footer className="final">
      <p>
        © {new Date().getFullYear()} · Salvador Ortega Gorlat
        {/* <span className="footer-sep"> · </span> */}
        {/* <a
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
        </a> */}
      </p>

      <a href="#top" className="footer-back-top">
        Volver arriba ↑
      </a>
    </footer>
  );
}

export default Footer;
