import { Filter } from 'assets/icons/Filter';
import Button from 'components/Button';

const Login = () => {
	return (
		<div>
			<Button variant='outline' children='Login' />
			<div className='hover:text-red'>
				<Filter />
			</div>
		</div>
	);
};

export default Login;
