import { Navigate, Outlet } from 'react-router-dom';
import { APP_ROUTES } from './routes';
import { useAuth } from '@/hooks';

interface Props {
  children: any;
}

export const PublicRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate replace to={APP_ROUTES.DASHBOARD.to} />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default PublicRoute;
