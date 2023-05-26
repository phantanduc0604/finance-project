import { PriceKaki } from 'assets/icons';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'components/Accordion';
import { cn } from 'helpers/functions';
import { useAtom } from 'jotai';
import { openMenu } from 'store/global';
import { menus } from './constant';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from 'components/MenuBar';
import { Tooltip } from 'components/Tooltip';

const MenuLeft = () => {
	const [open] = useAtom(openMenu);
	const { pathname } = useLocation();
	const [menu, setMenu] = useState(
		menus.find((item) => pathname.includes(item.link))?.link
	);

	const handleChange = (value: string) => () => {
		const newValue = menus.find((item) => value === item.link)?.sub?.length;
		if (Number(newValue) > 0) setMenu(value);
		else setMenu('');
	};

	return (
		<div className='w-full'>
			<div
				className={cn(
					'w-full h-[57px] bg-primary p-4 gap-4',
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
			<div className={cn('w-full px-2 py-4')}>
				{open ? (
					<Accordion
						type='single'
						collapsible
						className='w-full space-y-1'
						value={menu}
					>
						{menus.map((pri) => (
							<AccordionItem key={pri.link} value={pri.link} variant='none'>
								<AccordionTrigger
									variant={pathname.includes(pri.link) ? 'active' : 'default'}
									parentLink={pri.sub?.length ? undefined : pri.link}
									onClick={handleChange(pri.link)}
								>
									<div className='flex gap-4 items-center'>
										{pri.icon}
										{pri.title}
									</div>
								</AccordionTrigger>
								{pri.sub?.map((sub) => (
									<AccordionContent
										key={sub.link}
										link={sub.link}
										variant={pathname.includes(sub.link) ? 'active' : 'default'}
									>
										{sub.title}
									</AccordionContent>
								))}
							</AccordionItem>
						))}
					</Accordion>
				) : (
					<Menubar variant='column'>
						{menus.map((pri) => (
							<MenubarMenu key={pri.link}>
								<Tooltip side='right' align='center' title={pri.title}>
									<MenubarTrigger
										variant={pathname.includes(pri.link) ? 'active' : 'default'}
										parentLink={pri.sub?.length ? undefined : pri.link}
									>
										{pri.icon}
									</MenubarTrigger>
								</Tooltip>
								{!!pri.sub?.length && (
									<MenubarContent align='center' side='right'>
										{pri.sub.map((sub) => (
											<MenubarItem
												key={sub.link}
												link={sub.link}
												variant={
													pathname.includes(sub.link) ? 'active' : 'default'
												}
											>
												{sub.title}
											</MenubarItem>
										))}
									</MenubarContent>
								)}
							</MenubarMenu>
						))}
					</Menubar>
				)}
			</div>
		</div>
	);
};

export default MenuLeft;
