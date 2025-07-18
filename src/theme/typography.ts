import type { ThemeOptions } from '@mui/material/styles';
// import { createBreakpoints } from '@mui/system';

// const breakpoints = createBreakpoints({});
/**
 * Style overrides for Material UI components.
 *
 * @see https://mui.com/customization/theme-components/#global-style-overrides
 */
export const typography: ThemeOptions['typography'] = {
  fontFamily: ['Nunito Sans'].join(','),
  errors: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.07px'
  },
  
};
