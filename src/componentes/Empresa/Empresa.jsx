import React from "react";
import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import style from "./Empresa.module.css";
import { FaHardHat, FaBuilding, FaFileSignature, FaCertificate, FaHandshake } from 'react-icons/fa';

function Empresa() {
    return (
        <section className={style.secaoEmpresa} id="empresa">
            {/* Certifique-se de que o componente Titulosubtitulo utilize cores escuras internamente também! */}
            <Titulosubtitulo 
                titulo="Excelência Técnica e Credibilidade" 
                subtitulo="Office Engenharia: Comprometimento e Responsabilidade com seu Sonho"
            />
            
            <div className={style.container}>
                {/* Coluna Esquerda - Certificações */}
                <div className={style.colunaEsquerda}>
                    <div className={style.certificacoes}>
                        <h4><FaCertificate className={style.iconeCertificado} /> Registro Profissional</h4>
                        <p>Empresa Registrada e Regularizada no CREA-MG</p>
                    </div>
                </div>
                
                {/* Coluna Direita - Textos */}
                <div className={style.colunaDireita}>
                    <h3>A Solução Integrada que Você Procura</h3>
                    <span className={style.nomeEmpresa}>Office Engenharia</span>
                    
                    <p>
                        Fundada e liderada pelo <span>Engenheiro Civil Sênior Geremias Pereira da Silva</span>, 
                        com <span>mais de 10 anos de experiência</span> consolidada, a <span>Office Engenharia</span> atua com 
                        padrões de excelência nos setores <span>residencial, comercial, hospitalar e industrial</span>. 
                        Nossa expertise abrange desde a concepção até a regularização final.
                    </p>

                    <div className={style.pilares}>
                        <h4>Nossas Áreas de Atuação Técnica:</h4>
                        <ul>
                            <li><FaBuilding /> <span>Execução de Obras:</span> Públicas e privadas, com gestão rigorosa e qualidade atestada.</li>
                            <li><FaHardHat /> <span>Consultoria e Fiscalização:</span> Garantia de normas técnicas e economia para o seu investimento.</li>
                            <li><FaFileSignature /> <span>Projetos Especializados:</span> Arquitetônico, Hidrossanitário, e Prevenção/Combate a Incêndio.</li>
                            <li><FaFileSignature /> <span>Regularização Imobiliária:</span> Processos completos, emissão e renovação de AVCB.</li>
                        </ul>
                    </div>
                    
                    <p>
                        <span>Sua dor, nossa solução:</span> Entendemos a complexidade de ter um imóvel irregular 
                        ou a ansiedade de construir nos padrões legais. A Office Engenharia existe para eliminar 
                        essas dores de cabeça, transformando o complexo em seguro, transparente e eficiente.
                    </p>

                    <p className={style.chamadaFinal}>
                        <FaHandshake /> <span> Compromisso com seu Sonho:</span> A engenharia vai além dos cálculos; 
                        é sobre construir confiança. Estamos prontos para ser o parceiro técnico do seu próximo empreendimento.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Empresa;