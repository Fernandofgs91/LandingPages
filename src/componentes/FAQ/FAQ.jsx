import React, { useState } from "react";
import styles from "./FAQ.module.css";
import CTA from '../CTA/CTA';
import faqData from '../../json/faqData.json';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev => {
      // Se o item já está aberto, fecha
      if (prev.includes(id)) {
        return [];
      }
      // Se está fechado, abre apenas ele (substitui qualquer outro)
      return [id];
    });
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.containerFaq}>
        <div className={styles.header}>
          <h2 className={styles.titleFaq}>Tire suas dúvidas</h2>
          <p className={styles.subtitleFaq}>
            Encontre respostas rápidas para as principais dúvidas sobre os nossos serviços e processos técnicos
          </p>
        </div>

        <div className={styles.grid}>
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.faqItem} ${openItems.includes(item.id) ? styles.active : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {openItems.includes(item.id) ? '−' : '+'}
                </span>
              </button>
              
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <CTA text="Ainda tem dúvidas? Fale com um especialista!" />
    </section>
  );
};

export default FAQ;