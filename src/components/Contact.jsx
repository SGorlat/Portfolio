import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("enviando");

    emailjs
      .sendForm(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        form.current,
        "TU_PUBLIC_KEY",
      )
      .then(() => setStatus("ok"))
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact">
      <div className="card">
        <div className="container">
          <h2 id="titulo-contacto">Contacto</h2>
          <p>
            ¿Tienes una oportunidad o proyecto en mente? No dudes en escribirme.
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-contact">
              <label htmlFor="name">Nombre completo</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-contact">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-contact">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="form-contact">
              <label htmlFor="msg">Mensaje</label>
              <textarea name="msg" id="msg" required></textarea>
            </div>
            {status === "ok" && <p className="status-ok">¡Mensaje enviado!</p>}
            {status === "error" && (
              <p className="status-error">Algo falló, inténtalo de nuevo.</p>
            )}
            <div className="form-button">
              <button type="submit" id="btn1" disabled={status === "enviando"}>
                {status === "enviando" ? "Enviando..." : "Enviar"}
              </button>
              <button type="reset" id="btn2">
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
