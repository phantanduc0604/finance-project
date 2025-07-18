import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)(({ theme }) => [
  { 
    borderRadius: '8px',
    padding: 0,
    color: theme.palette.grey[500],
    '&.active': {
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.primary.light,
    },
  },
  theme.applyStyles('dark', {
    '&.active': {
      color: theme.palette.primary.dark,
    },
  }),
]);
