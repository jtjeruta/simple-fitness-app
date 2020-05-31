import {Theme, ThemeContext} from 'react-native-elements';
import {useContext} from 'react';

export const theme: Theme = {
  // Button: {
  //   titleStyle: {
  //     color: 'red',
  //   },
  // },
};

export const useThemeContext = () => useContext(ThemeContext);
