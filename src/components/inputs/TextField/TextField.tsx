import {
	TextField as MuiTextField,
	type TextFieldProps as MuiTextFieldProps
} from '@mui/material';

type BaseProps = Pick<
	MuiTextFieldProps,
	| 'label'
	| 'placeholder'
	| 'helperText'
	| 'error'
	| 'disabled'
	| 'required'
	| 'variant'
	| 'size'
	| 'multiline'
	| 'rows'
	| 'maxRows'
	| 'minRows'
	| 'type'
	| 'value'
	| 'defaultValue'
	| 'onChange'
	| 'fullWidth'
	| 'slotProps'
>;

export default function TextField(props: BaseProps) {
	return (
		<MuiTextField
			fullWidth
			{...props}
		/>
	);
}
