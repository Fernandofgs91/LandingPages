import React from "react";
import CTA from "../CTA/CTA";
import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaDraftingCompass,
  FaCheckCircle
} from "react-icons/fa";

import styles from "./Sobre.module.css";

const Sobre = () => {
  const etapas = [
    {
      id: 1,
      titulo: "Contato Inicial",
      descricao:
        "Viabilidade técnica e documental do imóvel",
      icone: <FaPhoneAlt />,
      cor: styles.azul
    },
    {
      id: 2,
      titulo: "Diagnóstico Técnico",
      descricao:
        "Levantamento técnico básico da proposta",
      icone: <FaClipboardCheck />,
      cor: styles.verde
    },
    {
      id: 3,
      titulo: "Planejamento e Projetos",
      descricao:
        "Elaboração e protocolo dos serviços contratuais",
      icone: <FaDraftingCompass />,
      cor: styles.azul
    },
    {
      id: 4,
      titulo: "Entrega e Aprovação",
      descricao:
        "Entrega do objetivo contratual",
      icone: <FaCheckCircle />,
      cor: styles.verde
    }
  ];

  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            Como funciona a consultoria?
          </h2>

          <p className={styles.subtitle}>
            Um processo claro e descomplicado, do primeiro contato
            até a regularização do seu imóvel.
          </p>
        </div>

        <div className={styles.timeline}>
          {etapas.map((etapa, index) => (
            <React.Fragment key={etapa.id}>
              
              <div className={styles.cardWrapper}>
                
                <div className={`${styles.numero} ${etapa.cor}`}>
                  {etapa.id}
                </div>

                <div
                  className={`${styles.card} ${
                    etapa.id === 3 ? styles.cardDestaque : ""
                  }`}
                >
                  <div className={styles.icone}>
                    {etapa.icone}
                  </div>

                  <h3>{etapa.titulo}</h3>

                  <p>{etapa.descricao}</p>
                </div>
              </div>

              {index < etapas.length - 1 && (
                <div className={styles.linha}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default Sobre;