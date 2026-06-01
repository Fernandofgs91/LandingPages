// Footer.jsx
import React from 'react';
import style from "./Footer.module.css";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = "553484152483";
  const mensagem = "Olá! Gostaria de marcar um horário.";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(mensagem)}`;

  const facebookLink = "https://www.facebook.com/profile.php?id=100089622721640&mibextid=ZbWKwL";
  const instagramLink = "https://www.instagram.com/engenharia.geremiassilva?igshid=ZDdkNTZiNTM%3D";
  const linkedinLink = "https://www.linkedin.com/in/geremias-p-silva-8067553a/";

  // Coordenadas do endereço (Av. Jericó, 576 - Jardim Canaã, Uberlândia - MG)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.0!2d-48.2772!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450c10f6d2d5%3A0x9a8b6c4e2f8a3b7c!2sAv.%20Jeric%C3%B3%2C%20576%20-%20Jardim%20Cana%C3%A3%2C%20Uberl%C3%A2ndia%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890";

  return (
    <footer>
      {/* Seção principal do rodapé */}
      <div className={style.rodape}>
        {/* Coluna da Esquerda - Endereço e Google Maps */}
        <div className={style["left-content"]}>
          <p>Endereço: Av. Jericó, 576 - Jardim Canaã, Uberlândia - MG</p>
          
          {/* Caixa do Google Maps */}
          <div className={style["map-container"]}>
            <iframe
              src={mapEmbedUrl}
              className={style["map-iframe"]}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do endereço"
            ></iframe>
          </div>
          
          
        </div>

        {/* Coluna da Direita - Redes Sociais */}
        <div className={style["right-content"]}>
          <p>Redes Sociais</p>
          <div className={style["social-icons"]}>
            <a 
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className={style["social-link"]}
            >
              <FaFacebook size={50} />
            </a>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={style["social-link"]}
            >
              <FaWhatsapp size={50} />
            </a>
            
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className={style["social-link"]}
            >
              <FaInstagram size={50} />
            </a>
            
            <a 
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className={style["social-link"]}
            >
              <FaLinkedin size={50} />
            </a>
          </div>
        </div>
      </div>

      {/* Seção de Copyright */}
      <div className={style.copyright}>
        <p>© 2026 Office Engenharia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;