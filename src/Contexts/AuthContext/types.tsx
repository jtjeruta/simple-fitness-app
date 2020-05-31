import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type Context = {
  initializing: boolean;
  user: FirebaseAuthTypes.User | null;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signOut: () => void;
};
