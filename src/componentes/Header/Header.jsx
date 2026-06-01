import React from "react";
import CTA from "../CTA/CTA";
import styles from "./Header.module.css";

import plantaImg from "../../assets/header/imagemprojetoheader.png";

const Header = () => {
  return (
    <section
      id="header"  className={styles.hero} >
     
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
      <h1 className={styles.title}>
      COMPROMETIMENTO E  <br />
      RESPONSABILIDADE <br />
      COM OS SEUS <span>SONHOS</span>
    </h1>

          <p className={styles.description}>
            Elaboração de projetos, execução e administração de obra,
            regularização e consultoria, conforme os padrões legais
            normativos dos órgãos municipais.
          </p>
             <CTA />
         
        </div>
 {/* Coluna da Direita: Imagem */}
        <div className={styles.compromissoImageWrapper}>
          <img 
            src={plantaImg} 
            alt="Planta arquitetônica de projeto de engenharia" 
            className={styles.compromissoImg}
          />
        </div>
      </div>
      
    </section>
  );
};

export default Header;