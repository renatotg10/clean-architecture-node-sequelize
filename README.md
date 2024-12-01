# CRUD com Node.js utilizando Clean Architecture
`Renato Teixeira Gomes - renatotg10@gmail.com`

Este projeto é um exemplo de CRUD (Create, Read, Update, Delete) utilizando a **Clean Architecture**, com tecnologias modernas no Front-End e Back-End.

## 🛠️ Tecnologias Utilizadas

- **Front-End**: React.js com Bootstrap para estilização
- **Back-End**: Node.js com Express (API)
- **ORM**: Sequelize
- **Banco de Dados**: MySQL
- **Gerenciamento de Variáveis de Ambiente**: dotenv
- **Clean Architecture**: Organização baseada em camadas para separar as responsabilidades

## 📂 Estrutura do Projeto

O projeto está organizado nas seguintes pastas:

- `frontend/`: Contém o código do Front-End desenvolvido em React.
- `backend/`: Contém o código do Back-End com Node.js, Express e Sequelize.

---

## ⚙️ Como Configurar o Projeto

Siga os passos abaixo para clonar, configurar e executar o projeto.

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **MySQL** (com um banco de dados configurado)
- **Git** (para clonar o repositório)

---

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/renatotg10/clean-architecture-node-sequelize.git
cd clean-architecture-node-sequelize
```

---

### Passo 2: Configuração do Back-End

1. Acesse a pasta do Back-End:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o arquivo `.env` com as variáveis de ambiente:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=crud_database
   DB_PORT=3306
   DB_DIALECT=mysql
   PORT=3001
   ```
4. Rode as migrações para criar as tabelas no banco:
   ```bash
   npx sequelize db:migrate
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```

---

### Passo 3: Configuração do Front-End

1. Acesse a pasta do Front-End:
   ```bash
   cd ../frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` para definir a URL da API:
   ```
   REACT_APP_API_URL=http://localhost:3001
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

---

## 📌 Funcionalidades

- **CRUD Completo**: Criação, leitura, atualização e exclusão de dados.
- **Arquitetura Limpa**: Separação de responsabilidades no Back-End.
- **Estilização**: Front-End estilizado com Bootstrap.

---

## 🚀 Executando o Projeto

1. Inicie o Back-End primeiro:
   ```bash
   cd backend
   npm start
   ```
2. Em outra janela do terminal, inicie o Front-End:
   ```bash
   cd frontend
   npm start
   ```
3. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

---

## 🧩 Contribuindo

Sinta-se à vontade para contribuir com o projeto enviando PRs ou relatando problemas na [seção de Issues](https://github.com/seu-usuario/seu-repositorio/issues).

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [seção de Issues](https://github.com/seu-usuario/seu-repositorio/issues) para mais detalhes.