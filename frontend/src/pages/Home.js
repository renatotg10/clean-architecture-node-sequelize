import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api.js';
import UserTable from '../components/UserTable.js';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <UserTable users={users} deleteUser={handleDelete} />
    </div>
  );
};

export default Home;