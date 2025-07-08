import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../features/user/userSlice';

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: `User ${Date.now()}`, // ім'я унікальне за часом
    };
    dispatch(setUser(newUser));
  };

  return (
    <div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserList;
