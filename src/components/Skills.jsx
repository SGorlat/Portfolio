import "../style/Skills.css";

const skillsData = [
  { key: "javascript", value: "^ES2024" },
  { key: "React", value: "^19.x" },
  { key: "node", value: "^20.x" },
  { key: "express", value: "^4.x" },
  { key: "Java", value: "^21.x" },
  { key: "mongodb", value: "^7.x" },
  { key: "SQL", value: "^postgresql/workbench" },
  { key: "HTML", value: "5" },
  { key: "CSS", value: "3" },
];

const devTools = [
  { key: "git", value: "latest" },
  { key: "github", value: "latest" },
  { key: "postman", value: "latest" },
  { key: "mysql-workbench", value: "latest" },
  { key: "postgresSQL", value: "latest" },
  { key: "socket.io", value: "^4.x" },
];

const languages = ["JavaScript", "Java", "Python"];
const learning = ["Spring Boot", "PHP"];

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>Habilidades</h2>

      <div className="skills-editor">
        <div className="editor-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="filename">skills.json</span>
        </div>

        <div className="editor-body">
          <p>
            <span className="brace">{"{"}</span>
          </p>

          <p className="indent-1">
            <span className="key">"name"</span>
            <span className="punct">: </span>
            <span className="str">"salvador-ortega"</span>
            <span className="punct">,</span>
          </p>

          <p className="indent-1">
            <span className="key">"role"</span>
            <span className="punct">: </span>
            <span className="str">"Full Stack Developer"</span>
            <span className="punct">,</span>
          </p>

          <p className="indent-1">
            <span className="key">"dependencies"</span>
            <span className="punct">: </span>
            <span className="brace">{"{"}</span>
          </p>
          {skillsData.map((s, i) => (
            <p key={s.key} className="indent-2">
              <span className="key">"{s.key}"</span>
              <span className="punct">: </span>
              <span className="str">"{s.value}"</span>
              {i < skillsData.length - 1 && <span className="punct">,</span>}
            </p>
          ))}
          <p className="indent-1">
            <span className="brace">{"}"}</span>
            <span className="punct">,</span>
          </p>

          <p className="indent-1">
            <span className="key">"devDependencies"</span>
            <span className="punct">: </span>
            <span className="brace">{"{"}</span>
          </p>
          {devTools.map((s, i) => (
            <p key={s.key} className="indent-2">
              <span className="key">"{s.key}"</span>
              <span className="punct">: </span>
              <span className="str">"{s.value}"</span>
              {i < devTools.length - 1 && <span className="punct">,</span>}
            </p>
          ))}
          <p className="indent-1">
            <span className="brace">{"}"}</span>
            <span className="punct">,</span>
          </p>

          <p className="indent-1">
            <span className="key">"languages"</span>
            <span className="punct">: [</span>
            {languages.map((l, i) => (
              <span key={l}>
                <span className="str">"{l}"</span>
                {i < languages.length - 1 && <span className="punct">, </span>}
              </span>
            ))}
            <span className="punct">],</span>
          </p>

          <p className="indent-1">
            <span className="key">"learning"</span>
            <span className="punct">: [</span>
            {learning.map((l, i) => (
              <span key={l}>
                <span className="str">"{l}"</span>
                {i < learning.length - 1 && <span className="punct">, </span>}
              </span>
            ))}
            <span className="punct">]</span>
          </p>

          <p>
            <span className="brace">{"}"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
