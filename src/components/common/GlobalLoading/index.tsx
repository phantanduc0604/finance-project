import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface GlobalLoadingProps {
  open: boolean;
}

export const GlobalLoading = ({ open }: GlobalLoadingProps) => {
  return (
    <Backdrop
      sx={{
        color: 'primary.main',
        zIndex: (theme: any) => (theme.zIndex.drawer > 1300 ? theme.zIndex.drawer + 1 : 1301)
      }}
      open={open}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

