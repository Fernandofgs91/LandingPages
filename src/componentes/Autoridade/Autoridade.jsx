import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import style from "./Autoridade.module.css"
import FotoGeremias from '../../assets/sobreMim/FotoGeremias.png';
import { FaHardHat, FaBuilding, FaFileSignature, FaStar } from 'react-icons/fa';

function Autoridade() {
    return (
        <>
            <section className={style.sobreMim} id="autoridade">
                <Titulosubtitulo titulo="Autoridade Técnica" subtitulo="Engenharia com Credibilidade e Resultado"/>
                
                <div className={style.container}>
                    <div className={style.colunaEsquerda}>
                        <img 
                            src={FotoGeremias} 
                            alt="Engenheiro Geremias Pereira da Silva - Ffice Engenharia" 
                            className={style.fotoEngenheiro} 
                        />
                        <div className={style.credenciais}>
                            <h4>Eng. Geremias Pereira da Silva</h4>
                            <p>CREA: 123.456/D</p>
                            <p>Especialista em Engenharia de Avaliações e Perícias</p>
                        </div>
                    </div>
                    
                    <div className={style.colunaDireita}>
                        <h3>É um prazer tê-lo(a) aqui! Eu sou</h3>
                        <span className={style.nome}>Geremias Pereira da Silva</span>
                        
                        <p>
                            <span>Engenheiro Civil graduado pela Universidade Federal</span>, 
                            com <span>mais de 10 anos de experiência em consultoria, fiscalização e regularização de imóveis</span>, 
                            atuando em obras públicas e privadas nos setores 
                            <span> residencial, comercial, hospitalar e industrial</span>.
                        </p>

                        <p>
                            Minha missão na <span>Office Engenharia</span> é oferecer 
                            <span> soluções técnicas seguras, econômicas e dentro da lei</span>, 
                            garantindo que cada projeto tenha excelência desde o planejamento até a entrega final.
                        </p>
                        
                        <p>
                            <span>Atuei na fiscalização de mais de 50 obras</span> de grande porte, 
                            realizei <span>laudos técnicos e pareceres</span> para regularização de imóveis 
                            e auxiliei <span>centenas de clientes</span> a evitarem prejuízos e dores de cabeça 
                            com construção e reformas.
                        </p>

                        <p>
                            <span>A engenharia vai além dos cálculos e projetos:</span> é sobre transformar 
                            sonhos em realidade com segurança, transparência e compromisso. 
                            <span> Será um prazer estar junto de você no seu próximo empreendimento!</span>
                        </p>
                    </div>
                </div>
             
            </section>
        </>
    );
}

export default Autoridade;