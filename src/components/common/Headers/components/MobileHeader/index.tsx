import { IconButton, Stack, Drawer, Typography, Box, useTheme } from '@mui/material';
import NetWorth from '../NetWorth';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import { menuRouteParent } from '@/components/common/NavigationTab/constants';
import { StyledNavLink } from '@/components/common/NavigationTab/styles';

const MobileHeader = () => {
   const theme = useTheme();
  const [isOpen, setIsOpeng] = useState(false);

  const handleOpenDrawer = () => setIsOpeng(true);
  const handleCloseDrawer = () => setIsOpeng(false);
  return (
    <>
      <Stack
        sx={{ height: '100%' }}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <IconButton
          sx={{ padding: 0 }}
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpenDrawer}
        >
          <Menu sx={{ height: '40px', width: '40px' }} />
        </IconButton>
        <NetWorth />
      </Stack>
      <Drawer anchor={'left'} open={isOpen} onClose={handleCloseDrawer}>
        <Stack sx={{ width: '200px' }}>
          <Typography
            color={theme.palette.text.primary}
            fontSize={25}
            fontWeight={300}
            textAlign={'center'}
          >
            Person Finance
          </Typography>
          {menuRouteParent.map((item) => (
            <StyledNavLink
              className={({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')}
              key={item.label}
              to={item.path}
            >
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Box height={40} width={40}>
                  {item.icon}
                </Box>
                <Typography>{item.label}</Typography>
              </Stack>
            </StyledNavLink>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default MobileHeader;
