import "../style/Projects.css";
import link2playImg from "/images/PORTADA.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Proyectos</h2>

      {/* PROYECTO PRINCIPAL */}
      <div className="project-featured">
        <img src={link2playImg} alt="Link2Play" />
        <div className="project-featured-info">
          <h3>Link2Play</h3>
          <p>
            Link2Play es una aplicación web que conecta gamers con gustos
            similares, permitiéndoles organizar y unirse a partidas mediante un
            sistema de eventos personalizados y filtros inteligentes.
          </p>
          <p>
            Cuenta con chat en tiempo real, notificaciones, matching de
            jugadores y juegos y perfil personalizado, conexión a steam (logros,
            biblioteca) entre otras funcionalidades.
          </p>
          <div className="tech-stack">
            <span>React</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Websocket</span>
            <span>Autenticación JWT</span>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/SGorlat/L2P-Frontend.git"
              className="btn-github"
            >
              GitHub
            </a>
            <a href="https://link2play.netlify.app/" className="btn-demo">
              Demo
            </a>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <h4>Gestor de Ingresos/Gastos</h4>
          <img
            src="/images/Python.png"
            alt="Visor gastos/ingresos"
            className="visor"
          />

          <p>CLI en Python con filtros y exportación de informe</p>
          <div className="tech-stack">
            <span>Python</span>
            <span>Pandas</span>
          </div>
          <a
            href="https://github.com/SGorlat/Gestor-de-ingresos-gastos-CLI-PYTHON-.git"
            className="btn-github py"
          >
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h4>TodoList</h4>
          <img
            src="/images/todo.png"
            alt="Visor gastos/ingresos"
            className="todoList-img"
          />

          <p>Gestor de tareas</p>
          <div className="tech-stack">
            <span>JavaScript</span>
            <span>Express.js</span>
          </div>
          <a
            href="https://github.com/SGorlat/To-Do-List.git"
            className="btn-github todo"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
