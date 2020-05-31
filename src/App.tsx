import React from 'react';
import {StatusBar} from 'react-native';
import {useAuthContext, AuthContextProvider} from './contexts/AuthContext';
import Routes from './routes';

const App = () => {
  const {initializing} = useAuthContext();
  if (initializing) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
};

const WrappedApp = () => (
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

export default WrappedApp;
