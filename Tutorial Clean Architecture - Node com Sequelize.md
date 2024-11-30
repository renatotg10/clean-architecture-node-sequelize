# Tutorial CRUD com Node.js utilizando Clean Architecture
`Renato Teixeira Gomes - renatotg10@gmail.com`

Tutorial completo para criar um CRUD utilizando React no Front-End, Express no Back-End (API), Sequelize como ORM, e implementando a Clean Architecture. Usaremos MySQL como banco de dados, dotenv para gerenciamento de variáveis de ambiente e Bootstrap para estilização.

Segue um tutorial completo para criar um CRUD utilizando **React** no Front-End, **Express** no Back-End (API), **Sequelize** como ORM, e implementando a **Clean Architecture**. Usaremos **MySQL** como banco de dados, **dotenv** para gerenciamento de variáveis de ambiente e **Bootstrap** para estilização.

---

### 🛠️ **Passo 1: Configuração do Projeto Back-End**

#### 1.1. Criar o projeto
```bash
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

#### 1.2. Instalar as dependências
```bash
npm install express sequelize mysql2 dotenv
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

### O que o comando faz:

Quando você executa `npm install express sequelize mysql2 dotenv`, ele:

- Baixa e instala as dependências listadas (express, sequelize, mysql2, dotenv) no seu projeto.
- Atualiza o arquivo `package.json` para incluir essas dependências na seção `"dependencies"`.
- Cria ou atualiza o diretório `node_modules`, que contém os pacotes baixados.

Esse comando é frequentemente usado quando você está criando uma aplicação web que precisa de um servidor (Express), integração com banco de dados (Sequelize e MySQL) e gerenciamento de configurações sensíveis (dotenv).

---

**Comando `npm install --save-dev nodemon eslint`**

O comando `npm install --save-dev nodemon eslint` instala dois pacotes no seu projeto Node.js, mas com uma diferença importante: ele usa a flag `--save-dev`, o que significa que essas dependências serão instaladas como **dependências de desenvolvimento**. Isso indica que esses pacotes são necessários apenas durante o desenvolvimento, e não para o funcionamento da aplicação em produção.

Vamos entender o que cada um desses pacotes faz:

### 1. **nodemon**
   - **Função**: O `nodemon` é uma ferramenta de desenvolvimento que monitora as alterações nos arquivos do seu projeto e reinicia automaticamente o servidor Node.js sempre que detecta mudanças no código-fonte. Isso é muito útil durante o desenvolvimento, pois evita que você tenha que parar e iniciar o servidor manualmente a cada modificação no código.
   
   - **Exemplo de uso**: Em vez de rodar o comando `node app.js` para iniciar o servidor, você pode usar `nodemon app.js`, e ele reiniciará o servidor automaticamente sempre que você salvar um arquivo.

   - **Comando**: `nodemon` é usado como um substituto do `node` para manter o servidor rodando e sempre atualizado com as últimas alterações no código.

### 2. **eslint**
   - **Função**: O `eslint` é uma ferramenta de linting para JavaScript, que analisa o código-fonte em busca de problemas de estilo, erros de sintaxe e padrões que podem ser melhorados. O ESLint ajuda a manter o código consistente e livre de erros, garantindo que você siga boas práticas de programação e evite bugs.
   
   - **Exemplo de uso**: O ESLint verifica o código à medida que você escreve, apontando problemas como variáveis não utilizadas, declarações de variáveis com escopo errado, ou problemas de formatação como espaços extras.

   - **Comando**: `eslint` pode ser executado através de linha de comando para analisar arquivos ou diretórios inteiros, e também pode ser integrado ao seu editor de código para fornecer feedback em tempo real.

### O que o comando faz:

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

### Resumo do comando:

`npm install --save-dev nodemon eslint` instala o `nodemon` (para reiniciar o servidor automaticamente durante o desenvolvimento) e o `eslint` (para garantir a qualidade do código com linting), e os adiciona à seção `devDependencies` do seu `package.json`.

Esses pacotes são especialmente úteis para melhorar a experiência de desenvolvimento e a qualidade do código no seu projeto Node.js.

---

#### 1.3. Configurar o `dotenv`
Crie um arquivo `.env` para armazenar as configurações do banco:
```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=crud_database
DB_PORT=3306
DB_DIALECT=mysql
```

---

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

Execute o arquivo `create-structure.bat`:
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

#### 1.5 Criação do Banco de Dados (crud_database)

Para **criar um banco de dados diretamente no terminal do CMD**, sem acessar o MySQL interativamente, use o comando:

  ```bash
  mysql -u root -p -e "CREATE DATABASE nome_do_banco_de_dados;"
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

### **Back-End: Desenvolvimento**

#### 2.1. Configurando a Conexão com o Banco de Dados (config/config.js)

```bash
npx sequelize-cli init
del config\config.json
echo \\ config.js > config\config.js
```

### Resumo do que cada comando faz:

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

#### 2.2. Configurando o Banco de Dados (`src/config/database.mjs`)
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

#### 2.3. Criando o Modelo e Migration (`src/infrastructure/models/user.mjs`)
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

Abra o arquivo gerado em `migrations` e configure:
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

#### 2.4. Criar o Repositório (`src/infrastructure/repositories/userRepository.mjs`)
```javascript
import User from '../models/user.mjs';

export const createUser = async (userData) => User.create(userData);

export const getAllUsers = async () => User.findAll();

export const getUserById = async (id) => User.findByPk(id);

export const updateUser = async (id, userData) => {
  const user = await getUserById(id);
  return user ? user.update(userData) : null;
};

export const deleteUser = async (id) => {
  const user = await getUserById(id);
  return user ? user.destroy() : null;
};
```

---

#### 2.5. Criar os Casos de Uso (`src/usecases/userUseCase.mjs`)
```javascript
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../infrastructure/repositories/userRepository.mjs';

export const createNewUser = async (data) => createUser(data);

export const listAllUsers = async () => getAllUsers();

export const findUser = async (id) => getUserById(id);

export const modifyUser = async (id, data) => updateUser(id, data);

export const removeUser = async (id) => deleteUser(id);
```

---

#### 2.6. Criar as Rotas (`src/app/routes/userRoutes.mjs`)
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

#### 2.7. Configurar o Servidor (`src/app/server.mjs`)
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

---

### **Passo 3: Configuração do Front-End com React**

#### 3.1. Criar o projeto React
```bash
npx create-react-app my-crud-app-frontend
cd my-crud-app-frontend
```

#### 3.2. Instalar as dependências necessárias
```bash
npm install axios bootstrap react-router-dom
```

#### 3.3. Configurar o Bootstrap
No arquivo `src/index.js`, importe o Bootstrap:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

---

### **Desenvolvimento do Front-End**

#### 3.4. Estrutura do projeto Front-End
```plaintext
my-crud-app-frontend/
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

#### 3.5. Criar o arquivo de API (`src/api.js`)
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

#### 3.6. Criar o componente Navbar (`src/components/Navbar.js`)
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

#### 3.7. Criar o componente UserTable (`src/components/UserTable.js`)
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

#### 3.8. Criar o componente UserForm (`src/components/UserForm.js`)
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

#### 3.9. Criar as páginas (`src/pages/`)

##### **Home.js**
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

##### **AddUser.js**
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

##### **EditUser.js**
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

#### 3.10. Configurar o Router (`src/App.js`)
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