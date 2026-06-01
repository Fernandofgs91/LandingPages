import React, { useState } from "react";
import styles from "./FAQ.module.css";
import CTA from '../CTA/CTA';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const faqItems = [
    {
      id: 1,
      question: "Como faço regularização do meu imóvel?",
      answer: "A regularização do imóvel envolve algumas etapas: primeiro, realizamos uma vistoria técnica para avaliar a situação atual. Depois, analisamos a documentação existente, elaboramos os projetos necessários (arquitetônico, estrutural, elétrico, hidrossanitário, etc.), protocolamos na prefeitura, acompanhamos a análise técnica e, por fim, obtemos o Alvará e o Habite-se. Todo o processo é acompanhado por nossa equipe especializada para garantir agilidade e segurança."
    },
    {
      id: 2,
      question: "Qual o custo do projeto e das taxas até a emissão do 'Habite-se'?",
      answer: "O custo total varia conforme o tipo e porte do imóvel, localização e complexidade do projeto. Nossa estrutura de custos inclui: honorários de elaboração de projetos, taxas de protocolo da prefeitura (que variam por município), ART/RRT, e acompanhamento técnico. Oferecemos um orçamento detalhado e transparente após uma análise inicial do seu caso, sem compromisso. Entre em contato para uma avaliação personalizada!"
    },
    {
      id: 3,
      question: "Quanto custa o ISS?",
      answer: "O ISS (Imposto Sobre Serviços) tem alíquota variável de acordo com o município, geralmente entre 2% e 5% sobre o valor do serviço prestado. Para projetos de engenharia e regularização, a base de cálculo é o valor total do contrato. Importante: serviços de engenharia podem ter tratamentos fiscais específicos. Nossa equipe pode detalhar exatamente os valores aplicáveis ao seu caso durante a elaboração da proposta."
    },
    {
      id: 4,
      question: "Quais os documentos para a regularização?",
      answer: "Os documentos básicos incluem: matrícula atualizada do imóvel (certidão de registro), comprovante de propriedade (escritura), documento de identidade e CPF do proprietário, carnê do IPTU atualizado, certidão negativa de débitos municipais, e documentos pessoais. Dependendo da complexidade, podem ser solicitados também a ART dos projetos anteriores, laudos técnicos, entre outros. Nossa equipe fornece uma checklist completa após análise inicial."
    },
    {
      id: 5,
      question: "O que é o ITBI?",
      answer: "ITBI (Imposto sobre Transmissão de Bens Imóveis) é um imposto municipal pago na compra e venda de imóveis. A alíquota varia de 2% a 4% dependendo do município, calculada sobre o valor venal do imóvel ou valor da transação (o que for maior). Importante: o ITBI precisa ser pago antes do registro da escritura no cartório. Para regularizações, só se aplica se houver transferência de propriedade. Nossa assessoria pode orientar sobre valores e prazos específicos da sua cidade."
    },
    {
      id: 6,
      question: "Qual o prazo médio dos projetos?",
      answer: "O prazo médio para elaboração de projetos e regularização varia conforme a complexidade: projetos simples (residências pequenas): 15-30 dias; projetos médios (comércios, reformas): 30-60 dias; projetos complexos (hospitais, indústrias): 60-120 dias. Após aprovação na prefeitura, o prazo para emissão do Habite-se pode levar de 15 a 90 dias úteis, dependendo da demanda municipal. Oferecemos cronogramas detalhados e acompanhamento semanal para cada etapa."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        {/* Cabeçalho */}
        <div className={styles.header}>
          <h2 className={styles.title}>Tire suas dúvidas</h2>
          <p className={styles.subtitle}>
            Encontre respostas rápidas para as principais dúvidas sobre os nossos serviços e processos técnicos
          </p>
        </div>

        {/* FAQ Grid */}
        <div className={styles.grid}>
          {faqItems.map((item) => (
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