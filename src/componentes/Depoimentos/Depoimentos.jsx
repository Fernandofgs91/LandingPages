// Depoimentos.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import CTA from '../CTA/CTA';
// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "./depoimentos.module.css";
import FotoFundo from "../../assets/Depoimentos/fotofundodepoimento.jpeg";

// Importando as imagens dos clientes
import cliente1 from "../../assets/Depoimentos/man-technologist-dark-skin-tone_1f468-1f3ff-200d-1f4bb.png";
import cliente2 from "../../assets/Depoimentos/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png";
import cliente3 from "../../assets/Depoimentos/man-technologist-medium-skin-tone_1f468-1f3fd-200d-1f4bb.png";
import cliente4 from "../../assets/Depoimentos/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png";
import cliente5 from "../../assets/Depoimentos/technologist-medium-dark-skin-tone_1f9d1-1f3fe-200d-1f4bb.png";
import cliente6 from "../../assets/Depoimentos/woman-technologist-dark-skin-tone_1f469-1f3ff-200d-1f4bb.png";

const Depoimentos = () => {
  const depoimentos = [
    {
      id: 1,
      nome: "Carlos M.",
      cidade: "Uberlândia",
      estrelas: 5,
      texto: "Excelente atendimento! Regularizaram meu comércio rapidamente, evitando multas e emitindo o AVCB de forma muito eficiente.",
      imagem: cliente1,
      projeto: "Regularização comercial"
    },
    {
      id: 2,
      nome: "Juliana P.",
      cidade: "Belo Horizonte",
      estrelas: 5,
      texto: "A consultoria em engenharia civil foi impecável. Projetos precisos e total acompanhamento da obra, do início ao fim.",
      imagem: cliente2,
      projeto: "Consultoria e projetos"
    },
    {
      id: 3,
      nome: "Roberto S.",
      cidade: "Araguari",
      estrelas: 5,
      texto: "Segurança jurídica e técnica incomparável. Nos ajudaram a aprovar o projeto hospitalar mais complexo do nosso grupo.",
      imagem: cliente3,
      projeto: "Projeto hospitalar"
    },
    {
      id: 4,
      nome: "Mariana L.",
      cidade: "Contagem",
      estrelas: 5,
      texto: "O atendimento foi claro e rápido, e o projeto ficou muito acima do esperado. Recomendo para quem precisa de segurança técnica.",
      imagem: cliente4,
      projeto: "Laudo técnico"
    },
    {
      id: 5,
      nome: "Fernando R.",
      cidade: "Nova Lima",
      estrelas: 5,
      texto: "A equipe entregou todos os prazos e explicou cada etapa com atenção. Me senti muito seguro durante a reforma do meu imóvel.",
      imagem: cliente5,
      projeto: "Reforma residencial"
    },
    {
      id: 6,
      nome: "Ana C.",
      cidade: "Sete Lagoas",
      estrelas: 5,
      texto: "A assessoria de documentação foi impecável, sem burocracia desnecessária. Fiquei muito satisfeita com o resultado final.",
      imagem: cliente6,
      projeto: "Documentação e aprovação"
    }
  ];

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  return (
    <section  id="depoimentos"className={styles.depoimentos}>
      <div className={styles.container}>
       <div className={styles.backgroundImage}></div>
        {/* Cabeçalho */}
        <div className={styles.header}>
          <h2 className={styles.title}>Depoimentos de Clientes</h2>
          <p className={styles.subtitle}>
            A confiança de quem constrói e regulariza com a <strong>Office Engenharia</strong>
          </p>
        </div>

        {/* Carrossel com Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: `.${styles.swiperNext}`,
            prevEl: `.${styles.swiperPrev}`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.swiperPagination}`,
            bulletClass: styles.customBullet,
            bulletActiveClass: styles.customBulletActive,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={600}
          className={styles.swiperContainer}
        >
          {depoimentos.map((depoimento) => (
            <SwiperSlide key={depoimento.id}>
              <div className={styles.slide}>
                {/* Ícone de aspas */}
                <div className={styles.quoteIcon}>“</div>

                {/* Avatar/Imagem do cliente */}
                <div className={styles.avatarContainer}>
                  <img 
                    src={depoimento.imagem} 
                    alt={depoimento.nome}
                    className={styles.avatar}
                  />
                </div>

                {/* Conteúdo */}
                <div className={styles.content}>
                  <h3 className={styles.nome}>
                    {depoimento.nome}
                    <span className={styles.cidade}> ({depoimento.cidade})</span>
                  </h3>
                  
                  <div className={styles.stars}>
                    {renderStars(depoimento.estrelas)}
                  </div>

                  <p className={styles.depoimentoTexto}>
                    "{depoimento.texto}"
                  </p>

                  <span className={styles.projeto}>
                    {depoimento.projeto}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação customizados */}
        <div className={styles.navButtons}>
          <button className={`${styles.navButton} ${styles.swiperPrev}`} aria-label="Anterior">
            ‹
          </button>
          <button className={`${styles.navButton} ${styles.swiperNext}`} aria-label="Próximo">
            ›
          </button>
        </div>

        {/* Paginação customizada */}
        <div className={styles.swiperPagination}></div>

        {/* Selo de qualidade */}
        
        </div>
          
          <CTA text="Quer ser nosso próximo cliente satisfeito? Fale com um especialista!" />
    </section>
  );
};

export default Depoimentos;