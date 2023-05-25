import {
	Account,
	FlagContent,
	Product,
	Promotion,
	Reward,
	Setting,
	Store,
	Voucher,
} from 'assets/icons';
import { ReactNode } from 'react';
import { routes } from 'routers/routes';

export interface IMenu {
	title: string;
	icon?: ReactNode;
	link: string;
	sub?: IMenu[];
}

export const menus: IMenu[] = [
	{
		title: 'Accounts',
		icon: <Account />,
		link: routes.account.default,
		sub: [
			{
				title: 'Users',
				link: routes.account.user.list,
			},
			{
				title: 'Admin',
				link: routes.account.admin.list,
			},
		],
	},
	{
		title: 'Products',
		icon: <Product />,
		link: routes.product.list,
	},
	{
		title: 'Store',
		icon: <Store />,
		link: routes.store.list,
	},
	{
		title: 'Promotions',
		icon: <Promotion />,
		link: routes.promotion.list,
	},
	{
		title: 'Vouchers',
		icon: <Voucher />,
		link: routes.voucher.list,
	},
	{
		title: 'Rewards',
		icon: <Reward />,
		link: routes.reward.list,
	},
	{
		title: 'Settings',
		icon: <Setting />,
		link: routes.setting.default,
		sub: [
			{
				title: 'Product Categories',
				link: routes.setting.product_category.list,
			},
		],
	},
	{
		title: 'Flagged Content',
		icon: <FlagContent />,
		link: routes.flagged_content.list,
	},
];
