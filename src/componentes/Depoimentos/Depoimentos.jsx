// Depoimentos.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CTA from '../CTA/CTA';
import clientesData from "../../Json/clientes.json";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./depoimentos.module.css";
import FotoFundo from "../../assets/Depoimentos/fotofundodepoimento.jpeg";

const Depoimentos = () => {
  const depoimentos = useMemo(() => {
    const clientes = [...(clientesData.clientes || [])];
    for (let i = clientes.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [clientes[i], clientes[j]] = [clientes[j], clientes[i]];
    }
    return clientes.slice(0, 6);
  }, []);

  const renderStars = (count) => {
    const rating = Math.max(0, Math.min(5, Number(count) || 0));
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i += 1) {
      stars.push(
        <span key={`full-${i}`} className={styles.star} aria-hidden="true">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={`${styles.star} ${styles.halfStar}`} aria-hidden="true">
          ★
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i += 1) {
      stars.push(
        <span key={`empty-${i}`} className={`${styles.star} ${styles.emptyStar}`} aria-hidden="true">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <section id="depoimentos" className={styles.depoimentos}>
      <div className={styles.containerDepoimentos}>
        <div className={styles.backgroundImage} style={{ backgroundImage: `url(${FotoFundo})` }}></div>
        
        {/* Cabeçalho */}
        <div className={styles.header}>
          <h2 className={styles.titleDepoimentos}>Depoimentos de Clientes</h2>
          <p className={styles.subtitleDepoimentos}>
            A confiança de quem constrói e regulariza com a <strong>Office Engenharia</strong>
          </p>
        </div>

        {/* Carrossel com Swiper */}
        {depoimentos.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
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

                  {/* Conteúdo (Sem Imagem) */}
                  <div className={styles.content}>
                    <h3 className={styles.nome}>
                      {depoimento.nome}
                      {/* Renderiza a cidade apenas se existir no JSON */}
                      {depoimento.cidade && (
                        <span className={styles.cidade}> ({depoimento.cidade})</span>
                      )}
                    </h3>
                    
                    <div className={styles.stars}>
                      {renderStars(depoimento.estrelas || depoimento.rating)}
                    </div>

                    <p className={styles.depoimentoTexto}>
                      "{depoimento.texto || depoimento.depoimento}"
                    </p>

                    {/* Renderiza o projeto apenas se existir no JSON */}
                    {depoimento.projeto && (
                      <span className={styles.projeto}>
                        {depoimento.projeto}
                      </span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p style={{ textAlign: 'center' }}>Nenhum depoimento encontrado.</p>
        )}

        {/* Botões de navegação customizados */}
        {depoimentos.length > 0 && (
          <div className={styles.navButtons}>
            <button className={`${styles.navButton} ${styles.swiperPrev}`} aria-label="Anterior">
              ‹
            </button>
            <button className={`${styles.navButton} ${styles.swiperNext}`} aria-label="Próximo">
              ›
            </button>
          </div>
        )}

        {/* Paginação customizada */}
        <div className={styles.swiperPagination}></div>

      </div>
      
      <CTA text="Quer ser nosso próximo cliente satisfeito? Fale com um especialista!" />
    </section>
  );
};

export default Depoimentos;