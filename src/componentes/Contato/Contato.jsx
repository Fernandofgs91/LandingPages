import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contato.module.css";

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_owfoo66",
        "template_9qkidg6",
        form.current,
        "MPD_BnPQFignFd1iR",
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Erro EmailJS:", error);
        alert("Não foi possível enviar a mensagem.");
      });
  };

  return (
    <div id="contato" className={styles.containerContato}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.titleContato}>
            <span> Seu projeto sem surpresas nem </span>

            <span className={styles.lineBreak}>
              desperdício. Receba um diagnóstico &nbsp;
            </span>

            <span className={styles.lineBreak}>
              gratuito com um engenheiro.
            </span>
          </h1>

          <p className={styles.subtitleContato}>
            <span> Conte o que você precisa e receba orientação técnica </span>

            <span className={styles.lineBreak}>
              personalizada. Sem custos, sem compromisso.
            </span>
          </p>
        </div>

        <div className={styles.rightColumn}>
          <form ref={form} className={styles.form} onSubmit={sendEmail}>
            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.label}>
                Nome completo *
              </label>

              <input
                type="text"
                id="nome"
                name="from_name"
                placeholder="Ex.: João da Silva"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email *
              </label>

              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Ex.: exemplo@exemplo.com"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="whatsapp" className={styles.label}>
                WhatsApp (com DDD) *
              </label>

              <input
                type="tel"
                id="whatsapp"
                name="phone"
                placeholder="(34) 99999-9999"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="projeto" className={styles.label}>
                Tipo de projeto *
              </label>

              <select
                id="projeto"
                name="project_type"
                className={styles.select}
                defaultValue=""
                required
              >
                <option value="" disabled hidden>
                  Selecione o tipo de projeto...
                </option>

                <option value="Residencial">Residencial</option>

                <option value="Comercial">Comercial</option>

                <option value="Reforma">Reforma</option>

                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensagem" className={styles.label}>
                Descreva seu projeto *
              </label>

              <textarea
                id="mensagem"
                name="from_msg"
                className={styles.input}
                rows="5"
                placeholder="Conte um pouco sobre o que você precisa..."
                required
              />
            </div>

            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                <span>🚀</span>
                Quero falar com um engenheiro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
