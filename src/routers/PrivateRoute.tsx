import { Navigate, Outlet } from 'react-router';
import { APP_ROUTES } from './routes';
import { useAuth } from '@/hooks';

interface Props {
  children: any;
}

export const PrivateRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();

  if (false) {
    return <Navigate to={APP_ROUTES.AUTH.LOGIN.to} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default PrivateRoute;
