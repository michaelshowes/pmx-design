import {
	Autocomplete,
	TextField,
	InputAdornment,
	type AutocompleteProps
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { layout, grayscale, primary } from '../../../tokens/colors';
import CloseIcon from '@mui/icons-material/Close';

type BaseProps = Pick<
	AutocompleteProps<string, false, false, true>,
	'disabled' | 'size' | 'value' | 'onChange' | 'defaultValue' | 'renderOption'
>;

export interface SearchBarProps extends BaseProps {
	placeholder?: string;
	options?: string[];
}

export default function SearchBar({
	placeholder = 'Search...',
	options = [],
	size = 'medium',
	...rest
}: SearchBarProps) {
	return (
		<Autocomplete
			freeSolo
			options={options}
			size={size}
			{...rest}
			sx={{
				'& .MuiInputBase-root': {
					padding:
						size === 'small' ? '3.5px 12px !important' : '6.5px 12px !important'
				},
				'& .MuiInputBase-input': {
					padding: '0px !important',
					lineHeight: '1'
				}
			}}
			clearIcon={
				<CloseIcon
					fontSize='small'
					sx={{ color: '#1A1A1A' }}
				/>
			}
			renderInput={(params) => (
				<TextField
					{...params}
					placeholder={placeholder}
					sx={{
						'& .MuiOutlinedInput-root': {
							backgroundColor: layout.light[7],
							borderRadius: '12px',
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: layout.light[16]
							},
							'&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
								borderColor: primary.blue.light.l60,
								borderWidth: '2px'
							},
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
								borderColor: primary.blue.light.main,
								borderWidth: '1px'
							},
							'&.Mui-disabled': {
								backgroundColor: grayscale.l80
							},
							'&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
								borderColor: layout.light[12]
							}
						}
					}}
					slotProps={{
						input: {
							...params.InputProps,
							notched: false,
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon
										fontSize='small'
										sx={{
											color: params.disabled ? '#828282' : '#1A1A1A'
										}}
									/>
								</InputAdornment>
							)
						}
					}}
				/>
			)}
		/>
	);
}
