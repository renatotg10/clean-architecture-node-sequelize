require('dotenv').config();  // Carregar variáveis de ambiente do arquivo .env

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'crud_database',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306
  },
  test: {
    username: 'root',
    password: 'admin',
    database: 'crud_database_test',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'admin',
    database: 'crud_database_prod',
    host: 'localhost',
    dialect: 'mysql',
  }
};
