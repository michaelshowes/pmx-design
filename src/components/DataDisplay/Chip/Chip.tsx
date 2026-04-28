import {
	Chip as MuiChip,
	type ChipProps as MuiChipProps
} from '@mui/material';

type ChipBaseProps = Pick<
	MuiChipProps,
	| 'variant'
	| 'color'
	| 'size'
	| 'disabled'
	| 'icon'
	| 'deleteIcon'
	| 'onDelete'
	| 'onClick'
	| 'clickable'
>;

export interface ChipProps extends ChipBaseProps {
	label?: string;
}

export default function Chip({ label, ...rest }: ChipProps) {
	return <MuiChip label={label} {...rest} />;
}
