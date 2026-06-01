import Depoimentos from "./Depoimentos/Depoimentos";
import Contato from "./Contato/Contato";
import FAQ from "./FAQ/FAQ";
// import Header from "./Header/Header";
import Autoridade from "./Autoridade/Autoridade";
import Wpp from "./Wpp/Wpp";
import Sobre from "./Sobre/Sobre";
import Footer from "./Footer/Footer";
import Beneficios from "./Benefícios/Beneficios";

function Main() {
    return (
        <main>
            {/* <Header/> */}
            <Sobre/>
            <Beneficios/>
            <Autoridade/>
            <Depoimentos/>
            <FAQ/>
            <Contato/>
            <Wpp/>
            <Footer/>
        </main>
    );
}

export default Main;