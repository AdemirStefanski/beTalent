# BeTalent Challenge

Teste técnico **BeTalent**. 

Construído com **React** e **TypeScript**, permite a visualização de uma tabela com dados obtidos de uma API simulada utilizando `json-server`.


## 📖 Sobre

- Visualização de dados dos funcionários em tabela
- Filtro de funcionários por meio de uma barra de pesquisa
- Layout responsivo para desktop e mobile


## 🛠️ Tecnologias & Dependências

- **React**: ^19.0.0
- **TypeScript**: ^4.9.5  
- **Axios**: ^1.8.1  
- **Styled-Components**: ^6.1.15  
- **React Scripts**: 5.0.1  

Outras dependências de testes:
- **@testing-library/react**: ^16.2.0  
- **@testing-library/jest-dom**: ^6.6.3  
- **@testing-library/user-event**: ^13.5.0  

Consulte o arquivo [package.json](./package.json) para mais detalhes.


## 🔧 Requisitos

- [Node.js](https://nodejs.org/) (recomendado v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)


## 🚀 Rodando a Aplicação

### 1. Configuração da API


1. **Instale o json-server** (caso não possua):

   ```bash
   npm install -g json-server

2. **Clone o repositório da API**:

   ```bash
   git clone https://github.com/BeMobile/desafio-front-end.git

3. **Navegue até a pasta do repositório**:

   ```bash
   cd desafio-front-end

4. **Inicie o json-server**:

   ```bash
   json-server --watch db.json

### 2. Executando a aplicação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/AdemirStefanski/beTalent.git

2. **Navegue até a pasta do projeto**:

   ```bash
   cd beTalent

3. **Instale as dependências**:

   ```bash
   # npm
   npm install

    ou
   
   # yarn
   yarn install

4. **Inicie a aplicação**:

   ```bash
   # npm
   npm start

    ou
   
   # yarn
   yarn start

## 📚 Considerações Finais

- **ATENÇÃO:** A API simulada deve estar em execução **antes** de iniciar a aplicação, pois o projeto depende dos dados fornecidos por ela.
- Verifique se todas as dependências foram instaladas corretamente e se o ambiente (Node.js, npm/Yarn e Git) está devidamente configurado.
- Para mais detalhes sobre as versões utilizadas, consulte o arquivo [package.json](./package.json).
