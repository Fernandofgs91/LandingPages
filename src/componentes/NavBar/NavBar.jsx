import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import LogoOffice from "../../assets/abaNavegador/LogoOffice.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu automaticamente quando o usuário clica em um link do menu móvel
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Trava o scroll da página de fundo quando o menu hambúrguer estiver aberto (Mobile UX)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <nav className={styles.Navbar} aria-label="Navegação Principal">
      <div className={styles.LogoContainer}>
        <img src={LogoOffice} alt="Logo da Empresa Office" className={styles.LogoOffice} />
      </div>

      {/* Botão de Menu Hambúrguer - Acessibilidade Completa */}
      <button 
        className={`${styles.Hamburger} ${isMenuOpen ? styles.HamburgerActive : ''}`} 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
        aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
      >
        <span className={styles.Bar}></span>
        <span className={styles.Bar}></span>
        <span className={styles.Bar}></span>
      </button>

      {/* Menu de Links */}
      <div 
        id="main-menu"
        className={`${styles.Menu} ${isMenuOpen ? styles.MenuOpen : ''}`}
        aria-hidden={!isMenuOpen && typeof window !== 'undefined' && window.innerWidth <= 1024}
      >
        <a href="#header" onClick={handleLinkClick}>Home</a>
        <a href="#sobre" onClick={handleLinkClick}>O que é?</a>
        <a href="#beneficios" onClick={handleLinkClick}>Benefícios</a>
        <a href="#empresa" onClick={handleLinkClick}>Empresa</a>
        <a href="#depoimentos" onClick={handleLinkClick}>Depoimentos</a>
        <a href="#faq" onClick={handleLinkClick}>FAQ</a>
        <a href="#contato" className={styles.CtaLink} onClick={handleLinkClick}>Fale conosco</a>
      </div>
    </nav>
  );
}

export default NavBar;