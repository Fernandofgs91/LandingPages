import React from "react";
import CTA from '../CTA/CTA';
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaClock,
  FaRocket,
  FaCheckCircle
} from "react-icons/fa";
import styles from "./Beneficios.module.css";

const Beneficios = () => {
  const beneficios = [
    {
      id: 1,
      titulo: "REDUÇÃO DE CUSTOS",
      descricao: "Projetos integrados que facilitam a execução e evitam retrabalhos",
      icone: <FaChartLine />
    },
    {
      id: 2,
      titulo: "SEGURANÇA E CONFORMIDADE",
      descricao: "Garantia de total conformidade com normas técnicas, prefeituras e emissão da AVCB",
      icone: <FaShieldAlt />
    },
    {
      id: 3,
      titulo: "AGILIDADE E PRAZOS OTIMIZADOS",
      descricao: "Foco absoluto no cronograma para entregar seu projeto no tempo prometido",
      icone: <FaClock />
    },
    {
      id: 4,
      titulo: "MAIS EFICIÊNCIA NO PROJETO",
      descricao: "Metodologias ágeis e tecnologia de ponta para maximizar resultados",
      icone: <FaRocket />
    }
  ];

  return (
    <section id="beneficios" className={styles.beneficios}>
      <div className={styles.container}>
        
        {/* Cabeçalho */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Por que contratar a <span className={styles.highlight}>Office Engenharia</span>?
          </h2>
          <p className={styles.subtitle}>
            Do projeto à emissão do AVCB: soluções completas para você construir com tranquilidade e sem riscos de multas.
          </p>
        </div>

        {/* Destaque - Projetos otimizados */}
        <div className={styles.destaque}>
          <div className={styles.destaqueIcon}>
            <FaCheckCircle />
          </div>
          <p className={styles.destaqueTexto}>
            <strong>Projetos otimizados que evitam desperdício e multas por irregularidades</strong>
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className={styles.grid}>
          {beneficios.map((beneficio) => (
            <div key={beneficio.id} className={styles.card}>
              <div className={styles.cardIcon}>
                {beneficio.icone}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{beneficio.titulo}</h3>
                <p className={styles.cardDesc}>{beneficio.descricao}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    
         <CTA />
    </section>
  );
};

export default Beneficios;