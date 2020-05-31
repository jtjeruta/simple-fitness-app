import {Theme, ThemeContext} from 'react-native-elements';
import {useContext} from 'react';

export const theme: Theme = {
  colors: {
    primary: '#03a9f4',
  },
  // Button: {
  //   titleStyle: {
  //     color: 'red',
  //   },
  // },
};

export const useThemeContext = () => useContext(ThemeContext);
