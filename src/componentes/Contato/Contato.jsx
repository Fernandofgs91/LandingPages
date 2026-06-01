import React from 'react';
import styles from './contato.module.css';
import PlanoFundo from '../../assets/Contato/planoFundo.png';

const Contato = () => {
  return (
    <div id="contato" className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        
        {/* Coluna da Esquerda - Textos */}
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>
            Seu projeto sem surpresas nem<br className={styles.hideOnMobile} /> desperdício. Receba um diagnóstico<br className={styles.hideOnMobile} /> gratuito com um engenheiro.
          </h1>
          
          <p className={styles.subtitle}>
            Conte o que você precisa e receba orientação técnica<br className={styles.hideOnMobile} /> personalizada. Sem custos, sem compromisso.
          </p>
        </div>

        {/* Coluna da Direita - Formulário */}
        <div className={styles.rightColumn}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            
            {/* Nome Completo */}
            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.label}>
                Nome completo *
              </label>
              <input 
                type="text" 
                id="nome"
                placeholder="Ex.: João da Silva" 
                className={styles.input}
                required
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email*
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="Ex.: exempl@exem.com" 
                className={styles.input}
                required
              />
            </div>

            {/* WhatsApp */}
            <div className={styles.formGroup}>
              <label htmlFor="whatsapp" className={styles.label}>
                WhatsApp (com DDD) *
              </label>
              <input 
                type="tel" 
                id="whatsapp"
                placeholder="(11) 9 9999-9999" 
                className={styles.input}
                required
              />
            </div>

            {/* Tipo de Projeto */}
            <div className={styles.formGroup}>
              <label htmlFor="projeto" className={styles.label}>
                Tipo de projeto *
              </label>
              <select 
                id="projeto"
                className={styles.select}
                defaultValue=""
                required
              >
                <option value="" disabled hidden>Selecione o tipo de projeto...</option>
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
                <option value="reforma">Reforma</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Botão */}
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                <span>🚀</span> Quero falar com um engenheiro
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato; 