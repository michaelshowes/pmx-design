import {
	Button as MuiButton,
	type ButtonProps as MuiButtonProps
} from '@mui/material';

// Only include variant, size, and color
type ButtonBaseProps = Pick<
	MuiButtonProps,
	'variant' | 'size' | 'color' | 'disabled' | 'startIcon' | 'endIcon'
>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

// Extend the MUI Button props to include a label prop
export interface ButtonProps extends ButtonBaseProps {
	label: string;
}

// Create a Button component that uses the MUI Button and accepts a label prop
// The label prop will be used as the button's content
// The rest of the props will be passed down to the MUI Button
export const Button = ({ label, ...rest }: ButtonProps) => (
	<MuiButton {...rest}>{label}</MuiButton>
);
