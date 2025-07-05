import { type Control, useController } from 'react-hook-form';
import { TextInput } from 'react-native';

const InputText = ({
	name,
	control,
	defaultValue,
	rules,
}: {
	name: string;
	control: Control;
	defaultValue: object | string | [];
	rules: object;
}) => {
	const { field } = useController({
		control,
		defaultValue,
		name,
		rules,
	});
	return (
		<TextInput
			onBlur={field.onBlur}
			value={field.value}
			onChangeText={field.onChange}
		/>
	);
};

export default InputText;
