import React from "react";
import "../style/AboutMe.css";

function AboutMe() {
  return (
    <section id="about">
      <div className="me">
        <h2>Sobre mí</h2>
        <p>
          Desarrollador Web en formación activa, centrado en construir una base
          sólida en desarrollo Full Stack. Actualmente curso DAW a la vez que
          amplio mis conocimientos con la certificación de profesionalidad
          IFCD0210 en Desarrollo Web, tambien he obtenido recientemente la
          certificación en Python (PCEP1).
        </p>
      </div>
      <div className="info-container">
        <div className="background">
          <h3>Mi formación</h3>
          <ul>
            <li>Máster Full Stack Development (Nuclio)</li>
            <li>1º DAW (Digitech)</li>
            <li>IFCD0210 - Desarrollo Web</li>
            <li>Certificado PCEP1 de Python</li>
          </ul>
        </div>
        <div className="description_list">
          <h3>Lo que me define como desarrollador</h3>
          <ul>
            <li> Entender a fondo antes que avanzar rápido </li>
            <li> Valoro el código limpio y la arquitectura bien pensada</li>
            <li> No me conformo con soluciones superficiales</li>
            <li> Aprendizaje constante</li>
          </ul>
        </div>
        <div className="l2p">
          <h3>Mi proyecto principal</h3>
          <h4>Link2Play - Red social de eventos gamer</h4>
          <ul>
            <li>Autenticación JWT</li>
            <li>Chat en tiempo real con websockets</li>
            <li>Creación de eventos y gestión de perfiles</li>
            <li>Sistema de recomendación de eventos/usuarios</li>
          </ul>
        </div>
        <div className="target">
          <h3>Mi objetivo</h3>
          <p>
            Seguir creciendo como desarrollador Full Stack, consolidando una
            base sólida para resolver problemas reales mediante soluciones
            útiles y con valor. Me definen la constancia, el aprendizaje
            continuo y las ganas de seguir evolucionando dentro del sector
            tecnológico
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

{
  /* <section className="info-container">
      <div>
        <h2>Sobre mí</h2>
        <p>
          Desarrollador web en formación activa, centrado en construir
          una base sólida en desarrollo Full Stack. Actualmente curso DAW a la
          vez que amplio mis conocimientos con la certificacion de
          profesionalidad IFCD0210 en Desarrollo Web, tambien he obtenido
          recientemente la certificación en Python (PCEP1).
        </p>
      </div>
      <div className="description">
        <div>
          <h3>Mi formación</h3>
          <ul>
            <li>Máster Full Stack (Nuclio)</li>
            <li>1º DAW (Digitech)</li>
            <li>IFCD0210 - Desarrollo Web</li>
            <li>Certificado PCEP1 de Python</li>
          </ul>
        </div>
        

        <p>
          Mi formación principal viene del Máster Full Stack de Nuclio, donde
          trabajé con JavaScript, React, Node.js, Express y MongoDB.
        </p>
        <p>
          Apliqué todo este aprendizaje en Link2Play, mi proyecto más grande:
          una red social gamer con sistema de autenticación, chat en tiempo real
          con sockets, eventos y gestión de perfiles.
        </p>
        <p>Lo que me define como desarrollador:</p>
        <ul>
          <li> Prefiero entender a fondo antes que avanzar rápido </li>
          <li> Valoro el código limpio y la arquitectura bien pensada</li>
          <li> No me conformo con soluciones superficiales</li>
          <li> Estoy en constante aprendizaje</li>
        </ul>

        <p>
          Mi objetivo es seguir creciendo como desarrollador Full Stack,
          consolidando una base sólida para resolver problemas reales mediante
          soluciones útiles y con valor. Me definen la constancia, el
          aprendizaje continuo y las ganas de seguir evolucionando dentro del
          sector tecnológico
        </p>
      </div>
    </section> */
}
