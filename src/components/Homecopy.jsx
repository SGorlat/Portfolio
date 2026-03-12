import React from "react";
import { TbPointFilled } from "react-icons/tb";
import FloatingSkills from "./FloatingSkills";
import TerminalSkills from "./TerminalSkills";
import "../style/Homecopy.css";

function Homecopy() {
  return (
    <div className="content_dev">
      <h2 className="welcome">Bienvenido a mi portfolio</h2>
      <div className="wii">
        <section className="left_home">
          <div className="terminal">
            <h2 className="hi">
              Hola,
              <br /> soy <span id="salva">Salva!</span>
            </h2>
          </div>
          <h3>Desarrollador Full Stack Junior en formación</h3>
          <p>
            HTML & CSS | JavaScript | Constante | Trabajo en equipo |
            Aprendizaje rápido | Motivado | Comprometido |
          </p>
          <FloatingSkills />
          <div className="cv">
            <button className="more_info">Más sobre mi</button>
            <a
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
            </a>
          </div>
          {/* <TerminalSkills /> */}
        </section>
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
            <div id="ide_content">
              <p style={{ color: "aquamarine" }}>
                <span className="blue">class</span> FullStackDeveloperJr{" "}
                <span className="yell">{"{"}</span>
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">constructor</span>{" "}
                <span className="pink">(</span>name, level
                <span className="pink">) {"{"}</span>
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.name = name;
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.level = level;
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.skills={" "}
                <span className="blue">[</span>
                <span className="brown">
                  "HTML5,CSS,JavaScript,React,Node.js,Express,Python,Java"
                </span>
                <span className="blue">]</span>;
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.formacion ={" "}
                <span className="blue">{"{"}</span>
              </p>
              <p style={{ color: "lightblue" }}>
                nuclio:{" "}
                <span className="brown">"Master Full Stakc Developer"</span>,
              </p>
              <p style={{ color: "lightblue" }}>
                digitech:{" "}
                <span className="brown">
                  "1º Ciclo Superior Desarrollo Aplicaciones Web (DAW) "
                </span>
                ,
              </p>
              <p style={{ color: "lightblue" }}>
                certificaciones: <span className="yell">[</span>
                <span className="brown">
                  "1º Ciclo Superior Desarrollo Aplicaciones Web (DAW) "
                </span>
                <span className="yell">]</span>,
              </p>
              <p>
                <span className="blue">{"}"};</span>
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.mainPtoject ={" "}
                <span className="brown">"Link2Play"</span>;
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.description ={" "}
                <span className="brown">
                  "Estudiante de DAW, con formación previa en el Máster de
                  Desarrollo Full Stack de Nuclio. Me encuentro en una etapa de
                  aprendizaje constante, buscando reforzar bien mis fundamentos
                  y entender la lógica detrás de cada solución."
                </span>
                ;
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.valores={" "}
                <span className="blue">[</span>
                <span className="brown">
                  "Curioso", "Constante", "Comprometido"
                </span>
                <span className="blue">]</span>;
              </p>
              <p style={{ color: "lightblue" }}>
                <span className="blue">this</span>.motivacion ={" "}
                <span className="brown">
                  "Muchas ganas de seguir creciendo para poder desarrollar
                  proyectos que aporten valor de verdad"
                </span>
                ;
              </p>
              <p>
                <span className="pink">{"}"}</span>;
              </p>
              <p className="yell2">
                showSkills<span className="pink">()</span>{" "}
                <span className="pink">{"{"}</span>
              </p>
              <p style={{ color: "lightblue" }}>
                console.<span>log</span>
                <span className="blue">(</span>
                <span className="brown">`</span>
                <span className="yell">${"{"}</span>
                <span className="blue">this</span>.name{" "}
                <span className="yell">{"}"}</span>
                <span className="brown">
                  {" "}
                  - Desarrollador Full Stack en formación activa`{" "}
                </span>
                <span className="blue">)</span>;
              </p>
              <p style={{ color: "lightblue" }}>
                console.<span>log</span>
                <span className="blue">(</span>
                <span className="brown">"Skills: "</span>
                <span>,</span>
                <span className="blue">this</span>
                <span>.skills </span>
                <span className="blue">);</span>
              </p>
              <p>
                <span className="pink"> &nbsp; {"}"}</span>;
              </p>
              <p>
                <span className="yell">{"}"}</span>;
              </p>
              <p className="blue">
                const <span>salva</span>=<span> new </span>
                <span> FullStackDeveloperJr</span>
                <span className="yell">(</span>
                <span className="brown">"Salva",37</span>
                <span className="yell">);</span>
              </p>
            </div>

            {/* <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <p>DeveloperJr.js</p>
            </div>
            <div className="img_dev">
            <img src="/images/banner3.png" alt="descripción" width={700} />
            <button>
            <span>salva</span>.showSkills()
            </button>
          </div> */}
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

export default Homecopy;

{
  /* <section className="content">
  <div className="content_img">
    <img src="/images/caricatura.jpg" alt="Banner con habilidades" />
  </div>
  <div className="content_info">
    <h2 className="home_title">¡Hola, soy Salva!</h2>
    <h3>- Desarrollador Web Junior en formación -</h3>
    <div className="info">
      <p className="home_paragraph">
        Estudiante de DAW, con formación previa en el Máster de Desarrollo Full
        Stack de Nuclio. Me encuentro en una etapa de aprendizaje constante,
        buscnado reforzar bien mis fundamentos y entender la lógica detrás de
        cada solución.
      </p>
      <p>
        Soy curioso, constante y tengo muchas ganas de seguir creciendo para
        poder desarrollar proyectos que aporten valor de verdad.
      </p>
    </div>
  </div>
</section>; */
}
