import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserDetails = ({ userId }) => {
  const { users } = useContext(UserContext);
  const user = users.find(u => u.id === userId);

  return (
    <div style={{ fontSize: '0.9em', color: 'gray' }}>
      Email: {user.email}
    </div>
  );
};

export default UserDetails;
