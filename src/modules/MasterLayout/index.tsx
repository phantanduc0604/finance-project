import clsx from 'clsx';
import MenuLeft from 'components/MenuLeft';
import { useAtom } from 'jotai';
import { Outlet } from 'react-router-dom';
import { openMenu } from 'store/global';

const MasterLayout = () => {
	const [open] = useAtom(openMenu);
	const w = {
		menu: {
			1: 'w-[254px]',
			2: 'w-[56px]',
		},
		outlet: {
			1: 'w-[calc(100%-254px)]',
			2: 'w-[calc(100%-56px)]',
		},
	};
	return (
		<div className='h-screen'>
			<div className='flex h-full'>
				<div className={clsx('duration-300', `${w.menu[open ? 1 : 2]}`)}>
					<MenuLeft />
				</div>
				<div
					className={clsx(
						'duration-300 overflow-auto bg-neutral-100',
						`${w.outlet[open ? 1 : 2]}`
					)}
				>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MasterLayout;
