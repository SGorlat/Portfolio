import { useState, useEffect } from "react";
import "../style/Projects.css";

const l2pImages = [
  { src: "/images/PORTADA.png", alt: "Link2Play - Home" },
  { src: "/images/lobby.png", alt: "Link2Play - Lobby" },
  { src: "/images/eventos.png", alt: "Link2Play - Eventos" },
  { src: "/images/perfil.png", alt: "Link2Play - Perfil" },
];

const stack = [
  { layer: "Frontend", tech: "React, CSS" },
  { layer: "Backend", tech: "Node.js, Express" },
  { layer: "Base de datos", tech: "MongoDB" },
  { layer: "Chat en tiempo real", tech: "Socket.io" },
  { layer: "Auth", tech: "JWT & OAuth 2.0 Steam" },
  { layer: "APIs", tech: "RAWG API" },
];

function Projects() {
  const [current, setCurrent] = useState(0);

  // rotación automática cada 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % l2pImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="projects" id="projects">
      <h2>Proyectos</h2>

      <article className="project-featured">
        {/* IZQUIERDA: carrusel */}
        <div className="carousel">
          <div className="carousel-track">
            {l2pImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`carousel-img ${i === current ? "active" : ""}`}
              />
            ))}
          </div>

          <div className="carousel-dots">
            {l2pImages.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DERECHA: info */}
        <div className="project-info">
          <h3>Link2Play</h3>
          <p className="tagline">Red social de eventos gamer</p>

          <p>
            Aplicación web que conecta gamers con gustos similares,
            permitiéndoles organizar y unirse a partidas mediante eventos
            personalizados y filtros inteligentes.
          </p>
          <p>
            Incluye chat en tiempo real, matching de jugadores, notificaciones y
            conexión con Steam para importar biblioteca y logros.
          </p>

          <table className="stack-table">
            <tbody>
              {stack.map((row) => (
                <tr key={row.layer}>
                  <td className="stack-layer">{row.layer}</td>
                  <td className="stack-tech">{row.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="project-links">
            <a
              href="https://github.com/SGorlat/L2P-Frontend.git"
              className="btn-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://link2play.netlify.app/"
              className="btn-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo en vivo
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Projects;
