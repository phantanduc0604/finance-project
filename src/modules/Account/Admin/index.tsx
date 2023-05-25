import Button from 'components/Button';
import Header from 'components/Header';
import { Input } from 'components/Input';

const Admin = () => {
	return (
		<div>
			<Header>
				<div>
					<Input placeholder='Search...' />
				</div>
				<Button>Create</Button>
			</Header>
			<div>body</div>
		</div>
	);
};

export default Admin;
