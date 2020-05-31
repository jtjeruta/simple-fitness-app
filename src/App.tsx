import React from 'react';
// import {StatusBar} from 'react-native';
import {ThemeProvider, Button} from 'react-native-elements';
import {useAuthContext, AuthContextProvider} from './contexts/AuthContext';
import {theme} from './theme';
// import Routes from './routes';

const App = () => {
  const {initializing} = useAuthContext();
  if (initializing) {
    return null;
  }

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <Routes /> */}
      <Button title="Hello" />
    </>
  );
};

const WrappedApp = () => (
  <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AuthContextProvider>
);

export default WrappedApp;
