import CTA from "../CTA/CTA";
import styles from "./Empresa.module.css";

const diferenciais = [
  {
    titulo: "Execução de Obras",
    descricao: "Públicas e privadas, com gestão rigorosa e qualidade atestada."
  },
  {
    titulo: "Consultoria e Fiscalização",
    descricao: "Garantia de normas técnicas e economia para o seu investimento."
  },
  {
    titulo: "Projetos Especializados",
    descricao: "Arquitetônico, Hidrossanitário, e Prevenção/Combate a Incêndio."
  },
  {
    titulo: "Regularização Imobiliária",
    descricao: "Processos completos, emissão e renovação de AVCB."
  }
];

function Empresa() {
  return (
    <section className={styles.empresa} id="empresa">
      <div className={styles.container}>
        <div className={styles.conteudo}>
          
          <span className={styles.tag}>
            A EMPRESA OFFICE ENGENHARIA
          </span>

          <h2 className={styles.titulo}>
            Mais que projetos, <br />
            <span>entregamos segurança e tranquilidade.</span>
          </h2>

          <p className={styles.descricao}>
            <strong>Registro Profissional:</strong> <br /> <span className={styles.crea}>CREA 138857-D/MG</span> <br /><br /> 
           Fundada e liderada pelo Engenheiro Civil Sênior Geremias Pereira da Silva, 
           com mais de 10 anos de experiência consolidada, 
           a Office Engenharia atua com padrões de excelência nos setores residencial,
            comercial, hospitalar e industrial. Nossa expertise abrange desde
             a concepção até a regularização final..
          </p>



        </div>
      </div>

    
      <div className={styles.cards}>
        {diferenciais.map((item) => (
          <div className={styles.card} key={item.titulo}>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
      <CTA  />
    </section>
  );
}

export default Empresa;