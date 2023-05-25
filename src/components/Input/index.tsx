import * as React from 'react';

import { cn } from 'helpers/functions';
import { VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
	'flex rounded-md border border-input file:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-neutral text-neutral-dark placeholder:text-neutral-400 file:bg-transparent',
				dark: 'bg-neutral-dark-500 text-neutral',
			},
			size: {
				default: 'h-10 px-3 py-2 text-sm w-full file:text-sm file:font-medium',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, size, variant, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(inputVariants({ className, size, variant }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = 'Input';

export { Input };
