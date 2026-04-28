import {
	Button as MuiButton,
	type ButtonProps as MuiButtonProps
} from '@mui/material';

type ButtonBaseProps = Pick<
	MuiButtonProps,
	| 'disabled'
	| 'startIcon'
	| 'endIcon'
	| 'variant'
	| 'color'
	| 'size'
	| 'onClick'
>;

export interface ButtonProps extends ButtonBaseProps {
	label?: string;
}

export default function Button({ label, ...rest }: ButtonProps) {
	return <MuiButton {...rest}>{label}</MuiButton>;
}
