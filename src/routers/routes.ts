export const routes = {
	default: '/',
	auth: {
		login: '/login',
	},
	account: {
		default: '/account',
		user: {
			list: '/account/user',
		},
		admin: {
			list: '/account/admin',
		},
	},
	product: {
		list: '/product',
	},
	store: {
		list: '/store',
	},
	promotion: {
		list: '/promotion',
	},
	voucher: {
		list: '/voucher',
	},
	reward: {
		list: '/reward',
	},
	setting: {
		default: '/setting',
		product_category: {
			list: '/setting/product-category',
		},
	},
	flagged_content: {
		list: '/flag-content',
	},
};
