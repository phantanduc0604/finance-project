import { createTheme } from '@mui/material/styles';
import ComponentsOverrides from './overrides';
import './theme.model';
import { typography } from './typography';
import { blue, deepPurple, grey, yellow } from '@mui/material/colors';

const theme = createTheme({
  components: {},
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: deepPurple[400],
          contrastText: '#fff',
        },
        background: {
          default: grey[50],
          paper: grey[100],
        },
        text: {
          primary: grey[900],
          secondary: grey[700],
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: deepPurple[600],
          contrastText: '#000',
        },
        background: {
          default: grey[900],
          paper: grey[800],
        },
        text: {
          primary: grey[50],
          secondary: grey[400],
        },
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1700,
    },
  },
  typography,
});

// Gắn overrides
theme.components = { ...theme.components, ...ComponentsOverrides(theme) };

export default theme;
