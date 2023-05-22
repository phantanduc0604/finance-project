import { ClassValue, clsx } from 'clsx';
import { PhoneNumberUtil as PNU } from 'google-libphonenumber';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const formatMoney = (
	num: number | string,
	decimalCount = 2,
	thousands = ','
) => {
	if (!num) return 0;
	const n = 'string' === typeof num ? +num : num;

	if (!decimalCount)
		return n
			.toFixed(1)
			.replace(/\d(?=(\d{3})+\.)/g, `$&${thousands}`)
			.replace('.0', '');
	return n.toFixed(decimalCount).replace(/\d(?=(\d{3})+\.)/g, `$&${thousands}`);
};

export const getPageAfterDelete = (
	totalCurrent: number,
	pageCurrent: number,
	pageSize: number,
	num: number
) => {
	let page = pageCurrent;
	if (pageCurrent === num) page = page - 1;
	else {
		const totalNew = totalCurrent - num;
		const maxPage = Math.ceil(totalNew / pageSize);
		if (pageCurrent > maxPage) page = page - 1;
	}
	if (page <= 0) page = 1;
	return page;
};

export const validatePhone = (number: string) => {
	if (number.includes('+')) number = Number(number).toString();

	if (number.length > 20 || number.length < 5) return false;
	const phoneUtil = PNU.getInstance();
	const value = phoneUtil.parse(`+${number}`);
	return phoneUtil.isValidNumber(value);
};

export const parsePhone = (number: string) => {
	const phoneUtil = PNU.getInstance();
	const value = phoneUtil.parse(number.includes('+') ? number : `+${number}`);
	return {
		code: value.getCountryCode(),
		number: value.getNationalNumber(),
		full:
			value.getCountryCode() && value.getNationalNumber()
				? `${value.getCountryCode()}${value.getNationalNumber()}`
				: '',
	};
};

/**
 * Được dùng chung với hàm `createQueryString` để chuyển đổi từ `string`
 * về dạng query
 *
 * @param path
 * @returns
 */
export const parseURL = (path: string) => {
	const search = new URLSearchParams(path);
	// eslint-disable-next-line
	const param: any = {};
	for (const key of search.keys()) {
		const val = search.get(key);
		try {
			param[key] = JSON.parse(val || '');
		} catch (e) {
			param[key] = val;
		}
	}
	return param;
};

/**
 * Dùng chung với `parseURL` để chuyển đổi từ query về string
 *
 * @param query
 * @returns
 */
export const createQueryString = (query: object) => {
	return Object.keys(query || {})
		.map((key) => {
			let val = query[key];
			if (val !== null && typeof val === 'object') val = JSON.stringify(val);
			return `${key}=${encodeURIComponent(`${val}`)}`;
		})
		.join('&');
};

/**
 * Dùng để thêm 'Z' vào date sau khi lấy dữ liệu từ api
 * @param date
 * @param valueDefault trả về value này nếu date = undefine
 * */
export const dateZ = (date?: string, valueDefault: Date = new Date()) => {
	return date ? new Date(date + 'Z') : valueDefault;
};
