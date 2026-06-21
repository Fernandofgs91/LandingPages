import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import CTA from '../CTA/CTA';

const FAQ = () => {
  const url = "https://raw.githubusercontent.com/Fernandofgs91/PFEJ/refs/heads/main/LandingPages/Json/faqData.json";

  const [faqData, setFaqData] = useState([]);
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    lerFaqData();
  }, []);

  async function lerFaqData() {
    try {
      const response = await fetch(url);
      const dadosServidor = await response.json();
      
      const dadosFaq = Array.isArray(dadosServidor)
        ? dadosServidor
        : (dadosServidor.faqs || dadosServidor.faq || []);

      setFaqData(dadosFaq);
    } catch (error) {
      console.error("Erro ao buscar dados do FAQ:", error);
    }
  }

  const toggleItem = (id) => {
    setOpenItems(prev => {
      if (prev.includes(id)) {
        return [];
      }
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

      
        {faqData.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '20px' }}>Carregando perguntas...</p>
        ) : (
          <div className={styles.grid}>
            {faqData.map((item, index) => {
              const itemId = item.id || index;
              const isOpen = openItems.includes(itemId);

              return (
                <div 
                  key={itemId} 
                  className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                >
                  <button
                    className={styles.question}
                    onClick={() => toggleItem(itemId)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div className={styles.answerWrapper}>
                    <div className={styles.answer}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
      <CTA  />
    </section>
  );
};

export default FAQ;