import { PRIMARY_COLOR, SECONDARY_COLOR } from '@constants/colors';
import { DefaultTheme } from 'react-native-paper';

export default {
  ...DefaultTheme,
  roundness: 14,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
    accent: SECONDARY_COLOR,
  },
};
