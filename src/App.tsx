import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {useAuthContext, AuthContextProvider} from './Contexts/AuthContext';
import Routes from './Routes';

const App = () => {
  const {initializing, user} = useAuthContext();
  if (initializing) {
    return null;
  }

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      {/* <Text>Welcome {user.email}</Text> */}
      <Routes />
      {/* </SafeAreaView> */}
    </>
  );
};

const WrappedApp = () => (
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

export default WrappedApp;
