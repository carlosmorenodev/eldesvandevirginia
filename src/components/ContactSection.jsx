"use client";

import React, { useState } from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío real (API, EmailJS, etc.)
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      {/* Decoración SVG superior */}
      <div className={styles.waveTop} aria-hidden="true" />

      <div className={styles.container}>
        {/* Columna izquierda – texto e info */}
        <div className={styles.info}>
          <span className={styles.eyebrow}>¿Hablamos?</span>
          <h2 className={styles.title}>Ponte en contacto</h2>
          <p className={styles.subtitle}>
            Si tienes alguna pregunta sobre mis creaciones, quieres hacer un
            encargo personalizado o simplemente quieres saludar, ¡estaré
            encantada de escucharte!
          </p>

          <div className={styles.contactItems}>
            {/* Email */}
            <a
              className={styles.contactItem}
              href="mailto:desvandevirginia@gmail.com"
              aria-label="Enviar correo electrónico"
            >
              <span className={styles.contactIcon} aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </span>
              <span>desvandevirginia@gmail.com</span>
            </a>

            {/* Instagram */}
            <a
              className={styles.contactItem}
              href="https://www.instagram.com/eldesvandevirginia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita nuestro perfil de Instagram"
            >
              <span className={styles.contactIcon} aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span>@eldesvandevirginia</span>
            </a>
          </div>

          {/* Divisor decorativo */}
          <div className={styles.divider} aria-hidden="true">
            <span />
            <span className={styles.dividerIcon}>✦</span>
            <span />
          </div>

          <p className={styles.note}>
            También puedes encontrar mis piezas en{" "}
            <a
              href="https://www.vinted.es"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              Vinted
            </a>
            .
          </p>
        </div>

        {/* Columna derecha – formulario */}
        {/* <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="nombre" className={styles.label}>
                Tu nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Virginia…"
                className={styles.input}
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Tu email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="hola@ejemplo.com"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="mensaje" className={styles.label}>
                Tu mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                placeholder="Me encantaría saber qué tienes en mente…"
                className={styles.textarea}
                value={formData.mensaje}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} ${enviado ? styles.submitBtnSent : ""}`}
            >
              {enviado ? "¡Mensaje enviado! 🧶" : "Enviar mensaje"}
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;