// theme/overrides/Menu.ts
import { Theme } from '@mui/material/styles';

export default function Menu(_: Theme): Theme['components'] {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: '8px',
          boxShadow: '0px 6px 16px 0px #0000003D'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          // padding: '12px 16px',
          justifyContent: 'flex-start',
          fontWeight: 600,
          fontSize: '14px',
          color: '#292933',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    }
  };
}
