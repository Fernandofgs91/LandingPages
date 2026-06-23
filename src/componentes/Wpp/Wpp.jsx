import { FloatingWhatsApp } from 'react-floating-whatsapp';
import {  } from "react-dom";
import LogoOffice from "../../assets/Contato/LogoOffice.png";
function Wpp() {
    return (
        <>
            <FloatingWhatsApp
                        phoneNumber="+553484152483"
                        accountName="Office Engenharia"
                        chatMessage="Olá! Sou o Geremias, da Office Engenharia. Como posso ajudar com seu projeto, reforma ou regularização de imóvel?"
                        statusMessage="disponível"
                        placeholder="Digite a sua mensagem"
                        avatar={LogoOffice}
                        chatboxHeight={335} 
                        allowClickAway={true}
                        allowEsc={true}
                      
                        />
                        
        </>
    );
}

export default Wpp;