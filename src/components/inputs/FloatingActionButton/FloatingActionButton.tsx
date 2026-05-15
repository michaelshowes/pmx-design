import { Fab as MuiFab, type FabProps as MuiFabProps } from '@mui/material';

type FabBaseProps = Pick<MuiFabProps, 'disabled' | 'size' | 'onClick' | 'children'> & {
	'aria-label'?: string;
};

export interface FloatingActionButtonProps extends FabBaseProps {}

export default function FloatingActionButton({
	size = 'medium',
	...rest
}: FloatingActionButtonProps) {
	return (
		<MuiFab
			color='primary'
			size={size}
			{...rest}
		/>
	);
}
