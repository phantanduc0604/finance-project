import { MoreHorizontal } from 'lucide-react';

import Button from 'components/Button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'components/Select';
import { useMemo } from 'react';
import { cn } from 'helpers/functions';

export interface PaginationProps {
	count?: number;
	page?: number;
	setPage?: (page: number) => void;
	rowsPerPage?: number;
	setRowsPerPage?: (row: number) => void;
	rowsPPageOptions?: number[];
}

const Pagination = (props: PaginationProps) => {
	const {
		count = 0,
		page = 1,
		rowsPerPage = 10,
		rowsPPageOptions = [10, 20, 50],
		setRowsPerPage,
		setPage,
	} = props;

	const totalPage = useMemo(
		() => Math.ceil(count / rowsPerPage),
		[count, rowsPerPage]
	);

	const handleChangeRPP = (rows: string) => {
		setRowsPerPage?.(Number(rows));
	};

	const handleChange = (page: number) => () => {
		setPage?.(page);
	};

	const handleNext = () => {
		setPage?.(page + 1);
	};

	const handleBack = () => {
		setPage?.(page - 1);
	};

	const handleStart = () => {
		setPage?.(1);
	};

	const handleEnd = () => {
		setPage?.(totalPage);
	};

	return (
		<div className='flex items-center justify-between px-2'>
			<div className='flex items-center space-x-6 lg:space-x-8'>
				<div className='flex items-center space-x-2'>
					<Select
						value={rowsPerPage.toString()}
						onValueChange={handleChangeRPP}
					>
						<SelectTrigger className='h-8'>
							<SelectValue placeholder='rows per page' />
						</SelectTrigger>
						<SelectContent side='top'>
							{rowsPPageOptions.map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{`${pageSize} per page`}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className='rounded-md p-[1px] bg-neutral-300'>
					<div
						className={cn(
							'flex items-center gap-[1px]',
							'[&>button]:border-neutral-300 [&>button]:border-0',
							'[&>button:not(:last-child,:first-child)]:rounded-none'
						)}
					>
						<Button
							variant='outline'
							className='h-8 rounded-r-none'
							onClick={handleBack}
							disabled={page === 1}
						>
							<span className=''>Prev.</span>
						</Button>
						{[...Array(totalPage)].map((item, index) => {
							if (totalPage < 6)
								return (
									<Button
										variant={index + 1 === page ? 'active' : 'outline'}
										size='pagin'
										key={index}
										onClick={handleChange(index + 1)}
									>
										{index + 1}
									</Button>
								);
							else if (index === 0)
								return (
									<>
										<Button
											variant={index + 1 === page ? 'active' : 'outline'}
											size='pagin'
											key={0}
											onClick={handleStart}
										>
											1
										</Button>
										{page >= 4 && (
											<Button
												variant='outline'
												size='pagin'
												className='hover:bg-neutral hover:cursor-default'
												key='separetor-begin'
											>
												<MoreHorizontal />
											</Button>
										)}
										{page === index + 1 && (
											<Button
												variant='outline'
												size='pagin'
												key={1}
												onClick={handleChange(2)}
											>
												2
											</Button>
										)}
									</>
								);
							else if (index === totalPage - 1)
								return (
									<>
										{page === index + 1 && (
											<Button
												variant='outline'
												size='pagin'
												key={index - 1}
												onClick={handleChange(index)}
											>
												{index}
											</Button>
										)}
										{page <= totalPage - 3 && (
											<Button
												variant='outline'
												size='pagin'
												className='hover:bg-neutral hover:cursor-default'
												key='separetor-end'
											>
												<MoreHorizontal />
											</Button>
										)}
										<Button
											variant={index + 1 === page ? 'active' : 'outline'}
											size='pagin'
											key={totalPage - 1}
											onClick={handleEnd}
										>
											{totalPage}
										</Button>
									</>
								);
							else if (index + 1 === page)
								return (
									<>
										{page !== 2 && (
											<Button
												variant='outline'
												size='pagin'
												key={index - 1}
												onClick={handleChange(index)}
											>
												{index}
											</Button>
										)}
										<Button
											variant={index + 1 === page ? 'active' : 'outline'}
											size='pagin'
											key={index}
											onClick={handleChange(index + 1)}
										>
											{index + 1}
										</Button>
										{page !== totalPage - 1 && (
											<Button
												variant='outline'
												size='pagin'
												key={index + 1}
												onClick={handleChange(index + 2)}
											>
												{index + 2}
											</Button>
										)}
									</>
								);
							return <></>;
						})}
						<Button
							variant='outline'
							className='h-8 rounded-l-none'
							onClick={handleNext}
							disabled={page === totalPage}
						>
							<span className=''>Next</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
