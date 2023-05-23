import { IconProps, initPropIcon } from 'types/icon';

export const Trash = (props: IconProps) => {
	return (
		<svg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M1.5 4.5C1.5 4.08579 1.83579 3.75 2.25 3.75H15.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25H2.25C1.83579 5.25 1.5 4.91421 1.5 4.5Z'
				fill='currentColor'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M7.5 2.25C7.30109 2.25 7.11032 2.32902 6.96967 2.46967C6.82902 2.61032 6.75 2.80109 6.75 3V3.75H11.25V3C11.25 2.80109 11.171 2.61032 11.0303 2.46967C10.8897 2.32902 10.6989 2.25 10.5 2.25H7.5ZM12.75 3.75V3C12.75 2.40326 12.5129 1.83097 12.091 1.40901C11.669 0.987053 11.0967 0.75 10.5 0.75H7.5C6.90326 0.75 6.33097 0.987053 5.90901 1.40901C5.48705 1.83097 5.25 2.40326 5.25 3V3.75H3.75C3.33579 3.75 3 4.08579 3 4.5V15C3 15.5967 3.23705 16.169 3.65901 16.591C4.08097 17.0129 4.65326 17.25 5.25 17.25H12.75C13.3467 17.25 13.919 17.0129 14.341 16.591C14.7629 16.169 15 15.5967 15 15V4.5C15 4.08579 14.6642 3.75 14.25 3.75H12.75ZM4.5 5.25V15C4.5 15.1989 4.57902 15.3897 4.71967 15.5303C4.86032 15.671 5.05109 15.75 5.25 15.75H12.75C12.9489 15.75 13.1397 15.671 13.2803 15.5303C13.421 15.3897 13.5 15.1989 13.5 15V5.25H4.5Z'
				fill='currentColor'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M7.5 7.5C7.91421 7.5 8.25 7.83579 8.25 8.25V12.75C8.25 13.1642 7.91421 13.5 7.5 13.5C7.08579 13.5 6.75 13.1642 6.75 12.75V8.25C6.75 7.83579 7.08579 7.5 7.5 7.5Z'
				fill='currentColor'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M10.5 7.5C10.9142 7.5 11.25 7.83579 11.25 8.25V12.75C11.25 13.1642 10.9142 13.5 10.5 13.5C10.0858 13.5 9.75 13.1642 9.75 12.75V8.25C9.75 7.83579 10.0858 7.5 10.5 7.5Z'
				fill='currentColor'
			/>
		</svg>
	);
};

Trash.defaultProps = initPropIcon;
