import React, {createContext, useContext, useState} from 'react';

const User = createContext();

const UserContext = ({children}) => {
  const [token, setToken] = useState('0');

  return <User.Provider value={{token, setToken}}>{children}</User.Provider>;
};

export default UserContext;

export const UserState = () => {
  return useContext(User);
};
