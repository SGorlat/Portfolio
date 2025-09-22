import React from "react";
import "../style/Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input type="text" name="name" />
        <label htmlFor="email">Correo: </label>
        <input type="text" name="email" />
        <label htmlFor="message">Mensaje: </label>
        <textarea name="message" className="contact-message"></textarea>
      </form>
      <button className="btn-form">Enviar</button>
    </section>
  );
}

export default Contact;
