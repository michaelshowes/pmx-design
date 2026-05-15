import {
	ButtonGroup as MuiButtonGroup,
	type ButtonGroupProps as MuiButtonGroupProps
} from '@mui/material';

type ButtonGroupBaseProps = Pick<
	MuiButtonGroupProps,
	'disabled' | 'size' | 'color' | 'variant' | 'orientation' | 'children'
>;

export interface ButtonGroupProps extends ButtonGroupBaseProps {
	children: React.ReactNode;
}

export default function ButtonGroup({ ...rest }: ButtonGroupProps) {
	return <MuiButtonGroup {...rest} />;
}
