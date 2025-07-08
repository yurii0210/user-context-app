import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserItem from './UserItem';

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
