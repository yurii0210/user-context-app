import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users] = useState([
    { id: 1, name: 'Yurii', email: 'yurii@example.com' },
    { id: 2, name: 'Anna', email: 'anna@example.com' },
  ]);

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
};
