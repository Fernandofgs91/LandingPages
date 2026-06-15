import React from "react";
import CTA from "../CTA/CTA";
import styles from "./header.module.css";

// import plantaImg from "../../assets/header/imagemprojetoheader.png";

const Header = () => {
  return (
    <section
      id="header"  className={styles.hero} >
     
      <div className={styles.overlay}></div>
      <div className={styles.containerHeader}>
        <div className={styles.content}>
    <h1 className={styles.titleHeader}>
  COMPROMETIMENTO
  <br />
  <strong>E RESPONSABILIDADE</strong>
  <br />
  COM OS SEUS <span className={styles.highlight}>SONHOS</span>
</h1>

          <p className={styles.descriptionHeader}>
            Elaboração de projetos, execução e administração de obra,
            regularização e consultoria, conforme os padrões legais
            normativos dos órgãos municipais.
          </p>
             <CTA />
         
        </div>
 {/* Coluna da Direita: Imagem */}
        {/* <div className={styles.compromissoImageWrapper}>
          <img 
            src={plantaImg} 
            alt="Planta arquitetônica de projeto de engenharia" 
            className={styles.compromissoImg}
          />
        </div> */}
      </div>
      
    </section>
  );
};

export default Header;
