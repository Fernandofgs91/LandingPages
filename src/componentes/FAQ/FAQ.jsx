// FAQ.jsx
import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import CTA from '../CTA/CTA';

const FAQ = () => {
  const url = "https://raw.githubusercontent.com/Fernandofgs91/PFEJ/refs/heads/main/LandingPages/Json/faqData.json";

  // 1. Inicializado como array vazio para armazenar os dados vindo da URL externa
  const [faqData, setFaqData] = useState([]);
  const [openItems, setOpenItems] = useState([]);

  // 2. useEffect para buscar as perguntas assim que o componente for exibido na tela
  useEffect(() => {
    lerFaqData();
  }, []);

  async function lerFaqData() {
    try {
      const response = await fetch(url);
      const dadosServidor = await response.json();
      
      // Validação defensiva: aceita se o JSON for uma lista direta ou um objeto que contém a lista
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

        {/* 3. Condicional para alternar entre a mensagem de carregamento e o Grid de perguntas */}
        {faqData.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '20px' }}>Carregando perguntas...</p>
        ) : (
          <div className={styles.grid}>
            {faqData.map((item, index) => {
              // Garante uma identificação única mesmo se o JSON falhar com o campo id
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
      <CTA text="Ainda tem dúvidas? Fale com um especialista!" />
    </section>
  );
};

export default FAQ;