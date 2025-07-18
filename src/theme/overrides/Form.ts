import { Theme } from '@mui/material/styles';

export default function Forms(theme: Theme): Theme['components'] {
  return {
    MuiFormControl: {},
    MuiFormControlLabel: {},
    MuiFormGroup: {},
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: '8px',
          fontWeight: '700',
          fontSize: '20px',
          color: theme.palette.text.primary,
          lineHeight: '20px',
          letterSpacing: '0',
          '&.Mui-focused': {
            color: theme.palette.text.primary
          }
        },
        focused: {
          color: theme.palette.text.primary
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& > .MuiOutlinedInput-input': {
            padding: '12px 18px',
            fontWeight: '500',
            fontSize: '16px',
            color: theme.palette,
            lineHeight: '16px',
            letterSpacing: '0'
          },
          '& > .MuiOutlinedInput-notchedOutline': {
            borderRadius: '8px',
            border: `1px solid ${theme.palette.text.primary}`
          }
        }
      }
    }
  };
}
