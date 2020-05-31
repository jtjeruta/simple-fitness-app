import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Context} from './types';

const AuthContext = createContext<any>({});

const AuthContextProvider: FunctionComponent = props => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  function onAuthStateChanged(curUser: FirebaseAuthTypes.User | null) {
    setUser(curUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  function signIn(email: string, password: string) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // eslint-disable-next-line no-console
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          // eslint-disable-next-line no-console
          console.log('That email address is invalid!');
        }

        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  function signUp(email: string, password: string) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // eslint-disable-next-line no-console
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          // eslint-disable-next-line no-console
          console.log('That email address is invalid!');
        }

        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  function signOut() {
    auth()
      .signOut()
      // eslint-disable-next-line no-console
      .then(() => console.log('User signed out!'));
  }

  const value: Context = {initializing, user, signIn, signUp, signOut};
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext<Context>(AuthContext);

export {AuthContext, AuthContextProvider, useAuthContext};
