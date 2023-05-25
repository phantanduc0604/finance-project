export enum EUser {
	id = 'id',
	firstName = 'firstName',
	displayName = 'displayName',
	email = 'email',
	phone = 'phone',
	singPass = 'singPass',
	createdOn = 'createdOn',
}

export interface IUser {
	[EUser.id]: string;
	[EUser.firstName]: string;
	[EUser.displayName]: string;
	[EUser.email]: string;
	[EUser.phone]: string;
	[EUser.singPass]: string;
	[EUser.createdOn]: string;
}

export const UserList: IUser[] = [
	{
		[EUser.id]: '1',
		[EUser.firstName]: 'Khang',
		[EUser.displayName]: 'Doan',
		[EUser.email]: '@dma',
		[EUser.phone]: '003333',
		[EUser.singPass]: '2222',
		[EUser.createdOn]: new Date('12-23-2023').toISOString(),
	},
	{
		[EUser.id]: '2',
		[EUser.firstName]: 'Khang',
		[EUser.displayName]: 'Doan',
		[EUser.email]: '@dma',
		[EUser.phone]: '003333',
		[EUser.singPass]: '2222',
		[EUser.createdOn]: new Date('12-23-2023').toISOString(),
	},
];
