import type { Meta, StoryObj } from '@storybook/react-vite';

import TransferList from './TransferList';

const fruits = [
	'Apple',
	'Banana',
	'Cherry',
	'Durian',
	'Elderberry',
	'Fig',
	'Grape',
	'Honeydew'
];

const permissions = [
	'Read documents',
	'Write documents',
	'Delete documents',
	'Manage users',
	'View reports',
	'Export data',
	'Admin settings'
];

const meta: Meta<typeof TransferList> = {
	component: TransferList,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/zbNOWzGn0ZAm5nPkK9yzgI/PMx-Design-System?node-id=8277-130326'
		},
		docs: {
			description: {
				component:
					'A Transfer List allows users to move items between two lists — "Available" and "Chosen". Supports single selection, multi-selection, and move-all actions. [MUI Docs](https://mui.com/material-ui/react-transfer-list/)'
			}
		},
		layout: 'padded'
	},
	argTypes: {
		leftTitle: {
			description: 'Label for the left (available) list',
			control: { type: 'text' }
		},
		rightTitle: {
			description: 'Label for the right (chosen) list',
			control: { type: 'text' }
		},
		left: { control: false },
		right: { control: false },
		onChange: { control: false }
	}
};

export default meta;
type Story = StoryObj<typeof TransferList>;

// ─── Default / Playground ─────────────────────────────────────────────────────

export const Default: Story = {
	args: {
		left: fruits,
		right: [],
		leftTitle: 'Available',
		rightTitle: 'Chosen'
	}
};

// ─── With Pre-selected Items ──────────────────────────────────────────────────

export const WithPreselected: Story = {
	name: 'With Pre-selected Items',
	parameters: {
		docs: {
			description: {
				story: 'Pass items in the `right` prop to pre-populate the chosen list.'
			}
		}
	},
	args: {
		left: ['Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew'],
		right: ['Apple', 'Banana'],
		leftTitle: 'Available',
		rightTitle: 'Chosen'
	}
};

// ─── Permissions Example ──────────────────────────────────────────────────────

export const PermissionsExample: Story = {
	name: 'Permissions Example',
	parameters: {
		docs: {
			description: {
				story:
					'A common use case — assigning permissions or roles to a user by moving them from "Available" to "Granted".'
			}
		}
	},
	args: {
		left: permissions,
		right: [],
		leftTitle: 'Available',
		rightTitle: 'Granted'
	}
};

// ─── Partially Populated ──────────────────────────────────────────────────────

export const PartiallyPopulated: Story = {
	name: 'Partially Populated',
	args: {
		left: [
			'Read documents',
			'Write documents',
			'Delete documents',
			'Manage users'
		],
		right: ['View reports', 'Export data', 'Admin settings'],
		leftTitle: 'Available',
		rightTitle: 'Granted'
	}
};

// ─── Empty State ──────────────────────────────────────────────────────────────

export const AllChosen: Story = {
	name: 'All Items Chosen',
	parameters: {
		docs: {
			description: {
				story:
					'When all items are in the right list — move-all-right and individual move-right buttons are disabled.'
			}
		}
	},
	args: {
		left: [],
		right: fruits,
		leftTitle: 'Available',
		rightTitle: 'Chosen'
	}
};

// ─── Custom Titles ────────────────────────────────────────────────────────────

export const CustomTitles: Story = {
	args: {
		left: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
		right: ['Option 6', 'Option 7'],
		leftTitle: 'Not selected',
		rightTitle: 'Selected'
	}
};
