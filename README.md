Markdown
# 🚀 Landing Pages - Sistema de Captura e Apresentação Profissional

Uma aplicação moderna e de alta conversão estruturada em componentes modulares e reutilizáveis, projetada para a criação dinâmica de Landing Pages responsivas e de alta performance.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas e ferramentas modernas do ecossistema JavaScript:

- **Core:** [React 19](https://react.dev/) & [Vite](https://vite.dev/) (Build tool ultrarrápida com HMR).
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) & CSS Modules (Para escopo isolado de componentes).
- **Roteamento:** [React Router Dom v7](https://reactrouter.com/).
- **Animações:** [Framer Motion](https://www.framer.com/motion/) & [Swiper / React Slick](https://swiperjs.com/) (Carrosséis e transições fluidas).
- **Formulários e Validação:** [React Hook Form](https://react-hook-form.com/) integrado com [Zod](https://zod.dev/) para validações robustas e máscaras de entrada com `react-input-mask`.
- **Comunicação:** [EmailJS Browser](https://www.emailjs.com/) para captação e envio de leads diretamente do front-end.
- **Feedback Visual:** [Sonner](https://sonner.emilkowal.ski/) para notificações (toasts) limpas e elegantes.
- **Ícones e Contato:** [Lucide React](https://lucide.dev/), `react-icons` e `react-floating-whatsapp`.

---

## 📂 Estrutura de Arquivos e Componentização

A arquitetura do projeto foca na modularidade e separação de responsabilidades (Atomic/Component Design). Abaixo está a disposição e papel dos principais elementos:

```text
src/
├── componentes/
│   ├── NavBar/             # Barra de navegação global fixa
│   ├── Main.jsx            # Container principalizador das seções da página
│   ├── Header/             # Seção Hero/Destaque com formulário ou chamada inicial
│   ├── Sobre/              # História, propósito e contextualização institucional
│   ├── Empresa/            # Informações estruturais e dados da organização
│   ├── Benefícios/         # Grade de vantagens com CSS Modules isolado
│   ├── Depoimentos/        # Carrossel de validação social de clientes
│   ├── FAQ/                # Sanfona (Accordion) de perguntas frequentes
│   ├── Contato/            # Formulário estruturado integrado com EmailJS
│   ├── CTA/                # Call To Action flutuante ou de fechamento
│   ├── Wpp/                # Widget flutuante fixo para atendimento via WhatsApp
│   └── caixas/             # Componentes utilitários reutilizáveis (CaixaComRisco, ImagemTexto, PerguntaResposta)
├── assets/                 # Imagens, logotipos e mídias organizadas por seções
├── App.jsx                 # Inicializador com o Contexto de Rotas (BrowserRouter)
└── main.jsx                # Ponto de entrada da aplicação
💡 Arquitetura de Componentes Destacada
🧩 Ponto de Entrada Global (App.jsx)
O ecossistema é envelopado pelo BrowserRouter, garantindo a estrutura para navegações internas estruturadas. O componente Wpp (Botão de WhatsApp) fica solto estrategicamente na raiz do projeto para estar sempre visível e flutuando sob as seções de conteúdo.

📦 Componentes Utilitários Reutilizáveis (/caixas)
Para evitar a duplicação de código, o projeto conta com padrões estruturais genéricos:

CaixaComRisco: Bordas ou efeitos visuais de destaque.

ImagemTexto: Layouts alternados de blocos de conteúdo e imagens com alta flexibilidade.

TituloSubtitulo: Padronização de cabeçalhos de seções de forma semântica.

⚙️ Scripts Disponíveis
No diretório do projeto, podes executar:

npm run dev
Executa o aplicativo em modo de desenvolvimento com suporte a acesso via rede local (--host), ideal para testes simultâneos em smartphones e desktops.

Abre http://localhost:5173 para visualizar no navegador.

npm run build
Compila o aplicativo otimizado para produção na pasta dist. O build é minificado e os assets são gerados com hashes corretos para cache.

npm run lint
Executa o ESLint para analisar o código e apontar inconsistências ou quebras de boas práticas pré-configuradas.

npm run deploy
Realiza o processo automatizado de deploy do build de produção para o GitHub Pages.

🚀 Como Executar o Projeto Localmente
Clone o repositório:

Bash
git clone [https://github.com/Fernandofgs91/LandingPages.git](https://github.com/Fernandofgs91/LandingPages.git)
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev