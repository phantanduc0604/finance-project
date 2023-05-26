import { Menu } from 'assets/icons';
import Button from 'components/Button';
import { cn } from 'helpers/functions';
import { useAtom } from 'jotai';
import { ReactNode } from 'react';
import { openMenu } from 'store/global';

interface HeaderProps {
	children?: ReactNode;
}

const Header = (props: HeaderProps) => {
	const { children } = props;

	const [open, setOpen] = useAtom(openMenu);
	const handleOpenMenu = () => {
		setOpen(!open);
	};

	return (
		<div
			className={cn(
				'w-full h-[57px] px-4 bg-neutral',
				'border-b-neutral-400 border-b',
				'flex justify-between items-center'
			)}
		>
			<Button onClick={handleOpenMenu} variant='icon' size='icon'>
				<Menu />
			</Button>
			{children}
		</div>
	);
};

export default Header;
