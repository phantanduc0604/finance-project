import * as React from 'react';

import { cn } from 'helpers/functions';
import { VariantProps, cva } from 'class-variance-authority';

// Table
const tableVariants = cva(
	'w-full caption-bottom border-separate border-spacing-0',
	{
		variants: {
			variant: {
				default: '',
			},
			size: {
				default: 'text-sm',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface TableProps
	extends React.HTMLAttributes<HTMLTableElement>,
		VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
	({ className, size, variant, ...props }, ref) => (
		<div className='w-full overflow-auto'>
			<table
				ref={ref}
				className={cn(tableVariants({ className, size, variant }))}
				{...props}
			/>
		</div>
	)
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={cn('[&_tr:last-child]:border-0', className)}
		{...props}
	/>
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn('bg-primary font-medium text-primary-foreground', className)}
		{...props}
	/>
));
TableFooter.displayName = 'TableFooter';

// Row
const rowVariants = cva('border-b transition-colors', {
	variants: {
		variant: {
			default:
				'bg-neutral [&>td]:hover:bg-gray-pale data-[state=selected]:bg-neutral-400',
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

export interface RowProps
	extends React.HTMLAttributes<HTMLTableRowElement>,
		VariantProps<typeof rowVariants> {}

const TableRow = React.forwardRef<HTMLTableRowElement, RowProps>(
	({ className, variant, size, ...props }, ref) => (
		<tr
			ref={ref}
			className={cn(rowVariants({ className, size, variant }))}
			{...props}
		/>
	)
);
TableRow.displayName = 'TableRow';

// Head
const headVariants = cva(
	'text-left align-middle [&:has([role=checkbox])]:pr-0',
	{
		variants: {
			variant: {
				default:
					'bg-blue-white text-neutral-dark border-l-[1px] border-b-[1px] border-neutral-300 first:border-l-0 last:border-r-0',
			},
			size: {
				default: 'h-12 px-4 font-medium',
				icon: 'p-2',
			},
			type: {
				default: '',
				'sticky-right': 'sticky right-0 border-l',
				'sticky-left': 'sticky left-0 border-r',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			type: 'default',
		},
	}
);

export interface HeadProps
	extends React.ThHTMLAttributes<HTMLTableCellElement>,
		VariantProps<typeof headVariants> {}

const TableHead = React.forwardRef<HTMLTableCellElement, HeadProps>(
	({ className, size, variant, type, ...props }, ref) => (
		<th
			ref={ref}
			className={cn(headVariants({ className, size, variant, type }))}
			{...props}
		/>
	)
);
TableHead.displayName = 'TableHead';

// Cell
const cellVariants = cva(
	'align-middle text-left [&:has([role=checkbox])]:pr-0',
	{
		variants: {
			variant: {
				default:
					'bg-neutral text-neutral-dark border-l-[1px] border-b-[1px] border-neutral-300 first:border-l-0 last:border-r-0',
			},
			size: {
				default: 'p-4',
				icon: 'p-2',
			},
			type: {
				default: '',
				'sticky-right': 'sticky right-0 border-l',
				'sticky-left': 'sticky left-0 border-r',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			type: 'default',
		},
	}
);

export interface CellProps
	extends React.ThHTMLAttributes<HTMLTableCellElement>,
		VariantProps<typeof cellVariants> {}

const TableCell = React.forwardRef<HTMLTableCellElement, CellProps>(
	({ className, type, size, variant, ...props }, ref) => (
		<td
			ref={ref}
			className={cn(cellVariants({ className, variant, type, size }))}
			{...props}
		/>
	)
);
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cn('mt-4 text-sm text-muted-foreground', className)}
		{...props}
	/>
));
TableCaption.displayName = 'TableCaption';

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
};
