import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const Login = lazy(() => import('modules/Authentication/Login'));

const Routers = () => {
	return (
		<Routes>
			<Route path={routes.auth.login} element={<Login />}></Route>
			<Route path={routes.default} element={<div>Dashboard</div>}></Route>

			<Route path='*' element={<Navigate to={routes.default} replace />} />
		</Routes>
	);
};

export default Routers;
