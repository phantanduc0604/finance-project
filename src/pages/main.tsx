import { APP_ROUTES } from '@/routers/routes';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import DashBoard from './DashBoard';
import PrivateRoute from '@/routers/PrivateRoute';
import MainLayout from '@/layouts/MainLayout';

const configRoutes: RouteObject[] = [
  {
    path: '*',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={APP_ROUTES.DASHBOARD.path} replace />
      },
      {
        index: true, 
        path: APP_ROUTES.DASHBOARD.path,
        element: <DashBoard />,
      },
    ],
  },
];

export function MainPage() {
  const routes = useRoutes(configRoutes);
  return <>{routes}</>;
}

export default MainPage;
