'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'assets/icons';

import { cn } from 'helpers/functions';
import { VariantProps, cva } from 'class-variance-authority';
import { Link } from 'react-router-dom';

const Accordion = AccordionPrimitive.Root;

// Accordion Item
const itemVariants = cva('', {
	variants: {
		variant: {
			default: 'border-b',
			none: 'border-none',
			active: '',
		},
		size: {
			default: '',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface ItemProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
		VariantProps<typeof itemVariants> {}

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	ItemProps
>(({ className, variant, size, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(itemVariants({ variant, size, className }))}
		{...props}
	/>
));
AccordionItem.displayName = 'AccordionItem';

// AccordionTrigger
const triggerVariants = cva(
	'flex flex-1 items-center justify-between rounded-[5px] transition-all [&[data-state=open]>svg]:rotate-180',
	{
		variants: {
			variant: {
				default: 'bg-neutral text-neutral-dark hover:bg-neutral-100',
				active: 'bg-primary text-neutral hover:bg-primary-dark',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface TriggerProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
		VariantProps<typeof triggerVariants> {
	parentLink?: string;
}

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	TriggerProps
>(({ className, variant, children, parentLink, ...props }, ref) => (
	<AccordionPrimitive.Header className='flex'>
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(triggerVariants({ variant, className }))}
			{...props}
		>
			{parentLink ? (
				<Link to={parentLink} className={cn('flex-1 p-2 font-medium')}>
					{children}
				</Link>
			) : (
				<div
					className={cn(
						'flex flex-1 items-center justify-between p-2 font-medium'
					)}
				>
					{children}
					<ChevronDown className='h-4 w-4 transition-transform duration-200' />
				</div>
			)}
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// AccordionContent
const contentVariants = cva(
	'rounded-[5px] overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
	{
		variants: {
			variant: {
				default: 'bg-neutral text-neutral-dark hover:bg-neutral-100',
				active: 'bg-neutral-200 text-neutral-dark hover:bg-neutral-300',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface ContentProps
	extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
		VariantProps<typeof contentVariants> {
	link?: string;
}

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	ContentProps
>(({ className, variant, children, link, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(contentVariants({ variant, className }))}
		{...props}
	>
		{link ? (
			<Link to={link} className={cn('indent-10 flex w-full p-2 font-medium')}>
				{children}
			</Link>
		) : (
			children
		)}
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
