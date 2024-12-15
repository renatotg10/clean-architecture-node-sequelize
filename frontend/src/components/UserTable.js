import React from 'react';
import { Link } from 'react-router-dom';

const UserTable = ({ users, deleteUser }) => (
  <table className="table table-bordered mt-3">
    <thead className="thead-dark">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <Link className="btn btn-primary btn-sm mx-1" to={`/edit/${user.id}`}>Edit</Link>
            <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteUser(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;