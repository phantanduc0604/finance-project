import { Menu } from 'assets/icons';
import Button from 'components/Button';
import { cn } from 'helpers/functions';
import { useAtom } from 'jotai';
import { openMenu } from 'store/menu';

const User = () => {
	const [open, setOpen] = useAtom(openMenu);
	const handleOpenMenu = () => {
		setOpen(!open);
	};

	return (
		<div>
			<div
				className={cn(
					'w-full h-[56px] px-4',
					'border-b-neutral-400 border-b',
					'flex justify-between items-center'
				)}
			>
				<Button onClick={handleOpenMenu} variant='icon' size='icon'>
					<Menu />
				</Button>
				<div>search</div>
				<Button>Create</Button>
			</div>
			<div>body</div>
		</div>
	);
};

export default User;
