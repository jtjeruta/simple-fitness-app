import React, {FunctionComponent, createContext, useContext} from 'react';

const AuthContext = createContext<any>({});

const AuthContextProvider: FunctionComponent = props => {
  const value = {};
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export {AuthContext, AuthContextProvider, useAuthContext};
