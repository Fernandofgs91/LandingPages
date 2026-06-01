import style from "./ImagemTexto.module.css";

function ImagemTexto(props) {
    return (
        <>
            <div className={style.imagemTexto}>
                <img src={props.imagem} alt="" />
                <p>{props.texto}</p>
            </div>
        </>
    );
}

export default ImagemTexto;