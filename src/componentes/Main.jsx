import Depoimentos from "./Depoimentos/Depoimentos";
import Contato from "./Contato/Contato";
import FAQ from "./FAQ/FAQ";
import Header from "./Header/Header";
import Empresa from "./Empresa/Empresa";
import Sobre from "./Sobre/Sobre";
import Footer from "./Footer/Footer";
import Beneficios from "./Benefícios/Beneficios";

function Main() {
    return (
        <main>
            <Header/>
            <Sobre/>
            <Beneficios/>
            <Empresa/>
            <Depoimentos/>
            <FAQ/>
            <Contato/>
            <Footer/>
        </main>
    );
}

export default Main;