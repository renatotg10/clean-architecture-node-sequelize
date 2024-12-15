import express from 'express';
import cors from 'cors';  // Importe o CORS
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swaggerConfig.mjs'; // Caminho para o arquivo de configuração do Swagger
import userRoutes from './routes/userRoutes.mjs';
import sequelize from '../config/database.mjs';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração do CORS para permitir o frontend no localhost:3000
app.use(cors({
    origin: 'http://localhost:3000',  // Permite requisições de localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite métodos específicos
}));

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