import "../style/ContactEmail.css";

function ContactEmail() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="titulo-contacto"
    >
      <h2 id="titulo-contacto">¿Hablamos?</h2>

      <p className="contact-description">
        Busco un equipo donde aprender, aportar y seguir creciendo como
        desarrollador.
      </p>

      <div className="contact-links">
        <a href="mailto:sgorlat@gmail.com" className="contact-email-button">
          Escríbeme
        </a>

        <a
          href="https://www.linkedin.com/in/sgorlat/"
          className="contact-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/SGorlat"
          className="contact-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default ContactEmail;
