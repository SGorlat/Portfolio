import React from "react";
import "../style/AboutMe.css";

function AboutMe() {
  return (
    <section className="info-container">
      <img
        className="avatar"
        // src="/images/1245.jpg"
        src="/images/230.jpg"
        alt="my personal picture"
      />
      <div className="description">
        <h2>Sobre mi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit fames luctus
          donec, massa morbi suspendisse purus vestibulum varius feugiat a
          litora, euismod volutpat gravida pulvinar fermentum risus primis neque
          interdum. Eu varius et aliquet platea diam sollicitudin leo volutpat
          vehicula, mus rutrum nunc porta sed a urna. Vel commodo montes
          lobortis ullamcorper auctor himenaeos ligula inceptos tristique duis
          taciti, posuere luctus facilisi tempus potenti sollicitudin at dictum
          egestas quisque arcu nam, pretium vitae nunc suscipit sodales
          scelerisque phasellus platea vivamus vestibulum. Aenean posuere augue
          natoque fringilla sociosqu varius pellentesque lacinia, cras mollis
          nisi taciti nisl proin vehicula ridiculus, rhoncus himenaeos potenti
          dapibus est tempus tellus. Nisi turpis lectus pulvinar dignissim hac
          congue vestibulum sodales sagittis curabitur auctor ultricies,
          facilisis etiam eleifend felis sem sociis laoreet blandit scelerisque
          purus. Nisl platea venenatis mus massa hac magna pulvinar quis,
          ultricies ultrices nascetur parturient laoreet habitasse litora,
          sapien ut neque magnis primis risus facilisis.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
