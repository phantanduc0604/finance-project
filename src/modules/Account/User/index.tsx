import { ColumnDef } from '@tanstack/react-table';
import { Eye, Pencil, Trash } from 'assets/icons';
import Button from 'components/Button';
import { DataTable } from 'components/DataTable';
import Header from 'components/Header';
import { Input } from 'components/Input';
import moment from 'moment';
import { ESticky } from 'types/table';
import { EUser, IUser, UserList } from 'types/user';

const User = () => {
	const columns: ColumnDef<IUser>[] = [
		{
			accessorKey: EUser.id,
			header: 'ID',
		},
		{
			accessorKey: EUser.firstName,
			header: 'First name',
		},
		{
			accessorKey: EUser.displayName,
			header: 'Display name',
		},
		{
			accessorKey: EUser.email,
			header: 'Email',
		},
		{
			accessorKey: EUser.phone,
			header: 'Phone',
		},
		{
			accessorKey: EUser.singPass,
			header: 'Sing Pass',
		},
		{
			accessorKey: EUser.createdOn,
			header: 'Created on',
			cell: ({ row }) =>
				moment(row.getValue(EUser.createdOn)).format('DD/MM/YYYY HH:mm'),
		},
		{
			id: ESticky.right,
			accessorKey: 'action',
			header: 'Action',
			cell: () => {
				return (
					<div className='flex items-center gap-1'>
						<Button size='icon'>
							<Eye />
						</Button>
						<Button size='icon'>
							<Pencil />
						</Button>
						<Button size='icon'>
							<Trash />
						</Button>
					</div>
				);
			},
		},
	];

	return (
		<div>
			<Header>
				<div>
					<Input placeholder='Search...' />
				</div>
				<Button>Create</Button>
			</Header>
			<div className='p-2'>
				<DataTable
					columns={columns}
					data={UserList}
					count={61}
					page={4}
					rowsPerPage={10}
				/>
			</div>
		</div>
	);
};

export default User;
