import { createContext, useState } from 'react';


export const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
  const [user, SetUser] = useState(null);

  return (
    <LoggedInUserContext.Provider value={{ user, SetUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
};