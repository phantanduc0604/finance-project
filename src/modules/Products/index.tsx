import axios from 'axios';
import Button from 'components/Button';
import Header from 'components/Header';
import { Input } from 'components/Input';
import { debounce } from 'lodash';
import { Controller, useForm } from 'react-hook-form';

const Products = () => {
	const { control } = useForm();

	const handleDebounce = debounce((value) => {
		console.log(value);
		axios.get('/');
	}, 1000);

	return (
		<div>
			<Header>
				<div>
					<Input placeholder='Search...' />
				</div>
				<Button>Create</Button>
			</Header>
			<div>
				<form>
					<Controller
						name='name'
						control={control}
						render={({ field: { value, onChange, ...fieldprops } }) => (
							<Input
								value={value}
								onChange={(e) => {
									onChange(e.target.value);
									handleDebounce(e.target.value);
								}}
								{...fieldprops}
							/>
						)}
					/>
				</form>
			</div>
		</div>
	);
};

export default Products;
