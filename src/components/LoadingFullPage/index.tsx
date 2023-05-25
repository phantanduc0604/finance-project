import { Loading } from 'assets/icons';
import { cn } from 'helpers/functions';
import React from 'react';

interface ILoadingFullPage {
	blur?: boolean;
	show?: boolean;
}

const LoadingFullPage = React.memo((props: ILoadingFullPage) => {
	const { blur, show } = props;
	if (!show) return null;
	return (
		<div
			className={cn(
				'w-screen h-screen flex items-center justify-center',
				'absolute',
				blur ? 'bg-neutral/50' : 'bg-neutral'
			)}
		>
			<Loading height='48px' width='48px' />
		</div>
	);
});

export default LoadingFullPage;
