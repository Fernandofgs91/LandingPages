import style from "./CaixaComRisco.module.css"

function CaixaComRisco(props) {
    return (
        <>
            <div className={style.caixaComRisco}>
                <h3>{props.subtitulo}</h3>
                <p>{props.texto}</p>
            </div>
        </>
    );
}

export default CaixaComRisco;