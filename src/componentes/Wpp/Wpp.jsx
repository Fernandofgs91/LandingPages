import { FloatingWhatsApp } from "react-floating-whatsapp";
// import joao from "../../assets/Contato/fotoTeste.jpeg"

function Wpp() {
    return (
        <>
            <FloatingWhatsApp
                        phoneNumber="+553484152483"
                        accountName="Geremias Pereira da Silva"
                        chatMessage="Olá! Sou o Geremias, da Office Engenharia. Como posso ajudar com seu projeto, reforma ou regularização de imóvel?"
                        statusMessage="disponível"
                        placeholder="Digite a sua mensagem"
                        // avatar={}
                        allowClickAway={true}
                        allowEsc={true}
                        />
                        
        </>
    );
}

export default Wpp;