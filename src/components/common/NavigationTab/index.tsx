import { Box, Stack } from '@mui/material';
import { StyledNavLink } from './styles';
import { menuRouteParent } from './constants';

const NavigationTab = () => {
  return (
    <Stack direction="row" justifyContent={'space-between'} spacing={1} alignItems={'center'}>
      {menuRouteParent.map((item) => (
        <StyledNavLink
          className={({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')}
          key={item.label}
          to={item.path}
        >
          <Box height={40} width={40}>{item.icon}</Box>
        </StyledNavLink>
      ))}
    </Stack>
  );
};

export default NavigationTab;
