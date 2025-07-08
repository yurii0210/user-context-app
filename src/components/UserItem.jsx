import UserDetails from './UserDetails';

const UserItem = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong>
      <UserDetails userId={user.id} />
    </li>
  );
};

export default UserItem;
