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
