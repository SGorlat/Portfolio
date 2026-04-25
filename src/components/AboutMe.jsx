import "../style/AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <h2>Sobre mí</h2>

      <p className="about-intro">
        Desarrollador Full Stack con formación en el Máster de Nuclio y
        actualmente cursando DAW en Digitech y el certificado IFCD0210. Mi foco
        es construir proyectos completos que integren frontend, backend y base
        de datos con criterio.
      </p>

      <div className="jsdoc-blocks">
        <div className="jsdoc-block">
          <p className="jsdoc-line jsdoc-open">/*</p>
          <p className="jsdoc-line jsdoc-tag">
            <span className="asterisk">*</span>{" "}
            <span className="tag">@formacion</span>
          </p>

          <p className="jsdoc-line">
            <span className="asterisk">*</span> - 1º DAW — Digitech (Actualidad)
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - IFCD0210 — Desarrollo de
            Aplicaciones con Tecnologías Web (Actualidad)
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Máster Full Stack Development
            — Nuclio Digital School (2025)
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - PCEP1 Python (certificado
            Entry Level)
          </p>
          <p className="jsdoc-line jsdoc-close">*/</p>
        </div>

        <div className="jsdoc-block">
          <p className="jsdoc-line jsdoc-open">/*</p>
          <p className="jsdoc-line jsdoc-tag">
            <span className="asterisk">*</span>{" "}
            <span className="tag">@filosofia</span>
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Entender el qué, el cómo y el
            porqué antes de avanzar
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Código limpio, no me conformo
            con que "funcione y ya"
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Obstinado y metódico, no
            suelto un problema hasta resolverlo
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Constancia y esfuerzo por
            encima de la inspiración
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Cada día un poco mejor
            desarrollador que el anterior
          </p>
          <p className="jsdoc-line jsdoc-close">*/</p>
        </div>

        <div className="jsdoc-block">
          <p className="jsdoc-line jsdoc-open">/*</p>
          <p className="jsdoc-line jsdoc-tag">
            <span className="asterisk">*</span>{" "}
            <span className="tag">@objetivo</span>
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> Seguir creciendo como
            desarrollador aprendiendo algo nuevo cada día.
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> Consolidarme como Full Stack
            Developer capaz de construir producto real y soluciones que aporten
            valor.
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> Acabar formando parte de un
            equipo técnico donde dar lo mejor de mí.
          </p>
          {/* <p className="jsdoc-line">
            <span className="asterisk">*</span> y construir producto que aporte
            valor real,
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> integrándome en un equipo
            técnico sólido.
          </p> */}
          <p className="jsdoc-line jsdoc-close">*/</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
