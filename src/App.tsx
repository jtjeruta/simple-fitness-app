import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {useAuthContext, AuthContextProvider} from './contexts/AuthContext';
import {theme} from './theme';
import Routes from './routes';

const App = () => {
  const {initializing} = useAuthContext();
  if (initializing) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const WrappedApp = () => (
  <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AuthContextProvider>
);

export default WrappedApp;
