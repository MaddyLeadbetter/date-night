/* eslint-disable unused-imports/no-unused-vars */
import { createTheme } from '@mui/material/styles';

import { neutral, pink, teal } from './colours';

declare module '@mui/material/styles/' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

declare module '@mui/material' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
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
    neutral: {
      main: neutral[500],
      light: neutral[300],
      dark: neutral[700],
      contrastText: '#00000'
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
