import "../style/AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <h2 id="about-title">
        Tecnología con
        <br />
        visión de negocio.
      </h2>

      <div className="about-description">
        <p>
          Mi trayectoria en el sector asegurador me enseñó a entender
          necesidades y resolver problemas. Ahora aplico esa experiencia al
          desarrollo de productos digitales.
        </p>

        <p>
          Me gusta entender el qué, el cómo y el porqué. Construyo proyectos
          completos, cuido el código y sigo aprendiendo con cada reto.
        </p>
      </div>

      {/* Formación siempre visible, sin desplegable. */}
      <div className="about-formation">
        <h3>Mi formación</h3>

        <ul>
          <li>2º DAW · Digitech (actualidad)</li>

          <li>Máster Full Stack · Nuclio Digital School (2025)</li>

          <li>
            IFCD0210 · Desarrollo de Aplicaciones con Tecnologías Web (2026)
          </li>

          <li>Certificado PCEP · Python</li>

          <li>Licenciatura en ADE</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
