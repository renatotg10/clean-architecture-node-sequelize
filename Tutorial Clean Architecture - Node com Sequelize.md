# Tutorial CRUD com Node.js utilizando Clean Architecture
`Renato Teixeira Gomes - renatotgomesdev@gmail.com`

Tutorial completo para criar um CRUD utilizando React no Front-End, Express no Back-End (API), Sequelize como ORM, e implementando a Clean Architecture. Usaremos MySQL como banco de dados, dotenv para gerenciamento de variáveis de ambiente e Bootstrap para estilização.

Segue um tutorial completo para criar um CRUD utilizando **React** no Front-End, **Express** no Back-End (API), **Sequelize** como ORM, e implementando a **Clean Architecture**. Usaremos **MySQL** como banco de dados, **dotenv** para gerenciamento de variáveis de ambiente e **Bootstrap** para estilização.

---

## 🛠️ **Passo 1: Configuração do Projeto Back-End**

### 1.1. Criar o projeto
```bash
mkdir clean-architecture-node-sequelize
cd clean-architecture-node-sequelize
mkdir backend
cd backend
npm init -y
```

---

**Comando `npm init -y`**

O comando `npm init -y` é uma forma rápida de inicializar um novo projeto Node.js com o **npm** (Node Package Manager). Ele cria um arquivo `package.json` no diretório atual com configurações padrão, sem que você precise responder às perguntas interativas que normalmente aparecem ao rodar apenas `npm init`.

O que ele faz especificamente:

- Cria um arquivo `package.json` no diretório atual.
- Preenche as configurações do `package.json` com valores padrão (por exemplo, `"name"`, `"version"`, `"description"`, etc.), usando `-y` (ou `--yes`) para aceitar os valores padrão sem pedir confirmações ao usuário.
- O arquivo `package.json` gerado inclui a versão do Node.js, nome do projeto, licença padrão e outros campos essenciais para a gestão do projeto.

Essa abordagem é útil quando você quer configurar rapidamente um projeto e não precisa personalizar o arquivo `package.json` na hora.

---

### 1.2. Instalar as dependências
```bash
npm install express sequelize mysql2 dotenv bcrypt
npm install --save-dev nodemon eslint
```

---

**Comando `npm install express sequelize mysql2 dotenv`**

O comando `npm install express sequelize mysql2 dotenv` instala quatro pacotes no seu projeto Node.js. Vamos detalhar o que cada um desses pacotes faz:

1. **express**:  
   O `express` é um framework minimalista e flexível para Node.js, utilizado para criar servidores web e APIs. Ele simplifica a criação de rotas, o gerenciamento de requisições HTTP e outras funcionalidades comuns em servidores.

   - **Função**: Facilita a criação de aplicativos web e APIs RESTful em Node.js.

2. **sequelize**:  
   O `sequelize` é um ORM (Object-Relational Mapping) para Node.js, que fornece uma interface para trabalhar com bancos de dados relacionais (como MySQL, PostgreSQL, SQLite, etc.) utilizando JavaScript. Ele mapeia tabelas de banco de dados para objetos JavaScript e oferece métodos para realizar operações como `SELECT`, `INSERT`, `UPDATE` e `DELETE` no banco de dados.

   - **Função**: Facilita a interação com bancos de dados relacionais de forma programática, usando JavaScript ao invés de escrever SQL diretamente.

3. **mysql2**:  
   O `mysql2` é um driver para conectar o Node.js ao banco de dados MySQL (ou MariaDB). Ele oferece uma interface para enviar consultas SQL e obter resultados de um banco de dados MySQL/MariaDB. O `mysql2` é mais rápido e possui mais funcionalidades que o driver `mysql` antigo.

   - **Função**: Permite que você se conecte e interaja com bancos de dados MySQL a partir do seu aplicativo Node.js.

4. **dotenv**:  
   O `dotenv` é um pacote que carrega variáveis de ambiente de um arquivo `.env` para o ambiente de execução do Node.js. Isso é útil para armazenar informações sensíveis, como credenciais de banco de dados, chaves de API, e outras configurações que não devem ser codificadas diretamente no código fonte.

   - **Função**: Gerencia variáveis de ambiente de forma segura e prática, carregando-as de um arquivo `.env`.

**O que o comando faz:**

Quando você executa `npm install express sequelize mysql2 dotenv`, ele:

- Baixa e instala as dependências listadas (express, sequelize, mysql2, dotenv) no seu projeto.
- Atualiza o arquivo `package.json` para incluir essas dependências na seção `"dependencies"`.
- Cria ou atualiza o diretório `node_modules`, que contém os pacotes baixados.

Esse comando é frequentemente usado quando você está criando uma aplicação web que precisa de um servidor (Express), integração com banco de dados (Sequelize e MySQL) e gerenciamento de configurações sensíveis (dotenv).

---

**Comando `npm install --save-dev nodemon eslint`**

O comando `npm install --save-dev nodemon eslint` instala dois pacotes no seu projeto Node.js, mas com uma diferença importante: ele usa a flag `--save-dev`, o que significa que essas dependências serão instaladas como **dependências de desenvolvimento**. Isso indica que esses pacotes são necessários apenas durante o desenvolvimento, e não para o funcionamento da aplicação em produção.

Vamos entender o que cada um desses pacotes faz:

#### 1. **nodemon**
   - **Função**: O `nodemon` é uma ferramenta de desenvolvimento que monitora as alterações nos arquivos do seu projeto e reinicia automaticamente o servidor Node.js sempre que detecta mudanças no código-fonte. Isso é muito útil durante o desenvolvimento, pois evita que você tenha que parar e iniciar o servidor manualmente a cada modificação no código.
   
   - **Exemplo de uso**: Em vez de rodar o comando `node app.js` para iniciar o servidor, você pode usar `nodemon app.js`, e ele reiniciará o servidor automaticamente sempre que você salvar um arquivo.

   - **Comando**: `nodemon` é usado como um substituto do `node` para manter o servidor rodando e sempre atualizado com as últimas alterações no código.

#### 2. **eslint**
   - **Função**: O `eslint` é uma ferramenta de linting para JavaScript, que analisa o código-fonte em busca de problemas de estilo, erros de sintaxe e padrões que podem ser melhorados. O ESLint ajuda a manter o código consistente e livre de erros, garantindo que você siga boas práticas de programação e evite bugs.
   
   - **Exemplo de uso**: O ESLint verifica o código à medida que você escreve, apontando problemas como variáveis não utilizadas, declarações de variáveis com escopo errado, ou problemas de formatação como espaços extras.

   - **Comando**: `eslint` pode ser executado através de linha de comando para analisar arquivos ou diretórios inteiros, e também pode ser integrado ao seu editor de código para fornecer feedback em tempo real.

#### O que o comando faz:

- **Instalar dependências de desenvolvimento**: A flag `--save-dev` faz com que o `nodemon` e o `eslint` sejam registrados na seção `devDependencies` do seu `package.json`. Isso significa que esses pacotes são necessários apenas durante o desenvolvimento, mas não para a produção.
  
- **Atualização no `package.json`**: O `package.json` será atualizado com essas dependências, que aparecerão na seção `devDependencies`:
  
  ```json
  {
    "devDependencies": {
      "nodemon": "^x.x.x",
      "eslint": "^x.x.x"
    }
  }
  ```

- **Instalação no diretório `node_modules`**: Esses pacotes serão instalados na pasta `node_modules`, mas, como dependências de desenvolvimento, eles não serão incluídos quando você rodar o comando `npm install --production`, que instala apenas as dependências de produção.

#### Resumo do comando:

`npm install --save-dev nodemon eslint` instala o `nodemon` (para reiniciar o servidor automaticamente durante o desenvolvimento) e o `eslint` (para garantir a qualidade do código com linting), e os adiciona à seção `devDependencies` do seu `package.json`.

Esses pacotes são especialmente úteis para melhorar a experiência de desenvolvimento e a qualidade do código no seu projeto Node.js.

---

### 1.3. Configurar o `dotenv`
Crie um arquivo `.env` para armazenar as configurações do banco:
```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=crud_database
DB_PORT=3306
DB_DIALECT=mysql
PORT=3001
```

---

### 1.4. Estrutura de pastas para Clean Architecture
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

Você pode criar um arquivo `.bat` no Windows para automatizar a criação dessa estrutura de diretórios e arquivos. O script a seguir cria a estrutura de pastas e arquivos dentro da pasta backend.

**Arquivo: `create-structure.bat` (crie o arquivo dentro da pasta `backend`)**
```bat
@echo off

:: Criar a estrutura de diretórios
mkdir src\app\routes
mkdir src\app
mkdir src\config
mkdir src\domain\entities
mkdir src\infrastructure\models
mkdir src\infrastructure\repositories
mkdir src\usecases

:: Criar arquivos dentro das pastas
echo // userRoutes.mjs > src\app\routes\userRoutes.mjs
echo // server.mjs > src\app\server.mjs
echo // database.mjs > src\config\database.mjs
echo // user.mjs > src\domain\entities\user.mjs
echo // user.mjs > src\infrastructure\models\user.mjs
echo // userRepository.mjs > src\infrastructure\repositories\userRepository.mjs
echo // userUseCase.mjs > src\usecases\userUseCase.mjs
echo // index.mjs > src\index.mjs

echo Estrutura criada com sucesso!
```

Execute o arquivo `backend/create-structure.bat`:
```bash
create-structure.bat
```

**O que o script faz:**

1. **Criação de diretórios**:  
   Ele cria toda a estrutura de diretórios necessária para o seu projeto, como `src`, `src/app/routes`, `src/config`, etc.

2. **Criação de arquivos `.mjs`**:  
   Para cada arquivo `.mjs` que você mencionou, ele cria um arquivo vazio (com um comentário simples dentro, como `// userRoutes.mjs`), o que você pode substituir mais tarde com o conteúdo real dos arquivos.

Isso criará a estrutura de diretórios e arquivos automaticamente. Após rodar o script, você pode começar a trabalhar no seu projeto, modificando os arquivos `.mjs` conforme necessário.

---

### 1.5 Criação do Banco de Dados (crud_database)

Para **criar um banco de dados diretamente no terminal do CMD**, sem acessar o MySQL interativamente, use o comando:

  ```bash
  mysql -u root -p -e "CREATE DATABASE crud_database;"
  ```

Para **listar todos os bancos de dados** sem entrar no MySQL:

  ```bash
  mysql -u root -p -e "SHOW DATABASES;"
  ```
O retorno desse comando deverá ser parecido com isso:

```
+--------------------+
| Database           |
+--------------------+
| crud_database      |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| teste              |
+--------------------+
```
Onde poderá confirmar que foi criado o banco de dados `crud_database`.

---

## **Passo 2: Back-End: Desenvolvimento**

### 2.1. Configurando a Conexão com o Banco de Dados (config/config.js)

```bash
npx sequelize-cli init
del config\config.json
echo \\ config.js > config\config.js
```

#### Resumo do que cada comando faz:

1. **`npx sequelize-cli init`**: Cria a estrutura inicial do projeto Sequelize, incluindo diretórios e arquivos padrões, como `config.json`.

Ele cria a seguinte estrutura de diretórios e arquivos:

```
my-crud-app-backend/
├── config/
│   └── config.json
├── models/
├── migrations/
├── seeders/
└── .sequelizerc
```

Esses diretórios e arquivos são necessários para gerenciar a configuração, os modelos, as migrações e os seeders do seu banco de dados.

2. **`del config\config.json`**: Exclui o arquivo `config.json` criado pelo `sequelize-cli init`.
3. **`echo \\ config.js > config\config.js`**: Cria o arquivo de configuração `config.js` na pasta `config/` onde são definidas as credenciais e as configurações do banco de dados para diferentes ambientes (desenvolvimento, teste, produção).

**Arquivo `config/config.js`**
```js
require('dotenv').config();  // Carregar variáveis de ambiente do arquivo .env

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',  // Nome de usuário do banco de dados
    password: process.env.DB_PASSWORD || 'sua-senha',  // Senha do banco de dados
    database: process.env.DB_NAME || 'crud_database',  // Nome do banco de dados
    host: process.env.DB_HOST || 'localhost',  // Endereço do host do banco de dados
    dialect: process.env.DB_DIALECT || 'mysql',  // Tipo de banco de dados
    port: process.env.DB_PORT || 3306,  // Porta de conexão com o banco
  },
  test: {
    username: 'root',
    password: 'sua-senha',
    database: 'crud_database_test',  // Banco de dados para testes
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'sua-senha',
    database: 'crud_database_prod',  // Banco de dados para produção
    host: 'localhost',
    dialect: 'mysql',
  }
};
```

---

### 2.2. Configurando o Banco de Dados (`backend/src/config/database.mjs`)
```javascript
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
});

export default sequelize;
```

---

### 2.3. Criando o Modelo e Migration (`backend/src/infrastructure/models/user.mjs`)
Modelo:
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
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
```

Migration (criar tabela no banco de dados):
```bash
npx sequelize-cli migration:generate --name create-users
```

Abra o arquivo gerado em `backend/migrations/` (exemplo: `backend/migrations/20241130091208-create-users.js`) e configure:
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
        allowNull: false,
        unique: true,
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

Rodar a migration:
```bash
npx sequelize-cli db:migrate
```

---

### 2.4. Criar o Repositório (`backend/src/infrastructure/repositories/userRepository.mjs`)
```javascript
import bcrypt from 'bcrypt';
import User from '../models/user.mjs';

// Criação de um novo usuário com hash para a senha
export const createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10); // Gera o hash da senha
    userData.password = hashedPassword; // Substitui a senha original pelo hash
    return User.create(userData);
};

// Obter todos os usuários
export const getAllUsers = async () => User.findAll();

// Obter um usuário pelo ID
export const getUserById = async (id) => User.findByPk(id);

// Atualizar informações de um usuário (exceto a senha diretamente)
export const updateUser = async (id, userData) => {
    const user = await getUserById(id);
    if (!user) return null;

    // Se o payload incluir senha, gere um novo hash
    if (userData.password) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
    }

    return user.update(userData);
};

// Deletar um usuário
export const deleteUser = async (id) => {
    const user = await getUserById(id);
    return user ? user.destroy() : null;
};
```

---

### 2.5. Criar os Casos de Uso (`backend/src/usecases/userUseCase.mjs`)
```javascript
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../infrastructure/repositories/userRepository.mjs';

export const createNewUser = async (data) => createUser(data);

export const listAllUsers = async () => getAllUsers();

export const findUser = async (id) => getUserById(id);

export const modifyUser = async (id, data) => updateUser(id, data);

export const removeUser = async (id) => deleteUser(id);
```

---

### 2.6. Criar as Rotas (`backend/src/app/routes/userRoutes.mjs`)
```javascript
import express from 'express';
import { createNewUser, listAllUsers, findUser, modifyUser, removeUser } from '../../usecases/userUseCase.mjs';

const router = express.Router();

router.post('/', async (req, res) => {
  const user = await createNewUser(req.body);
  res.status(201).json(user);
});

router.get('/', async (req, res) => {
  const users = await listAllUsers();
  res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const user = await findUser(req.params.id);
  res.status(200).json(user || { message: 'User not found' });
});

router.put('/:id', async (req, res) => {
  const user = await modifyUser(req.params.id, req.body);
  res.status(200).json(user || { message: 'User not found' });
});

router.delete('/:id', async (req, res) => {
  const user = await removeUser(req.params.id);
  res.status(200).json(user || { message: 'User not found' });
});

export default router;
```

---

### 2.7. Configurar o Servidor (`backend/src/app/server.mjs`)
```javascript
import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import sequelize from '../config/database.mjs';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/users', userRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados!');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
  }
})();
```

### 2.8. Configurar o Servidor (`backend/package.json`)

Para facilitar o processo de inicialização, você pode configurar o script de inicialização no `package.json`.

Abra o arquivo `package.json` e adicione o seguinte script em `"scripts"`:

```json
"scripts": {
  "start": "node src/app/server.mjs",
  "dev": "nodemon src/app/server.mjs"
}
```

- O comando `start` inicia o servidor normalmente.
- O comando `dev` utiliza o **Nodemon**, que reinicia o servidor automaticamente sempre que você faz alterações no código.

### 2.9 Executando o Servidor

**1. Rodando no Modo de Produção**
Se você não estiver utilizando o **Nodemon** para desenvolvimento e preferir rodar o servidor normalmente, execute:

```bash
npm start
```

**2. Rodando no Modo de Desenvolvimento com Nodemon**
Durante o desenvolvimento, é mais conveniente utilizar o **Nodemon** para reiniciar automaticamente o servidor quando houver alterações nos arquivos do projeto:

```bash
npm run dev
```

---

### 2.10 Criando um **seeder** no Sequelize para teste da API

Para criar um **seeder** no Sequelize e popular a tabela `users` com dados de teste, você pode seguir os passos abaixo:

**1. Criar o Seeder**

O Sequelize possui uma ferramenta de CLI que permite criar seeders automaticamente. Para criar um seeder para a tabela `users`, siga os passos:

**1.1. Criar o Seeder**

No terminal, dentro do diretório do seu projeto, execute o comando para gerar um seeder:

```bash
npx sequelize-cli seed:generate --name demo-user
```

Este comando vai gerar um arquivo na pasta `seeders` com um nome similar a `20240101010101-demo-user.js` (a data será gerada automaticamente).

**1.2. Editar o Seeder**

Abra o arquivo gerado na pasta `seeders` (por exemplo, `20240101010101-demo-user.js`). Você verá um template básico. Agora, edite para popular a tabela `users` com dados de teste. O conteúdo do arquivo pode ser algo como:

```javascript
'use strict';

const bcrypt = require('bcrypt'); // Adicione esta linha

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        name: 'João Silva',
        email: 'joao.silva@example.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pedro Souza',
        email: 'pedro.souza@example.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {}); // Certifique-se de usar o nome correto da tabela
  }
};
```

- **`up`**: Insere dados na tabela `users`. Aqui você pode adicionar os dados de teste para popular a tabela.
- **`down`**: Remove os dados inseridos, permitindo que você reverta o seeder.

**1.3. Executar o Seeder**

Agora que você criou e editou o seeder, é hora de executá-lo para popular a tabela `users` no banco de dados. No terminal, execute o seguinte comando:

```bash
npx sequelize-cli db:seed:all
```

Esse comando vai executar todos os seeders na pasta `seeders`, incluindo o que você acabou de criar, e populará a tabela `users` com os dados que você definiu no seeder.

**2. Verificar os Dados no Banco de Dados**

Após executar o seeder, você pode verificar os dados na tabela `users` do banco de dados utilizando uma ferramenta de gerenciamento de banco de dados (como MySQL Workbench, DBeaver ou diretamente no MySQL CLI) ou fazendo uma requisição GET para a rota de listar todos os usuários na sua API.

**3. Reverter o Seeder (opcional)**

Se você quiser remover os dados inseridos pelo seeder, basta executar o seguinte comando para rodar a função `down` do seu seeder:

```bash
npx sequelize-cli db:seed:undo:all
```

Isso vai reverter todas as alterações feitas pelos seeders, apagando os dados inseridos na tabela `users`.

**Resumo dos Comandos**

- **Gerar um seeder**: `npx sequelize-cli seed:generate --name demo-user`
- **Executar todos os seeders**: `npx sequelize-cli db:seed:all`
- **Reverter todos os seeders**: `npx sequelize-cli db:seed:undo:all`

Com esses passos, você poderá facilmente popular sua tabela `users` com dados de teste e usar para testar sua API.

---

### 2.11 Testando as APIs no Postman

Para testar as APIs no **Postman**, você pode seguir esses passos:

**1. Verifique se o servidor está rodando**
Antes de começar a testar as rotas no Postman, certifique-se de que o servidor está funcionando corretamente. Quando você rodar o comando `npm run dev`, o servidor deverá estar acessível, normalmente na URL `http://localhost:3001`.

**2. Teste cada uma das rotas no Postman**

Aqui estão os detalhes de como testar cada uma das rotas:

**Criar um novo usuário (POST)**

1. **Método:** `POST`
2. **URL:** `http://localhost:3001/api/users`
3. **Body:** Selecione o tipo `raw` e `JSON` no Postman.
4. **Exemplo de corpo JSON (body):**
   ```json
   {
       "name": "Renato Gomes",
       "email": "renato.gomes@example.com",
       "password": "password123"
   }
   ```
   **Passos:**
   - No Postman, escolha `POST` no método.
   - Defina a URL `http://localhost:3001/api/users`.
   - No `Body`, selecione `raw` e `JSON`, e cole o exemplo de corpo acima.
   - Clique em "Send" para enviar a requisição.

**Listar todos os usuários (GET)**

1. **Método:** `GET`
2. **URL:** `http://localhost:3001/api/users`
3. **Passos:**
   - No Postman, escolha `GET` no método.
   - Defina a URL `http://localhost:3001/api/users`.
   - Clique em "Send" para enviar a requisição.
   - Você verá a resposta com todos os usuários cadastrados no banco de dados.

**Buscar um usuário por ID (GET)**

1. **Método:** `GET`
2. **URL:** `http://localhost:3001/api/users/:id` (substitua `:id` pelo ID do usuário que você deseja buscar, por exemplo: `http://localhost:3001/api/users/1`)
3. **Passos:**
   - No Postman, escolha `GET` no método.
   - Defina a URL substituindo o `:id` pelo ID do usuário (por exemplo, `http://localhost:3001/api/users/1`).
   - Clique em "Send" para enviar a requisição.
   - Se o usuário existir, ele será retornado. Caso contrário, você verá a mensagem "Usuário não encontrado".

**Modificar um usuário por ID (PUT)**

1. **Método:** `PUT`
2. **URL:** `http://localhost:3001/api/users/:id` (substitua `:id` pelo ID do usuário que você deseja modificar)
3. **Body:** Selecione o tipo `raw` e `JSON` no Postman.
4. **Exemplo de corpo JSON (body):**
   ```json
   {
      "name": "João Silva Modificado",
      "email": "joao.modificado@example.com",
      "password": "password123"
   }
   ```
   **Passos:**
   - No Postman, escolha `PUT` no método.
   - Defina a URL com o ID do usuário que você deseja modificar (por exemplo, `http://localhost:3001/api/users/1`).
   - No `Body`, selecione `raw` e `JSON`, e cole o exemplo de corpo acima.
   - Clique em "Send" para enviar a requisição.
   - O usuário modificado será retornado. Caso não encontre o usuário, você verá a mensagem "Usuário não encontrado".

**Remover um usuário por ID (DELETE)**

1. **Método:** `DELETE`
2. **URL:** `http://localhost:3001/api/users/:id` (substitua `:id` pelo ID do usuário que você deseja excluir)
3. **Passos:**
   - No Postman, escolha `DELETE` no método.
   - Defina a URL com o ID do usuário que você deseja excluir (por exemplo, `http://localhost:3001/api/users/1`).
   - Clique em "Send" para enviar a requisição.
   - Se o usuário for encontrado, ele será removido. Caso contrário, você verá a mensagem "Usuário não encontrado".

**3. Resposta esperada**

- Para **POST**, você deve ver um JSON com o usuário criado e o código de status `201`.
- Para **GET**, você verá a lista de usuários (no caso do `/api/users`) ou o usuário específico (no caso do `/api/users/:id`).
- Para **PUT**, você verá o usuário atualizado ou a mensagem de erro se o usuário não for encontrado.
- Para **DELETE**, você verá a confirmação de remoção ou a mensagem de erro se o usuário não for encontrado.

**4. Erros comuns**

- **Erro 404**: A rota que você está tentando acessar não existe. Verifique a URL no Postman.
- **Erro 500**: Problema no servidor, como erro no código ou no banco de dados. Verifique os logs do servidor para mais detalhes.
- **Erro 400 ou 422**: Dados inválidos enviados na requisição (por exemplo, dados no formato errado). Verifique o formato do corpo da requisição.

**5. Verificação de logs**

Você pode verificar os logs no terminal onde o servidor está rodando (se você tiver configurado para exibir erros no console). Isso pode ajudar a depurar eventuais problemas ao interagir com o banco de dados ou ao processar as requisições.

Após realizar esses passos, você será capaz de testar e interagir com sua API diretamente no Postman!

### 2.12 Configurando o Swagger

Configurar o Swagger em um projeto Node.js com **Express** é útil para documentar e testar APIs. Aqui está um guia para configurar o Swagger em seu projeto:

---

**Passo 1: Instalar dependências**

Execute os comandos abaixo para instalar as bibliotecas necessárias:

```bash
npm install swagger-jsdoc swagger-ui-express
```

---

**Passo 2: Configurar a documentação do Swagger**

Crie um arquivo para a configuração `backend/src/config/database.mjsswaggerConfig.mjs`:

```javascript
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentação da API usando Swagger',
    },
    servers: [
        {
            url: 'http://localhost:3001', // URL base da API
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/app/routes/*.mjs'], // Caminho correto para os arquivos de rotas
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
```

---

**Passo 3: Integrar Swagger ao Express**

Modifique o arquivo principal  `backend/src/app/server.mjs`:

```javascript
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swaggerConfig.mjs'; // Caminho para o arquivo de configuração do Swagger
import userRoutes from './routes/userRoutes.mjs';
import sequelize from '../config/database.mjs';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/users', userRoutes);

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados!');
        app.listen(PORT, () => console.log(`Servidor rotando na porta ${PORT}.  Documentação disponível em http://localhost:${PORT}/api-docs`));
    } catch (error) {
        console.log('Erro ao conectar ao banco: ', error);
    }
})();
```

---

**Passo 4: Documentar as rotas**

Modifique o arquivo de rotas no arquivo `backend/src/app/routes/userRoutes.mjs`:

```javascript
import express from 'express';
import { createNewUser, listAllUsers, findUser, modifyUser, removeUser } from '../../usecases/userUseCase.mjs';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: E-mail do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *       example:
 *         id: 1
 *         name: Jorge Campos
 *         email: jorge.campos@example.com
 *         password: password123
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', async (req, res) => {
    const users = await listAllUsers();
    res.status(200).json(users);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: Jorge Campos
 *             email: jorge.campos@example.com
 *             password: password123
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: 1
 *               name: Jorge Campos
 *               email: jorge.campos@example.com
 *               password: password123
 *       400:
 *         description: Dados inválidos ou faltando.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Nome, e-mail e senha são obrigatórios."
 *       500:
 *         description: Erro ao criar o usuário.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro ao criar usuário. Tente novamente mais tarde."
 */
router.post('/', async (req, res) => {
    try {
        // Verifica se o corpo da requisição contém os dados necessários
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Nome, e-mail e senha são obrigatórios.' });
        }

        // Cria o novo usuário
        const user = await createNewUser(req.body);
        
        // Retorna o usuário com o status 201 (Criado)
        res.status(201).json({
            message: 'Usuário criado com sucesso.',
            user: user
        });
    } catch (error) {
        // Se houver um erro durante a criação, retorna o status 500 com a mensagem do erro
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar usuário. Tente novamente mais tarde.' });
    }
});


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Dados do usuário.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado.
 */
router.get('/:id', async (req, res) => {
    const user = await findUser(req.params.id);
    res.status(200).json(user || 'Usuário não encontrado');
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado.
 */
router.put('/:id', async (req, res) => {
    const user = await modifyUser(req.params.id, req.body);

    if (user) {
        res.status(200).json({
            message: 'Usuário atualizado com sucesso.',
            user: user // Retorna os dados atualizados do usuário
        });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso.
 *       404:
 *         description: Usuário não encontrado.
 */
router.delete('/:id', async (req, res) => {
    const user = await removeUser(req.params.id);
    if (user) {
        res.status(200).json({
            message: 'Usuário removido com sucesso.',
            user: user // Retorna os dados atualizados do usuário
        });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

export default router;
```

---

**Passo 5: Testar a documentação**

1. Inicie o servidor:
   ```bash
   npm run dev
   ```

2. Acesse a documentação em:
   ```
   http://localhost:3001/api-docs
   ```

Você verá uma interface gráfica interativa para testar suas rotas diretamente.

---

**Dicas**

- **Automatizar o processo:** Certifique-se de manter os comentários atualizados para que o Swagger reflita suas APIs corretamente.
- **Adicionar autenticação:** Use **bearer tokens** no Swagger se sua API exige autenticação.
- **Organizar schemas:** Mova as definições do `components.schemas` para um arquivo separado caso tenha muitas entidades.

## **Passo 3: Configuração do Front-End com React**

### 3.1. Criar o projeto React
```bash
cd clean-architecture-node-sequelize
npx create-react-app frontend
cd frontend
```

### 3.2. Instalar as dependências necessárias
```bash
npm install axios bootstrap react-router-dom
```

### 3.3. Configurar o Bootstrap
No arquivo `src/index.js`, importe o Bootstrap:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

---

## **Passo 4: Desenvolvimento do Front-End**

### 4.1. Estrutura do projeto Front-End
```plaintext
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── UserForm.js
│   │   └── UserTable.js
│   ├── pages/
│   │   ├── AddUser.js
│   │   ├── EditUser.js
│   │   └── Home.js
│   ├── App.js
│   ├── api.js
│   └── index.js
└── package.json
```

---

### 4.2. Criar o arquivo de API (`src/api.js`)
```javascript
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/users';

export const getUsers = () => axios.get(API_URL);

export const getUserById = (id) => axios.get(`${API_URL}/${id}`);

export const createUser = (data) => axios.post(API_URL, data);

export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
```

---

### 4.3. Criar o componente Navbar (`src/components/Navbar.js`)
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">CRUD App</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add User</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
```

---

### 4.4. Criar o componente UserTable (`src/components/UserTable.js`)
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const UserTable = ({ users, deleteUser }) => (
  <table className="table table-bordered mt-3">
    <thead className="thead-dark">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <Link className="btn btn-primary btn-sm mx-1" to={`/edit/${user.id}`}>Edit</Link>
            <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteUser(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
```

---

### 4.5. Criar o componente UserForm (`src/components/UserForm.js`)
```javascript
import React, { useState } from 'react';

const UserForm = ({ initialData = {}, onSubmit }) => {
  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name || ''}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email || ''}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password || ''}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Save</button>
    </form>
  );
};

export default UserForm;
```

---

### 4.6. Criar as páginas (`src/pages/`)

#### **Home.js**
```javascript
import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api';
import UserTable from '../components/UserTable';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <UserTable users={users} deleteUser={handleDelete} />
    </div>
  );
};

export default Home;
```

#### **AddUser.js**
```javascript
import React from 'react';
import { createUser } from '../api';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();

  const handleCreate = async (user) => {
    await createUser(user);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add User</h2>
      <UserForm onSubmit={handleCreate} />
    </div>
  );
};

export default AddUser;
```

#### **EditUser.js**
```javascript
import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../api';
import UserForm from '../components/UserForm';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const { data } = await getUserById(id);
    setUser(data);
  };

  const handleUpdate = async (updatedUser) => {
    await updateUser(id, updatedUser);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
      {user && <UserForm initialData={user} onSubmit={handleUpdate} />}
    </div>
  );
};

export default EditUser;
```

---

### 4.7. Configurar o Router (`src/App.js`)
```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  </Router>
);

export default App;
```

---

Agora, o **Front-End** e o **Back-End** estão conectados. Para iniciar, rode os comandos:
- **Back-End:** `nodemon src/index.mjs`
- **Front-End:** `npm start`

Você terá um CRUD funcional com React, Express, Sequelize, e MySQL. 🎉

### Fonte

- https://chatgpt.com/share/674ac89b-b8d4-8011-8b06-6ec9f4f36140