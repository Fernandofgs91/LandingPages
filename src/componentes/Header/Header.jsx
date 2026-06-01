import CallToAction from "../CallToAction/CallToAction";
import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";

import styles from "./header.module.css";

function Header() {
    const data = {
        titulo: "Descubra-se e transforme sua relação consigo mesmo e com o mundo",
        subtitulo: "Apoio profissional para adolescentes, universitários, profissionais em meio de carreira, mulheres e muito mais. que buscam o seu desenvolvimento pessoal e emocional."
    }

    return (
        <header className={styles.headerPrincipal} id="header">
            <div>
                <Titulosubtitulo titulo={data.titulo} subtitulo={data.subtitulo} />
                <CallToAction/>
            </div>
        </header>
    );
}

export default Header;

