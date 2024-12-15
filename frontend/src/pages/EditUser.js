import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../api.js';
import UserForm from '../components/UserForm.js';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const { data } = await getUserById(id);
    setUser(data);
  };

  const handleUpdate = async (updatedUser) => {
    await updateUser(id, updatedUser);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
      {user && <UserForm initialData={user} onSubmit={handleUpdate} />}
    </div>
  );
};

export default EditUser;