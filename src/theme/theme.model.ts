declare module '@mui/material/styles' {
  // interface CustomPalette {
  //   primary: {
  //     light: string;
  //     main: string;
  //     dark: string;
  //     contrastText: string;
  //   };
  //   primary_shades: {
  //     10: string;
  //     20: string;
  //   };
  //   secondary: {
  //     main: string;
  //   };
  //   grey1: {
  //     light: string;
  //     dark: string;
  //   };
  //   black: {
  //     main: string;
  //     dark: string;
  //   };
  //   white: {
  //     white1: string;
  //     main: string;
  //     white2: string;
  //     white3: string;
  //   };
  //   system: {
  //     main: string;
  //   };
  // }
  // interface CustomTypeBackground {
  //   light: string;
  //   dark: string;
  // }
  // interface CustomTypeText {
  //   light: string;
  //   dark: string;
  // }

  // interface Palette extends CustomPalette {}
  // interface PaletteOptions extends CustomPalette {}
  // interface TypeBackground extends CustomTypeBackground {}
  // interface TypeText extends CustomTypeText {}

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface TypographyVariants {
    errors: React.CSSProperties;
    
  }

  interface TypographyVariantsOptions {
    errors: React.CSSProperties;
    
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    errors: true;

  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    brand: true;
  }
}

export {};
