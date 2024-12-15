import React from 'react';
import { createUser } from '../api.js'; // Adicione a extensão .js
import UserForm from '../components/UserForm.js'; // Adicione a extensão .js
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