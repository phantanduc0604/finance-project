import { Input, InputProps } from 'components/Input';
import { Control, useController } from 'react-hook-form';

interface FormInputProps extends InputProps {
	name: string;
	control: Control;
	onExtraChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
}

const FormInput = (props: FormInputProps) => {
	const { name, control, label, onExtraChange, ...inputProps } = props;

	const {
		field,
		fieldState: { error },
	} = useController({ name, control });
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		field.onChange(e);
		onExtraChange?.(e);
	};

	return (
		<div>
			<div className='w-full flex flex-col'>
				<p className='text-left'>{label}</p>
				<Input {...field} {...inputProps} onChange={handleChange} />
			</div>
			{error?.message && <p className='text-red'>{error.message}</p>}
		</div>
	);
};

export { FormInput };
