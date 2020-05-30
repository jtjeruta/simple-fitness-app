import React, {useState, useEffect} from 'react';
import {StatusBar, View, Text} from 'react-native';
// import Routes from './Routes';
import auth from '@react-native-firebase/auth';

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<any>();

  // Handle user state changes
  function onAuthStateChanged(curUser: any) {
    setUser(curUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    //sinin
    auth()
      // .createUserWithEmailAndPassword(
      .signInWithEmailAndPassword('test123@gmail.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

    // return () => {
    //   //signout
    //   auth()
    //     .signOut()
    //     .then(() => console.log('User signed out!'));
    // };
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      {/* <Routes /> */}
      <Text>Welcome {user.email}</Text>
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
