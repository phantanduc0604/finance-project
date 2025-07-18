import { Box, useMediaQuery, useTheme } from '@mui/material';
import NavigationTab from '../NavigationTab';
import NetWorth from './components/NetWorth';
import TableHeader from './components/TabletHeader';
import MobileHeader from './components/MobileHeader';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  return <Box m={1} height={'50px'}>{isMobile ? <MobileHeader /> : <TableHeader />}</Box>;
};

export default Header;
