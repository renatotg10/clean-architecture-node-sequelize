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
3. Copie o arquivo `.env-example` para `.env`

```
copy .env-example .env
```

O `.env` deve conter as variáveis de ambiente:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=crud_database
   DB_PORT=3306
   DB_DIALECT=mysql
   PORT=3001
   ```
4. Crie o banco de dados:
  ```bash
  mysql -u root -p -e "CREATE DATABASE crud_database;"
  ```
5. Rode as migrações para criar as tabelas no banco:
   ```bash
   npx sequelize-cli db:migrate
   ```
6. Inicie o servidor:
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

## Executando o Seeder para Testes

Execute o Seeder para popular a tabela `users` no banco de dados para poder fazer testes. No terminal, execute o seguinte comando:

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

- **Executar todos os seeders**: `npx sequelize-cli db:seed:all`
- **Reverter todos os seeders**: `npx sequelize-cli db:seed:undo:all`

Com esses passos, você poderá facilmente popular sua tabela `users` com dados de teste e usar para testar sua API.

---

## Testando as APIs no Postman

Para testar as APIs no **Postman**, você pode seguir esses passos:

### 1. **Verifique se o servidor está rodando**
Antes de começar a testar as rotas no Postman, certifique-se de que o servidor está funcionando corretamente. Quando você rodar o comando `npm run dev`, o servidor deverá estar acessível, normalmente na URL `http://localhost:3001`.

### 2. **Teste cada uma das rotas no Postman**

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
       "name": "Renato Gomes Modificado",
       "email": "renato.modificado@example.com",
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

## Acessando o Swagger

Acesse a documentação em:
   ```
   http://localhost:3001/api-docs
   ```

Você verá uma interface gráfica interativa para testar suas rotas diretamente.

## 🧩 Contribuindo

Sinta-se à vontade para contribuir com o projeto enviando PRs ou relatando problemas na [seção de Issues](https://github.com/seu-usuario/seu-repositorio/issues).

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [seção de Issues](https://github.com/seu-usuario/seu-repositorio/issues) para mais detalhes.