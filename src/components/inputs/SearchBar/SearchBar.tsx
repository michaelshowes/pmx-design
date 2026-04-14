import {
	Autocomplete,
	TextField,
	InputAdornment,
	type AutocompleteProps
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
			renderInput={(params) => (
				<TextField
					{...params}
					placeholder={placeholder}
					slotProps={{
						input: {
							...params.InputProps,
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon fontSize='small' />
								</InputAdornment>
							)
						}
					}}
				/>
			)}
		/>
	);
}
