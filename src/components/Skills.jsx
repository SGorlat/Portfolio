import "../style/Skills.css";

// Tecnologías agrupadas para mostrarlas como etiquetas.
const frontend = ["HTML", "CSS", "JavaScript", "React"];

const backendAndData = [
  "Node.js",
  "Express",
  "Java",
  "PHP",
  "Python",
  "MongoDB",
  "PostgreSQL",
];

const devTools = ["Git", "GitHub", "Postman", "MySQL Workbench", "Socket.io"];

const learning = ["Spring Boot", "Odoo"];

function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Habilidades</h2>

      {/* Primer grupo: interfaz de las aplicaciones. */}
      <div className="skills-group">
        <h3>Frontend</h3>

        <div className="skills-tags">
          {frontend.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Segundo grupo: servidor y almacenamiento de datos. */}
      <div className="skills-group">
        <h3>Backend y datos</h3>

        <div className="skills-tags">
          {backendAndData.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Tercer grupo: herramientas y librerías de apoyo. */}
      <div className="skills-group">
        <h3>Herramientas y librerías</h3>

        <div className="skills-tags">
          {devTools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>

      {/* Aprendizaje actual, separado del resto. */}
      <p className="skills-learning">
        <span className="skills-status-dot" aria-hidden="true" />
        Profundizando en {learning.join(" y ")}
      </p>
    </section>
  );
}

export default Skills;
