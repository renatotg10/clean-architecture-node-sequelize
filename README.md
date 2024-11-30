# Tutorial CRUD com Node.js utilizando Clean Architecture

Autor: **Renato Teixeira Gomes**  
Contato: **renatotg10@gmail.com**

Este é um tutorial completo para criar um CRUD utilizando **React** no Front-End, **Express** no Back-End (API), **Sequelize** como ORM e implementando a **Clean Architecture**. O banco de dados utilizado será o **MySQL**. Utilizaremos também o pacote **dotenv** para gerenciamento de variáveis de ambiente e **Bootstrap** para estilização.

---

## 🎯 Objetivos do Tutorial
- Construir um CRUD funcional e escalável.
- Implementar o padrão **Clean Architecture** no Back-End.
- Integrar Front-End e Back-End para criar uma aplicação completa.
- Utilizar boas práticas para o desenvolvimento de APIs e gestão de banco de dados.

---

## 🛠️ Configuração do Projeto

### 1. Back-End (Node.js + Express + Sequelize)
#### 1.1. Inicializando o projeto
```bash
mkdir backend
cd backend
npm init -y
```

#### 1.2. Instalando dependências
```bash
npm install express sequelize mysql2 dotenv
npm install --save-dev nodemon eslint
```

#### 1.3. Configurando o `dotenv`
Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:
```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=crud_database
DB_PORT=3306
DB_DIALECT=mysql
```

#### 1.4. Estrutura de pastas para Clean Architecture
```plaintext
backend/
├── src/
│   ├── app/
│   │   ├── routes/
│   │   │   └── userRoutes.mjs
│   │   └── server.mjs
│   ├── config/
│   │   └── database.mjs
│   ├── domain/
│   │   └── entities/
│   │       └── user.mjs
│   ├── infrastructure/
│   │   ├── models/
│   │   │   └── user.mjs
│   │   └── repositories/
│   │       └── userRepository.mjs
│   ├── usecases/
│   │   └── userUseCase.mjs
│   └── index.mjs
├── .env
└── package.json
```

#### 1.5. Criando o banco de dados
Execute o seguinte comando no terminal:
```bash
mysql -u root -p -e "CREATE DATABASE crud_database;"
```

### 2. Configuração do Sequelize
#### 2.1. Inicializando o Sequelize
```bash
npx sequelize-cli init
```

#### 2.2. Configurando o arquivo `config.js`
Substitua o arquivo `config/config.json` pelo arquivo `config/config.js`:
```javascript
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  },
};
```

#### 2.3. Configurando o modelo `User`
No arquivo `src/infrastructure/models/user.mjs`:
```javascript
import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.mjs';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
```

#### 2.4. Criando a tabela `Users`
Gere a migration para criar a tabela `Users`:
```bash
npx sequelize-cli migration:generate --name create-users
```

Edite o arquivo de migration gerado em `migrations/`:
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  },
};
```

Rode a migration:
```bash
npx sequelize-cli db:migrate
```

---

## 🚀 Próximos Passos
1. Implementar as rotas e controladores para o CRUD de usuários.
2. Configurar o Front-End utilizando React.
3. Estilizar a aplicação com Bootstrap.

---

## 📝 Observações
Este tutorial foi projetado para ajudar desenvolvedores a entender e implementar os conceitos de Clean Architecture em projetos Node.js, integrando tecnologias modernas como React e Sequelize para um desenvolvimento mais eficiente e escalável.

---