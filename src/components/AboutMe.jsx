import "../style/AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <h2>Sobre mí</h2>

      <p className="about-intro">
        Desarrollador Full Stack con formación en el Máster de Nuclio,
        certificado profesional IFCD0210 en Desarrollo de Aplicaciones con
        Tecnologías Web y actualmente cursando 2º DAW en Digitech. Cuento con un
        background de 13 años en el sector asegurador. Estoy enfocado en
        construir proyectos completos que integren frontend, backend y base de
        datos con código limpio, arquitectura coherente y que aporten valor.
      </p>

      <div className="jsdoc-blocks">
        <div className="jsdoc-block">
          <p className="jsdoc-line jsdoc-open">/*</p>
          <p className="jsdoc-line jsdoc-tag">
            <span className="asterisk">*</span>{" "}
            <span className="tag">@formacion</span>
          </p>

          <p className="jsdoc-line">
            <span className="asterisk">*</span> - 2º DAW — Digitech (Actualidad)
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - IFCD0210 — Desarrollo de
            Aplicaciones con Tecnologías Web (2026)
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Máster Full Stack Development
            — Nuclio Digital School (2025)
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Certificado PCEP — Certified
            Entry-Level Python Programmer
          </p>
          <p className="jsdoc-line jsdoc-close">*/</p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Licenciatura en ADE
            (Administración y Dirección de Empresas)
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
            porqué antes de avanzar.
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Código limpio, no me conformo
            con que "funcione y ya".
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Obstinado y metódico, no
            suelto un problema hasta resolverlo.
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Constancia y esfuerzo por
            encima de la inspiración.
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> - Cada día un poco mejor
            desarrollador que el anterior.
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
            <span className="asterisk">*</span> Integrarme en un equipo técnico
            donde aportar desde el primer día y convertirme en un desarrollador
            sólido, capaz de resolver problemas reales con autonomía.
          </p>
          <p className="jsdoc-line">
            <span className="asterisk">*</span> Construir producto completo con
            visión de negocio, aprovechando mis mas de 11 años de experiencia en
            el sector para entender el porqué detrás del código.
          </p>
          {/* <p className="jsdoc-line">
            <span className="asterisk">*</span> Integrarme en un equipo técnico
            donde aportar desde el primer día y consolidarme como desarrollador
            Full Stack capaz de construir producto real.
          </p> */}

          <p className="jsdoc-line jsdoc-close">*/</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
