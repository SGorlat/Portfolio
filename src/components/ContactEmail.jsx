import React, { useState } from "react";
import "../style/ContactEmail.css";

function ContactEmail() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xkokegqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error", error);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("");
  };

  return (
    <section id="contact">
      <h2 id="titulo-contacto">Contacto</h2>

      <div className="card">
        <p>
          ¿Tienes una oportunidad o proyecto en mente? No dudes en escribirme.
        </p>

        {status === "success" && (
          <p className="status-ok">✓ Mensaje enviado. Te responderé pronto.</p>
        )}
        {status === "error" && (
          <p className="status-error">
            ✗ Hubo un problema. Inténtalo de nuevo o escríbeme por LinkedIn.
          </p>
        )}

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
            <button type="submit" id="btn1" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : "Enviar"}
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
