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
