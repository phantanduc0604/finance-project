import { createQueryString } from 'helpers/functions';
import { Fragment, memo, ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface IRoutes {
	element: ReactNode;
	isAllowed: boolean;
	redirect: string;
}

const PrivateRoute = memo(({ isAllowed, redirect, element }: IRoutes) => {
	const location = useLocation();

	if (isAllowed) return <Fragment>{element ? element : <Outlet />}</Fragment>;
	else
		return (
			<Navigate
				to={{
					pathname: redirect,
					search: createQueryString({ from: location.pathname }),
				}}
				replace
			/>
		);
});

export default PrivateRoute;
