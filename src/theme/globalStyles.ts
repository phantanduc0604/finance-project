import { GlobalStylesProps } from '@mui/material';

const globalStyles: GlobalStylesProps['styles'] = {
  '*': {
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
  },
  '*::-webkit-scrollbar': {
    width: '6px',
    // height: '10px',
    // position: 'absolute',
    // borderRadius: '6px',
    backgroundColor: '#FFFFFF',
  },
  '*::-webkit-scrollbar-thumb': {
    backdropFilter: 'blur(5px)',
    backgroundColor: '#CED3DE',
    borderRadius: '10px',
    width: '6px',
    // height: '5px'
  },
  html: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    WebkitOverflowScrolling: 'touch',
  },
  body: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
  '#root': {
    width: '100vw',
    height: '100vh',
  },
  input: {
    '&[type=number]': {
      MozAppearance: 'textfield',
      '&::-webkit-outer-spin-button': {
        margin: 0,
        WebkitAppearance: 'none',
      },
      '&::-webkit-inner-spin-button': {
        margin: 0,
        WebkitAppearance: 'none',
      },
    },
  },
  ':root': {},
};

export default globalStyles;
