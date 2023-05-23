import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

// authenticate
const Login = lazy(() => import('modules/Authentication/Login'));

// Layout
const MasterLayout = lazy(() => import('modules/MasterLayout'));

// modules
const User = lazy(() => import('modules/Account/User'));

const Routers = () => {
	return (
		<Routes>
			<Route path={routes.auth.login} element={<Login />}></Route>
			<Route path={routes.default} element={<MasterLayout />}>
				<Route
					index
					element={<Navigate to={routes.account.user.list} replace />}
				/>
				<Route path={routes.account.user.list} element={<User />} />
			</Route>

			<Route path='*' element={<Navigate to={routes.default} replace />} />
		</Routes>
	);
};

export default Routers;
