/* eslint-disable unused-imports/no-unused-vars */
import { createTheme } from '@mui/material/styles';

import { neutral, pink, teal } from './colours';

declare module '@mui/material/styles/' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const mainTheme = createTheme({
  palette: {
    primary: {
      main: pink[500]
    },
    secondary: {
      main: teal[500]
    },
    text: {
      primary: neutral[700],
      secondary: neutral[500],
      disabled: neutral[100]
    }
  },
  typography: {
    fontFamily: '__Nunito_3dc409, __Nunito_Fallback_3dc409'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1920
    }
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#e50026'
        }
      }
    }
  }
});

export default mainTheme;
