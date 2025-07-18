
import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router';

interface Props {
  children: any;
  redirectTo: string;
}

export const RedirectAuth = ({ children, redirectTo }: Props) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default RedirectAuth;
