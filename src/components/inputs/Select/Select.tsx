import {
	FormControl,
	InputLabel,
	Select as MuiSelect,
	MenuItem,
	FormHelperText,
	type SelectProps as MuiSelectProps
} from '@mui/material';

export interface SelectOption {
	value: string | number;
	label: string;
}

type BaseProps = Pick<
	MuiSelectProps,
	| 'disabled'
	| 'size'
	| 'variant'
	| 'error'
	| 'value'
	| 'defaultValue'
	| 'onChange'
	| 'required'
	| 'multiple'
>;

export interface SelectProps extends BaseProps {
	label?: string;
	options?: SelectOption[];
	helperText?: string;
	readOnly?: boolean;
}

export default function Select({
	label,
	options = [],
	helperText,
	readOnly,
	error,
	required,
	size,
	variant = 'outlined',
	disabled,
	...rest
}: SelectProps) {
	const labelId = label ? `select-label-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

	return (
		<FormControl
			variant={variant}
			size={size}
			disabled={disabled}
			error={error}
			required={required}
			fullWidth
		>
			{label && <InputLabel id={labelId}>{label}</InputLabel>}
			<MuiSelect
				labelId={labelId}
				label={label}
				inputProps={{ readOnly }}
				{...rest}
			>
				{options.map((opt) => (
					<MenuItem
						key={opt.value}
						value={opt.value}
					>
						{opt.label}
					</MenuItem>
				))}
			</MuiSelect>
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
		</FormControl>
	);
}
