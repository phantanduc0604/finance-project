import { PriceKaki } from 'assets/icons';
import { cn } from 'helpers/functions';
import { useAtom } from 'jotai';
import { openMenu } from 'store/menu';

const MenuLeft = () => {
	const [open] = useAtom(openMenu);

	return (
		<div className='w-full'>
			<div
				className={cn(
					'w-full h-[56px] bg-primary p-4 gap-4',
					'border-b-neutral-400 border-b',
					'flex items-center',
					'text-neutral font-bold',
					'overflow-x-hidden',
					'whitespace-nowrap'
				)}
			>
				<div>
					<PriceKaki width='24px' height='24px' />
				</div>
				<span className={cn(open ? 'block' : 'hidden', 'duration-300')}>
					PriceKaki CMS
				</span>
			</div>
		</div>
	);
};

export default MenuLeft;
