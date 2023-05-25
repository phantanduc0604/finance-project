import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import LoadingFullPage from 'components/LoadingFullPage';

// authenticate
const Login = lazy(() => import('modules/Authentication/Login'));

// Layout
const MasterLayout = lazy(() => import('modules/MasterLayout'));

// modules
// Account
const User = lazy(() => import('modules/Account/User'));
const Admin = lazy(() => import('modules/Account/Admin'));

// Product
const Products = lazy(() => import('modules/Products'));

const Routers = () => {
	return (
		<Suspense fallback={<LoadingFullPage show={true} />}>
			<Routes>
				<Route path={routes.auth.login} element={<Login />}></Route>
				<Route path={routes.default} element={<MasterLayout />}>
					<Route
						index
						element={<Navigate to={routes.account.user.list} replace />}
					/>
					{/* Account */}
					<Route path={routes.account.user.list} element={<User />} />
					<Route path={routes.account.admin.list} element={<Admin />} />

					{/* Product */}
					<Route path={routes.product.list} element={<Products />} />
				</Route>

				<Route path='*' element={<Navigate to={routes.default} replace />} />
			</Routes>
		</Suspense>
	);
};

export default Routers;
