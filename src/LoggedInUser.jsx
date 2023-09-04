import { createContext, useState } from 'react';


export const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  return (
    <LoggedInUserContext.Provider value={{ user, setUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
};