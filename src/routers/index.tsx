
import { Navigate, RouteObject } from 'react-router-dom';
import RedirectAuth from './RedirectAuth';
import { APP_ROUTES } from './routes';
import { MainPage } from '@/pages';
import { PageError } from '@/components/common';

export const configAppRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.path,
    element: <MainPage />
  },
  {
    path: APP_ROUTES.NOT_FOUND.path,
    element: (
      <RedirectAuth redirectTo={APP_ROUTES.AUTH.LOGIN.to}>
        <PageError />
      </RedirectAuth>
    )
  },
  {
    path: '*',
    element: <Navigate to={APP_ROUTES.NOT_FOUND.to} replace />
  }
];

export default configAppRoutes;
