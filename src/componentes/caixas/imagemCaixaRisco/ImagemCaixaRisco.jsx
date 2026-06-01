import CaixaComRisco from "../CaixaComRisco/CaixaComRisco";
import style from "./ImagemCaixaRisco.module.css";

function ImagemCaixaRisco(props) {
    return ( 
        <div 
            className={`${style.imagemCaixa}`}
            style={{
                backgroundImage: `url(${props.imagem})`
            }}
        >
            <CaixaComRisco 
                subtitulo={props.subtitulo} 
                texto={props.texto} 
            />
        </div>
    );
}

export default ImagemCaixaRisco;