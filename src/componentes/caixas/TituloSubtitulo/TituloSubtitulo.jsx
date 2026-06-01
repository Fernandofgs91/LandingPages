import styles from "./TituloSubtitulo.module.css"

function Titulosubtitulo(props) {
    return (
        <>
            <h2 className={styles.titulo}>{props.titulo}</h2>
            <h3 className={styles.subtitulo}>{props.subtitulo}</h3>
        </>
    );
}

export default Titulosubtitulo;