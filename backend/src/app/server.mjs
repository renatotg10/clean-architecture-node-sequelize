import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import sequelize from '../config/database.mjs';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/users', userRoutes);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados!');
        app.listen(PORT, () => console.log(`Servidor rotando na porta ${PORT}`));
    } catch (error) {
        console.log('Erro ao conectar ao banco: ', error);
    }
})();