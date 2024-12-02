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
    const users = await findUser(req.params.id);
    res.status(200).json(users || 'Usuário não encontrado');
});

router.put('/:id', async (req, res) => {
    const users = await modifyUser(req.params.id, req.body);
    res.status(200).json(users || 'Usuário não encontrado');
});

router.delete('/:id', async (req, res) => {
    const users = await removeUser(req.params.id);
    res.status(200).json(users || 'Usuário não encontrado');
});

export default router;