import { PriceKaki } from 'assets/icons';
import Button from 'components/Button';
import { FormInput } from 'components/form-control/Input';
import { useForm } from 'react-hook-form';

const Login = () => {
	const { control, handleSubmit } = useForm();

	const onLogin = (value) => {
		console.log({ value });
	};

	return (
		<div className='h-screen w-full'>
			<form
				className='w-full h-full flex justify-center'
				onSubmit={handleSubmit(onLogin)}
			>
				<div className='max-w-[600px] min-w-[350px] h-full flex items-center justify-center gap-4 p-4 flex-col [&>*]:w-full'>
					<PriceKaki />
					<h1 className='text-green-dark text-[22px]'>PriceKaki CMS Login</h1>
					<FormInput
						label='Email'
						name='email'
						control={control}
						placeholder='Email'
					/>
					<FormInput
						label='Password'
						name='password'
						control={control}
						placeholder='Password'
					/>
					<div className='flex justify-end'>
						<Button type='submit' children='Login' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
