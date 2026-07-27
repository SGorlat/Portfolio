import React, { useState } from "react";
import "../style/ContactEmail.css";

function ContactEmail() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contacto portfolio - ${formData.name}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
    window.location.href = `mailto:sgorlat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <h2 id="titulo-contacto">Contacto</h2>

      <div className="card">
        <p>
          ¿Tienes una oportunidad o proyecto en mente? No dudes en escribirme.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-contact">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-contact">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-contact">
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-button">
            <button type="submit" id="btn1">
              Enviar
            </button>
            <button type="button" id="btn2" onClick={handleReset}>
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactEmail;
