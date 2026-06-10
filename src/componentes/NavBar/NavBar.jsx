import styles from "./NavBar.module.css"
import LogoOffice from "../../assets/abaNavegador/LogoOffice.png"

function NavBar() {
    return (
        <nav>
            <div>
                <img src={LogoOffice} alt="Logo" className={styles.LogoOffice} />
            </div>
            <div className={styles.Menu}>
                <a href="#header">Home</a>
                <a href="#sobre">O que é?</a>
                <a href="#beneficios">Benefícios</a>
                <a href="#empresa">Empresa</a>
                <a href="#depoimentos">Depoimentos</a>
                <a href="#faq">FAQ</a>
                <a href="#contato">Fale conosco</a>
            </div>
        </nav>
    );
}

export default NavBar;