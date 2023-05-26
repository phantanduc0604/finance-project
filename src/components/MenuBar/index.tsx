'use client';

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from 'helpers/functions';
import { VariantProps, cva } from 'class-variance-authority';
import { Link } from 'react-router-dom';

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

// Menubar
const barVariants = cva('flex', {
	variants: {
		variant: {
			default: 'flex-row items-center space-x-1',
			column: 'flex-col justify-center space-y-1',
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

interface BarProps
	extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>,
		VariantProps<typeof barVariants> {}

const Menubar = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Root>,
	BarProps
>(({ className, size, variant, ...props }, ref) => (
	<MenubarPrimitive.Root
		ref={ref}
		className={cn(barVariants({ variant, size, className }))}
		{...props}
	/>
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

// Trigger
const triggerVariants = cva(
	'flex flex-1 items-center justify-between rounded-[5px]',
	{
		variants: {
			variant: {
				default: 'bg-neutral text-neutral-dark hover:bg-neutral-100',
				active: 'bg-primary text-neutral hover:bg-primary-dark',
			},
			size: {
				default: '',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface triggerProps
	extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>,
		VariantProps<typeof triggerVariants> {
	parentLink?: string;
}

const MenubarTrigger = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Trigger>,
	triggerProps
>(({ className, size, variant, children, parentLink, ...props }, ref) => (
	<MenubarPrimitive.Trigger
		ref={ref}
		className={cn(triggerVariants({ className, size, variant }))}
		{...props}
	>
		{parentLink ? (
			<Link to={parentLink} className={cn('flex-1 p-2 font-medium')}>
				{children}
			</Link>
		) : (
			<div className={cn('flex-1 p-2 font-medium')}>{children}</div>
		)}
	</MenubarPrimitive.Trigger>
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<MenubarPrimitive.SubTrigger
		ref={ref}
		className={cn(
			'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
			inset && 'pl-8',
			className
		)}
		{...props}
	>
		{children}
		<ChevronRight className='ml-auto h-4 w-4' />
	</MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<MenubarPrimitive.SubContent
		ref={ref}
		className={cn(
			'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
			className
		)}
		{...props}
	/>
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

// Content
const contentVariants = cva(
	'z-50 min-w-[12rem] overflow-hidden rounded-[5px] border shadow-md animate-in slide-in-from-top-1',
	{
		variants: {
			variant: {
				default: 'bg-neutral text-neutral-dark',
			},
			size: {
				default: 'p-1 text-[14px]',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface contentProps
	extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>,
		VariantProps<typeof contentVariants> {}

const MenubarContent = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Content>,
	contentProps
>(
	(
		{
			className,
			align = 'start',
			alignOffset = -4,
			sideOffset = 8,
			size,
			variant,
			...props
		},
		ref
	) => (
		<MenubarPrimitive.Portal>
			<MenubarPrimitive.Content
				ref={ref}
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
				className={cn(contentVariants({ className, variant, size }))}
				{...props}
			/>
		</MenubarPrimitive.Portal>
	)
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

// Item
const itemVariants = cva('overflow-hidden rounded-[5px]', {
	variants: {
		variant: {
			default: 'bg-neutral text-neutral-dark hover:bg-neutral-100',
			active: 'bg-neutral-200 text-neutral-dark hover:bg-neutral-300',
		},

		size: {
			default: '',
		},
		type: {
			default: '',
			indent: 'pl-4',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface itemProps
	extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>,
		VariantProps<typeof itemVariants> {
	link?: string;
}

const MenubarItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Item>,
	itemProps
>(({ className, size, variant, link, children, ...props }, ref) => (
	<MenubarPrimitive.Item
		ref={ref}
		className={cn(itemVariants({ className, size, variant }))}
		{...props}
	>
		{link ? (
			<Link className={cn('flex w-full p-2 font-medium')} to={link}>
				{children}
			</Link>
		) : (
			children
		)}
	</MenubarPrimitive.Item>
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<MenubarPrimitive.CheckboxItem
		ref={ref}
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		checked={checked}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<MenubarPrimitive.ItemIndicator>
				<Check className='h-4 w-4' />
			</MenubarPrimitive.ItemIndicator>
		</span>
		{children}
	</MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<MenubarPrimitive.RadioItem
		ref={ref}
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<MenubarPrimitive.ItemIndicator>
				<Circle className='h-2 w-2 fill-current' />
			</MenubarPrimitive.ItemIndicator>
		</span>
		{children}
	</MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<MenubarPrimitive.Label
		ref={ref}
		className={cn(
			'px-2 py-1.5 text-sm font-semibold',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<MenubarPrimitive.Separator
		ref={ref}
		className={cn('-mx-1 my-1 h-px bg-muted', className)}
		{...props}
	/>
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn(
				'ml-auto text-xs tracking-widest text-muted-foreground',
				className
			)}
			{...props}
		/>
	);
};
MenubarShortcut.displayname = 'MenubarShortcut';

export {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
	MenubarLabel,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarPortal,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarGroup,
	MenubarSub,
	MenubarShortcut,
};
