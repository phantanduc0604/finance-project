import { theme } from '@/theme';
import { Box, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export const BoxCustom = ({ sx, children }: { sx?: SxProps<Theme>; children: ReactNode }) => {
  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.background.paper}`,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '8px',
        p: '20px',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        ...sx
      }}
    >
      {children}
    </Box>
  );
};

export default BoxCustom;
