import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import auth from '@react-native-firebase/auth';
import {Context} from './types';

const AuthContext = createContext<any>({});

const AuthContextProvider: FunctionComponent = props => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  function onAuthStateChanged(curUser: any) {
    setUser(curUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  function signIn() {
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
  }

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(
        'test123@gmail.com',
        'SuperSecretPassword!',
      )
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
  }

  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  const value: Context = {initializing, user, signIn, signUp, signOut};
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext<Context>(AuthContext);

export {AuthContext, AuthContextProvider, useAuthContext};
