import { theme } from '@/theme';
import { converNumberToCurrent } from '@/utils';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { lightGreen } from '@mui/material/colors';

const NetWorth = () => {
  const theme = useTheme();
  console.log('theme',theme);
  return (
    <Box width={'180px'} padding={0}>
      <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'}>
        <Typography
          sx={{ backgroundColor: lightGreen[300], fontWeight: 600 , borderRadius: '5px'}}
          padding={'2px'}
          fontSize={12}
          color={theme.palette.success.main}
          fontWeight={300}
        >
          3.54%
        </Typography>
      </Stack>
      <Typography
        fontSize={20}
        textAlign={'right'}
        color={theme.palette.text.primary}
      >
        {converNumberToCurrent(100000000)}
      </Typography>
    </Box>
  );
};

export default NetWorth;
