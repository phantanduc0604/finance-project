import { IconProps, initPropIcon18 } from 'types/icon';

export const Pencil = (props: IconProps) => {
	return (
		<svg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_1572_2565)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12.9697 0.96967C13.2626 0.676777 13.7374 0.676777 14.0303 0.96967L17.0303 3.96967C17.3232 4.26256 17.3232 4.73744 17.0303 5.03033C16.7374 5.32322 16.2626 5.32322 15.9697 5.03033L12.9697 2.03033C12.6768 1.73744 12.6768 1.26256 12.9697 0.96967Z'
					fill='currentColor'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M10.7197 3.21967C11.0126 2.92678 11.4875 2.92678 11.7803 3.21967L14.7803 6.21967C15.0732 6.51256 15.0732 6.98744 14.7803 7.28033L6.15535 15.9053C6.06306 15.9976 5.94828 16.0642 5.82236 16.0986L1.69736 17.2236C1.4377 17.2944 1.16 17.2206 0.969687 17.0303C0.779375 16.84 0.705628 16.5623 0.776445 16.3027L1.90144 12.1777C1.93579 12.0517 2.0024 11.937 2.09469 11.8447L10.7197 3.21967ZM3.29618 12.7645L2.56893 15.4311L5.23552 14.7038L13.1894 6.75L11.25 4.81066L3.29618 12.7645Z'
					fill='currentColor'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1572_2565'>
					<rect width='18' height='18' fill='currentColor' />
				</clipPath>
			</defs>
		</svg>
	);
};

Pencil.defaultProps = initPropIcon18;
