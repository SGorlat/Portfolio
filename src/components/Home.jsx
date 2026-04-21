import React, { useState, useEffect } from "react";
import { TbPointFilled } from "react-icons/tb";
import FloatingSkills from "./FloatingSkills";
import "../style/Home.css";

const codeLines = [
  {
    colors: [
      { text: "class", cls: "blue" },
      { text: " FullStackDeveloper " },
      { text: "{", cls: "yell" },
    ],
    style: { color: "aquamarine" },
  },
  {
    colors: [
      { text: "constructor", cls: "blue" },
      { text: " " },
      { text: "(", cls: "pink" },
      { text: "name, level" },
      { text: ") {", cls: "pink" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [{ text: "this", cls: "blue" }, { text: ".name = name;" }],
    style: { color: "lightblue" },
  },
  {
    colors: [{ text: "this", cls: "blue" }, { text: ".level = level;" }],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "this", cls: "blue" },
      { text: ".skills= " },
      { text: "[", cls: "blue" },
      {
        text: '"HTML5,CSS,JavaScript,React,Node.js,Express,Python,Java"',
        cls: "brown",
      },
      { text: "]", cls: "blue" },
      { text: ";" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "this", cls: "blue" },
      { text: ".formacion = " },
      { text: "{", cls: "blue" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "nuclio: " },
      { text: '"Master Full Stack Developer"', cls: "brown" },
      { text: "," },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "digitech: " },
      {
        text: '"1º Ciclo Superior Desarrollo Aplicaciones Web (DAW)"',
        cls: "brown",
      },
      { text: "," },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "certificaciones: " },
      { text: "[", cls: "yell" },
      {
        text: '"Certificado profesional IFCD0210-Desarrollo de Tecnologías Web","PCEP1 Python" ',
        cls: "brown",
      },
      { text: "]", cls: "yell" },
      { text: "," },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [{ text: "};", cls: "blue" }],
    style: {},
  },
  {
    colors: [
      { text: "this", cls: "blue" },
      { text: ".mainProject = " },
      { text: '"Link2Play"', cls: "brown" },
      { text: ";" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "this", cls: "blue" },
      { text: ".description = " },
      {
        text: '"Estudiante de DAW, con formación previa en el Máster de Desarrollo Full Stack de Nuclio. Me encuentro en una etapa de aprendizaje constante, buscando reforzar bien mis fundamentos y entender la lógica detrás de cada solución."',
        cls: "brown",
      },
      { text: ";" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "this", cls: "blue" },
      { text: ".valores= " },
      { text: "[", cls: "blue" },
      { text: '"Curioso", "Constante", "Comprometido"', cls: "brown" },
      { text: "]", cls: "blue" },
      { text: ";" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "this", cls: "blue" },
      { text: ".motivacion = " },
      {
        text: '"Muchas ganas de seguir creciendo para poder desarrollar proyectos que aporten valor de verdad"',
        cls: "brown",
      },
      { text: ";" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [{ text: "};", cls: "pink" }],
    style: {},
  },
  {
    colors: [
      { text: "showSkills", cls: "yell2" },
      { text: "()", cls: "pink" },
      { text: " " },
      { text: "{", cls: "pink" },
    ],
    style: {},
  },
  {
    colors: [
      { text: "console." },
      { text: "log" },
      { text: "(", cls: "blue" },
      { text: "`", cls: "brown" },
      { text: "${", cls: "yell" },
      { text: "this", cls: "blue" },
      { text: ".name " },
      { text: "}", cls: "yell" },
      {
        text: " - Desarrollador Full Stack en formación activa`",
        cls: "brown",
      },
      { text: ")", cls: "blue" },
      { text: ";" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [
      { text: "console." },
      { text: "log" },
      { text: "(", cls: "blue" },
      { text: '"Skills: "', cls: "brown" },
      { text: "," },
      { text: "this", cls: "blue" },
      { text: ".skills " },
      { text: ");", cls: "blue" },
    ],
    style: { color: "lightblue" },
  },
  {
    colors: [{ text: "  };", cls: "pink" }],
    style: {},
  },
  {
    colors: [{ text: "};", cls: "yell" }],
    style: {},
  },
  {
    colors: [
      { text: "const ", cls: "blue" },
      { text: "salva" },
      { text: "= " },
      { text: "new " },
      { text: "FullStackDeveloperJr" },
      { text: "(", cls: "yell" },
      { text: '"Salva",37', cls: "brown" },
      { text: ");", cls: "yell" },
    ],
    style: { color: "#32aedf" },
  },
];

function Home() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const speed = 120 + Math.random() * 80;
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const fadeTimer = setTimeout(() => {
        setFading(true);
      }, 3000);
      return () => clearTimeout(fadeTimer);
    }
  }, [visibleLines]);

  useEffect(() => {
    if (fading) {
      const resetTimer = setTimeout(() => {
        setVisibleLines(0);
        setFading(false);
      }, 800);
      return () => clearTimeout(resetTimer);
    }
  }, [fading]);

  return (
    <div className="content_dev">
      <h2 className="welcome">Bienvenido a mi portfolio</h2>
      <div className="wii">
        {/* ===== SECCIÓN IZQUIERDA ===== */}
        <section className="left_home">
          <div className="terminal">
            <h2 className="hi">
              Hola,
              <br />
              soy <span id="salva">Salva!</span>
            </h2>
            {/* <div className="cv"> */}
            <button className="more_info">
              <a href="#about">Más sobre mi</a>
            </button>
            {/* <a
              className="online-cv"
              href="/CV/SALVADOR_ORTEGA_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver CV Online
            </a>
            <a
              className="download-cv1"
              href="/CV/SALVADOR_ORTEGA_CV.pdf"
              download="SALVADOR_ORTEGA_CV.pdf"
            >
              Descargar CV
            </a> */}
            {/* </div> */}
          </div>

          <h3>Desarrollador Full Stack en formación</h3>

          <p className="resume-me">
            HTML &amp; CSS | JavaScript | React | Constante | Aprendizaje rápido
            | Motivado | Comprometido |
          </p>

          <FloatingSkills />
        </section>

        {/* ('IDE') */}
        <section className="right_home">
          <div className="right_content">
            <div id="ide">
              <span className="icon_dev ired">
                <TbPointFilled />
              </span>
              <span className="icon_dev iyellow">
                <TbPointFilled />
              </span>
              <span className="icon_dev igreen">
                <TbPointFilled />
              </span>
              <p>DeveloperJr.js</p>
            </div>

            <div id="ide_content" className={fading ? "ide_fadeout" : ""}>
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <p key={i} className="code_line" style={line.style}>
                  {line.colors.map((part, j) => (
                    <span key={j} className={part.cls || ""}>
                      {part.text}
                    </span>
                  ))}
                  {i === visibleLines - 1 &&
                    visibleLines < codeLines.length && (
                      <span className="ide_cursor">|</span>
                    )}
                </p>
              ))}
            </div>
          </div>

          <button className="btn_show">
            <span className="btn_salva">salva</span>
            .showSkills <span className="yell">()</span>;
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;
