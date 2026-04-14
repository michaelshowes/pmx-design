import type { Meta, StoryObj } from '@storybook/react-vite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HistoryIcon from '@mui/icons-material/History';

import SearchBar from './SearchBar';

const animals = [
	'Turtle',
	'Poodle',
	'Clown fish',
	'Labrador',
	'Parrot',
	'Hamster',
	'Goldfish',
	'Rabbit'
];

const recentSearches = ['Turtle', 'Poodle', 'Clown fish'];

const meta: Meta<typeof SearchBar> = {
	component: SearchBar,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=8227-129561'
		},
		docs: {
			description: {
				component:
					'A search bar allows users to enter a keyword to retrieve or display relevant information. Built on [MUI Autocomplete](https://mui.com/material-ui/react-autocomplete/#search-input). Use `freeSolo` mode (default) for freeform search, or pass `options` for predictive/autocomplete suggestions.'
			}
		}
	},
	args: {
		placeholder: 'Search...',
		disabled: false,
		size: 'medium',
		options: []
	},
	argTypes: {
		placeholder: {
			description: 'Ghost text shown before the user starts typing',
			control: { type: 'text' }
		},
		size: {
			description: 'Figma: **Size** — Normal (medium) or Small',
			options: ['medium', 'small'],
			control: {
				type: 'inline-radio',
				labels: { medium: 'Normal', small: 'Small' }
			}
		},
		disabled: {
			description: 'Disabled state',
			control: { type: 'boolean' }
		},
		options: {
			description:
				'Suggestion options shown in the dropdown. Pass an empty array for freeform search.',
			control: false
		}
	}
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {};

// ─── With Suggestions ─────────────────────────────────────────────────────────

export const WithSuggestions: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Pass `options` to enable autocomplete suggestions. The user can still type anything (freeSolo). Results display after typing.'
			}
		}
	},
	args: {
		options: animals,
		placeholder: 'Search animals...'
	}
};

// ─── With Default Value ───────────────────────────────────────────────────────

export const WithValue: Story = {
	args: {
		defaultValue: 'Search input',
		options: animals
	}
};

// ─── State: Disabled ──────────────────────────────────────────────────────────

export const Disabled: Story = {
	name: 'State: Disabled',
	args: { disabled: true }
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
	render: () => (
		<Stack spacing={3}>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Normal (medium)
				</Typography>
				<SearchBar
					placeholder='Search...'
					size='medium'
				/>
			</Stack>
			<Stack spacing={1}>
				<Typography
					variant='overline'
					color='text.secondary'
				>
					Small
				</Typography>
				<SearchBar
					placeholder='Search...'
					size='small'
				/>
			</Stack>
		</Stack>
	)
};

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
	render: () => (
		<Stack spacing={4}>
			{(['medium', 'small'] as const).map((size) => (
				<Stack
					key={size}
					spacing={2}
				>
					<Typography
						variant='overline'
						color='text.secondary'
					>
						{size === 'medium' ? 'Normal' : 'Small'}
					</Typography>
					<Stack
						spacing={2}
						maxWidth={320}
					>
						<Stack spacing={1}>
							<Typography
								variant='caption'
								color='text.disabled'
							>
								Default
							</Typography>
							<SearchBar
								placeholder='Search...'
								size={size}
							/>
						</Stack>
						<Stack spacing={1}>
							<Typography
								variant='caption'
								color='text.disabled'
							>
								With input
							</Typography>
							<SearchBar
								defaultValue='Search input'
								size={size}
								options={animals}
							/>
						</Stack>
						<Stack spacing={1}>
							<Typography
								variant='caption'
								color='text.disabled'
							>
								Disabled
							</Typography>
							<SearchBar
								placeholder='Search...'
								size={size}
								disabled
							/>
						</Stack>
					</Stack>
				</Stack>
			))}
		</Stack>
	)
};

// ─── Recent Searches (History) ────────────────────────────────────────────────

export const RecentSearches: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Pass recent searches as `options` with a `renderOption` to show a history icon alongside each entry. Distinguish history entries visually from live search suggestions.'
			}
		}
	},
	render: () => (
		<SearchBar
			placeholder='Search...'
			options={recentSearches}
			renderOption={(props, option) => (
				<li {...props}>
					<HistoryIcon
						fontSize='small'
						sx={{ mr: 1.5, color: 'text.secondary' }}
					/>
					{option}
				</li>
			)}
		/>
	)
};
