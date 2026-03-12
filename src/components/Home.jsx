import React from "react";

import "../style/Home.css";

function Home() {
  return (
    <div>
      <section className="content">
        <div className="content_img">
          <img src="/images/caricatura.jpg" alt="Banner con habilidades" />
        </div>
        <div className="content_info">
          <h2 className="home_title">¡Hola, soy Salva!</h2>
          <h3>- Desarrollador Web Junior en formación -</h3>
          <div className="info">
            <p className="home_paragraph">
              Estudiante de DAW, con formación previa en el Máster de Desarrollo
              Full Stack de Nuclio. Me encuentro en una etapa de aprendizaje
              constante, buscAndo reforzar bien mis fundamentos y entender la
              lógica detrás de cada solución.
            </p>
            <p>
              Soy curioso, constante y tengo muchas ganas de seguir creciendo
              para poder desarrollar proyectos que aporten valor de verdad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
