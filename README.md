# Portfólio pessoal

Meu portfólio pessoal desenvolvido para apresentar meu perfil profissional, habilidades, experiências e projetos.

## Sobre

Sou estudante de Análise e Desenvolvimento de Sistemas e atuo com desenvolvimento de software. Tenho experiência prática com C#, SQL Server e ASP.NET Framework MVC e estou estudando tecnologias como JavaScript e React.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- HTML
- CSS

## Funcionalidades

- Apresentação pessoal
- Seção sobre mim
- Lista de habilidades
- Projetos com detalhes expansíveis
- Experiências profissionais
- Links de contato para GitHub, LinkedIn e Gmail
- Layout responsivo para computadores, tablets e celulares

## Como executar o projeto

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Acesse a pasta do projeto:

```bash
cd meu-portfolio
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Após iniciar o servidor, acesse a URL exibida no terminal pelo navegador.

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versão de produção do projeto.
- `npm run lint`: executa a análise estática do código com Oxlint.
- `npm run preview`: executa localmente o build gerado para produção.

## Estrutura geral do projeto

```text
meu-portfolio/
├── public/
│   ├── favicon.png
│   └── images/
│       └── foto-perfil-optimized.jpg
├── src/
│   ├── components/
│   │   ├── Apresentacao.jsx
│   │   ├── Contato.jsx
│   │   ├── Experiencia.jsx
│   │   ├── Footer.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Header.jsx
│   │   ├── Projetos.jsx
│   │   └── Sobre.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

- `public/`: mantém recursos estáticos, como favicon e imagem de perfil.
- `src/components/`: contém os componentes das seções do portfólio.
- `src/data/portfolio.js`: centraliza os dados exibidos no portfólio.
- `src/App.jsx`: organiza a composição principal da página.
- `src/App.css` e `src/index.css`: definem os estilos e a responsividade.
- `src/main.jsx`: inicializa a aplicação React.
