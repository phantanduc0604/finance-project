import { Theme } from '@mui/material/styles';

export default function Button(_: Theme) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#5C59EB',
            color: '#FFFFFF',
            '&.Mui-disabled': {
              backgroundColor: '#CBD0E5',
              color: '#808099'
            }
          }
        },
        // {
        //   props: { variant: 'contained', color: 'secondary' },
        //   style: {}
        // },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            backgroundColor: '#FFFFFF',
            color: '#5C59EB',
            border: '1px #E9EDF5 solid'
            // '&:disabled': {
            //   color: '#808099',
            //   backgroundColor: '#5C59EB1A',
            //   border: 'none'
            // }
          }
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            backgroundColor: '#FFFFFF',
            color: '#808099',
            border: '1px #E9EDF5 solid'
            // '&:hover': {
            //   color: '#5C59EB',
            //   backgroundColor: '#5C59EB1A'
            // }
          }
        },
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            backgroundColor: 'transparent',
            color: '#5C59EB'
          }
        },
        // {
        //   props: { variant: 'text', color: 'secondary' },
        //   style: {}
        // }
      ],
      styleOverrides: {
        root: {
          height: '44px',
          textTransform: 'initial',
          borderRadius: '8px',
          padding: '12px 18px',
          fontWeight: 600,
          fontFamily: 'Outfit',
          lineHeight: '20px ',
          boxShadow: 'none',
          fontSize: 16,
          // '&:hover': {
          //   borderColor: 'transparent'
          // },
          '&:focus': {
            outline: 'none'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          height: '44px',
          textTransform: 'initial',
          borderRadius: '8px',
          fontWeight: 500,
          lineHeight: '14px',
          boxShadow: 'none',
          fontSize: 14,
          '&:hover': {
            // boxShadow: 'none',
            borderColor: 'unset'
          },
          '&:focus': {
            outline: 'none'
          }
        }
      }
    }
  };
}
