import React from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPostman,
  SiMysql,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import "../style/Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>Habilidades</h2>
      <section className="front">
        <h3>Frontend</h3>
        <div>
          <ul>
            <li>
              <FaHtml5 id="ht5" />
              HTML
            </li>
            <li>
              <FaCss3Alt id="css3" />
              CSS
            </li>
            <li>
              <SiJavascript id="js" />
              JavaScript
            </li>
            <li>
              <FaReact id="react" />
              React
            </li>
          </ul>
        </div>
      </section>
      <section className="back">
        <h3>Backend</h3>
        <div>
          <ul>
            <li>
              <FaNode id="node" />
              Node.js
            </li>
            <li>
              <SiExpress id="express" />
              <SiJavascript id="js2" />
              Express.js
            </li>
          </ul>
        </div>
      </section>
      <section className="bbdd">
        <h3>Base Datos</h3>
        <div>
          <ul>
            <li>
              <SiMongodb id="mongo" />
              MongoDB
            </li>
          </ul>
        </div>
      </section>
      <section className="tools">
        <h3>Herramientas</h3>
        <div>
          <ul>
            <li>
              <FaGitAlt id="git" />
              Git
            </li>
            <li>
              <FaGithub id="ghub" />
              GitHub
            </li>
            <li>
              <SiPostman id="postman" />
              Postman
            </li>
            <li>MySQL Workbench</li>
          </ul>
        </div>
      </section>
      <section className="others">
        <h3>Otros Lenguajes</h3>
        <div>
          <ul>
            <li>
              <FaPython id="python" />
              Python
            </li>
            <li className="java">
              <FaJava id="java" />
              Java
            </li>
          </ul>
        </div>
      </section>
      <section className="learning">
        <h3>En aprendizaje</h3>
        <div>
          <ul>
            <li>
              <SiPhp id="php" />
              PHP
            </li>
            <li>
              <SiMysql id="sql" />
              SQL
            </li>
            <li>
              <SiTypescript id="ts" />
              TypeScript
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Skills;

// <div>
//         <ul>
//           <li>
//             <FaHtml5 />
//             HTML
//           </li>
//           <li>
//             <FaCss3 />
//             CSS
//           </li>
//           <li>
//             <RiJavascriptLine />
//             JavaScript
//           </li>
//           <li>
//             <FaPython />
//             Python
//           </li>
//           <li>
//             <FaJava />
//             Java
//           </li>
//           <li>
//             <FaReact />
//             React
//           </li>
//           <li>
//             <SiExpress />
//             Express.js (mongoose)
//           </li>
//           <li>
//             <DiMongodb />
//             MONGO DB
//           </li>
//         </ul>
//       </div>
