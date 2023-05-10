import { createTheme } from '@mui/material/styles';

export const globalStyle = {
  body: {
    margin: 0,
    padding: 0,
  },
  'box-sizing': 'border-box',
};

export const theme = createTheme({
  palette: {
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    primary: {
      dark: '#020d3f',
      main: '#123449',
      light: '#244B63',
      contrastText: 'linear-gradient( #020d3f, #800080)',
    },
    secondary: {
      dark: '#777777',
      main: '#909090',
      light: '#ABABAB',
    },
    error: {
      dark: '#FF554D',
      main: '#E46962',
      light: '#FFBA8F',
    },
  },
});
