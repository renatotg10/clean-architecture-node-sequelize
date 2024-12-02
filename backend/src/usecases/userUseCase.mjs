import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../infrastructure/repositories/userRepository.mjs';

export const createNewUser = async (data) => createUser(data);

export const listAllUsers = async () => getAllUsers();

export const findUser = async (id) => getUserById(id);

export const modifyUser = async (id, data) => updateUser(id, data);

export const removeUser = async (id) => deleteUser(id);