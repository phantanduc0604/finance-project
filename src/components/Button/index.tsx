import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from 'helpers/functions';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
	{
		variants: {
			variant: {
				default: 'bg-primary text-white hover:bg-primary/90',
				active: 'bg-primary text-white hover:bg-primary/90',
				'no-border': 'bg-transparent text-neutral-dark',
				outline:
					'bg-neutral text-neutral-dark hover:bg-neutral-300 border border-neutral-400',
				icon: 'rounded-full bg-neutral text-neutral-dark-300 hover:bg-neutral-300',
			},
			size: {
				default: 'h-10 py-2 px-4',
				pagin: 'h-8 w-8',
				icon: 'p-2',
				sm: 'h-9 px-3 rounded-md',
				lg: 'h-11 px-8 rounded-md',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export default Button;
