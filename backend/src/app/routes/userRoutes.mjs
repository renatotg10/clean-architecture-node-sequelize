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
