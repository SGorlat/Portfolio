import { useState } from "react";
import "../style/Projects.css";

// Añadimos label: será el texto de los botones de las capturas.
const l2pImages = [
  {
    src: "/Portfolio/images/PORTADA.png",
    alt: "Link2Play - Home",
    label: "Inicio",
  },
  {
    src: "/Portfolio/images/lobby.png",
    alt: "Link2Play - Lobby",
    label: "Lobby",
  },
  {
    src: "/Portfolio/images/eventos.png",
    alt: "Link2Play - Eventos",
    label: "Eventos",
  },
  {
    src: "/Portfolio/images/perfil.png",
    alt: "Link2Play - Perfil",
    label: "Perfil",
  },
];

const goatImages = [
  {
    src: "/Portfolio/images/HOME.png",
    alt: "GOAT - Home",
    label: "Inicio",
  },
  {
    src: "/Portfolio/images/INICIO.png",
    alt: "GOAT - Jugador",
    label: "Jugador",
  },
  {
    src: "/Portfolio/images/TIENDA.png",
    alt: "GOAT - Tienda",
    label: "Tienda",
  },
];

// Conservamos tus tablas de tecnologías.
const stack = [
  { layer: "Frontend", tech: "React, CSS" },
  { layer: "Backend", tech: "Node.js, Express" },
  { layer: "Base de datos", tech: "MongoDB" },
  { layer: "Chat en tiempo real", tech: "Socket.io" },
  { layer: "Auth", tech: "JWT y conexión con Steam" },
  { layer: "APIs", tech: "RAWG API" },
];

const stack2 = [
  { layer: "Frontend", tech: "React, CSS" },
  { layer: "Backend", tech: "Spring Boot (Java)" },
  { layer: "Base de datos", tech: "PostgreSQL" },
];

function Projects() {
  const [current, setCurrent] = useState(0);
  const [currentGoat, setCurrentGoat] = useState(0);

  // Sin useEffect: ahora las capturas cambian al pulsar sus botones.

  return (
    <div className="projects" id="projects">
      <div className="projects-heading">
        <div>
          <h2>Proyectos destacados</h2>
          <p>Ideas convertidas en aplicaciones reales.</p>
        </div>

        <span className="projects-note">
          Frontend + backend + base de datos
        </span>
      </div>

      {/* NUEVO: agrupa las dos tarjetas para distribuirlas con CSS. */}
      <div className="projects-grid">
        <article className="project-card">
          {/* NUEVO: cabecera con aspecto de ventana. */}
          <div className="project-window-bar">
            <span className="project-window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Link2Play</span>
          </div>

          {/* Conservamos tu carrusel y su estado current. */}
          <div className="carousel">
            <div className="carousel-track">
              {l2pImages.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={`carousel-img ${i === current ? "active" : ""}`}
                  aria-hidden={i !== current}
                  loading="lazy"
                />
              ))}
            </div>

            {/* CAMBIO: botones con texto en lugar de puntos. */}
            <div
              className="carousel-tabs"
              role="group"
              aria-label="Capturas de Link2Play"
            >
              {l2pImages.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  className={i === current ? "active" : ""}
                  onClick={() => setCurrent(i)}
                  aria-pressed={i === current}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          <div className="project-info">
            <p className="project-category">COMUNIDAD GAMER</p>
            <h3>Link2Play</h3>

            <p className="project-description">
              Aplicación web que conecta gamers con gustos similares,
              permitiéndoles organizar y unirse a partidas mediante eventos
              personalizados y filtros inteligentes.
            </p>

            {/* CAMBIO: funcionalidades en una lista fácil de leer. */}
            <ul className="project-features">
              <li>Eventos y matching de jugadores.</li>
              <li>Chat en tiempo real con Socket.io.</li>
              <li>
                Notificaciones y conexión con Steam para importar biblioteca y
                logros.
              </li>
            </ul>

            {/* NUEVO: tecnologías principales siempre visibles. */}
            <div className="project-technologies">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>

            {/* NUEVO: tu tabla dentro de un desplegable nativo. */}
            <details className="project-details">
              <summary>Detalles técnicos</summary>

              <table className="stack-table">
                <tbody>
                  {stack.map((row) => (
                    <tr key={row.layer}>
                      <th scope="row" className="stack-layer">
                        {row.layer}
                      </th>
                      <td className="stack-tech">{row.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>

            <div className="project-links">
              <a
                href="https://link2play.netlify.app/"
                className="btn-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver demo
              </a>
              <a
                href="https://github.com/SGorlat/L2P-Frontend.git"
                className="btn-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-window-bar">
            <span className="project-window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>GOAT — Football Career</span>
          </div>

          {/* Conservamos el segundo carrusel y currentGoat. */}
          <div className="carousel">
            <div className="carousel-track">
              {goatImages.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={`carousel-img ${
                    i === currentGoat ? "active" : ""
                  }`}
                  aria-hidden={i !== currentGoat}
                  loading="lazy"
                />
              ))}
            </div>

            <div
              className="carousel-tabs"
              role="group"
              aria-label="Capturas de GOAT"
            >
              {goatImages.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  className={i === currentGoat ? "active" : ""}
                  onClick={() => setCurrentGoat(i)}
                  aria-pressed={i === currentGoat}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          <div className="project-info">
            <p className="project-category">SIMULADOR DEPORTIVO</p>
            <h3>GOAT — Football Career</h3>

            <p className="project-description">
              ¿Siempre has querido saber qué te habría deparado una carrera como
              futbolista? Crea tu jugador, toma decisiones y mejora hasta llegar
              a los mejores equipos del mundo.
            </p>

            <ul className="project-features">
              <li>
                Progresión por stats y eventos narrativos con consecuencias en
                cadena.
              </li>
              <li>
                Mercado de fichajes dinámico y copa nacional con minijuegos.
              </li>
              <li>Economía realista con impuestos, agente y estilo de vida.</li>
            </ul>

            <div className="project-technologies">
              <span>React</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
            </div>

            <details className="project-details">
              <summary>Detalles técnicos</summary>

              <table className="stack-table">
                <tbody>
                  {stack2.map((row) => (
                    <tr key={row.layer}>
                      <th scope="row" className="stack-layer">
                        {row.layer}
                      </th>
                      <td className="stack-tech">{row.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>

            <div className="project-links">
              <a
                href="https://thegoatfootball.netlify.app/"
                className="btn-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver demo
              </a>
              <a
                href="https://github.com/SGorlat/Goat-Simulator---Frontend"
                className="btn-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Projects;
