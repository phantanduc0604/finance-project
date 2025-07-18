import NavigationTab from '@/components/common/NavigationTab';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import NetWorth from '../NetWorth';

const TableHeader = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{ height: '100%' }}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Typography width={'180px'} color={theme.palette.text.primary} fontSize={25} fontWeight={300}>
        Person Finance
      </Typography>
      <NavigationTab />
      <NetWorth />
    </Stack>
  );
};

export default TableHeader;
