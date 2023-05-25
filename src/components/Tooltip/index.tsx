'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from 'helpers/functions';
import { VariantProps, cva } from 'class-variance-authority';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = TooltipPrimitive.Content;

const variants = cva(
	'z-50 overflow-hidden rounded-md border shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
	{
		variants: {
			variant: {
				default: 'bg-neutral text-neutral-dark',
				dark: 'bg-neutral-dark-500 text-neutral',
			},
			size: {
				default: 'px-3 py-1.5 text-sm',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface TooltipProps
	extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
		VariantProps<typeof variants> {
	title: string;
	delayDuration?: number;
}

const Tooltip = React.forwardRef<
	React.ElementRef<typeof TooltipContent>,
	TooltipProps
>(
	(
		{
			className,
			size,
			variant,
			sideOffset = 4,
			children,
			title,
			delayDuration = 0,
			...props
		},
		ref
	) => (
		<TooltipProvider delayDuration={delayDuration}>
			<TooltipRoot>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent
					ref={ref}
					sideOffset={sideOffset}
					className={cn(variants({ className, variant, size }))}
					{...props}
				>
					{title}
				</TooltipContent>
			</TooltipRoot>
		</TooltipProvider>
	)
);
Tooltip.displayName = 'Tooltip';

export { Tooltip };
