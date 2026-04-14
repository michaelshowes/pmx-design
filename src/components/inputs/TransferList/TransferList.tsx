import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export interface TransferListProps {
	/** Items available on the left (unselected) side */
	left?: string[];
	/** Items already on the right (chosen) side */
	right?: string[];
	/** Label for the left list */
	leftTitle?: string;
	/** Label for the right list */
	rightTitle?: string;
	/** Callback fired when the lists change */
	onChange?: (left: string[], right: string[]) => void;
}

function not(a: string[], b: string[]) {
	return a.filter((v) => !b.includes(v));
}

function intersection(a: string[], b: string[]) {
	return a.filter((v) => b.includes(v));
}

function union(a: string[], b: string[]) {
	return [...a, ...not(b, a)];
}

function ListPanel({
	title,
	items,
	checked,
	onToggle,
	onToggleAll
}: {
	title: string;
	items: string[];
	checked: string[];
	onToggle: (item: string) => void;
	onToggleAll: (items: string[]) => void;
}) {
	const numChecked = intersection(checked, items).length;
	const allChecked = numChecked === items.length && items.length > 0;
	const someChecked = numChecked > 0 && numChecked < items.length;

	return (
		<Card variant='outlined' sx={{ minWidth: 200, flex: 1 }}>
			<CardHeader
				avatar={
					<Checkbox
						checked={allChecked}
						indeterminate={someChecked}
						disabled={items.length === 0}
						onChange={() =>
							allChecked
								? onToggleAll(not(checked, items))
								: onToggleAll(union(checked, items))
						}
						inputProps={{ 'aria-label': 'Select all' }}
					/>
				}
				title={title}
				subheader={`${numChecked}/${items.length} selected`}
				sx={{ px: 2, py: 1 }}
			/>
			<Divider />
			<List
				dense
				role='list'
				sx={{ height: 240, overflow: 'auto' }}
			>
				{items.map((item) => {
					const isChecked = checked.includes(item);
					return (
						<ListItemButton
							key={item}
							role='listitem'
							onClick={() => onToggle(item)}
						>
							<ListItemIcon>
								<Checkbox
									checked={isChecked}
									tabIndex={-1}
									disableRipple
									inputProps={{ 'aria-labelledby': item }}
								/>
							</ListItemIcon>
							<ListItemText id={item} primary={item} />
						</ListItemButton>
					);
				})}
			</List>
		</Card>
	);
}

export default function TransferList({
	left: initialLeft = [],
	right: initialRight = [],
	leftTitle = 'Available',
	rightTitle = 'Chosen',
	onChange
}: TransferListProps) {
	const [checked, setChecked] = useState<string[]>([]);
	const [left, setLeft] = useState(initialLeft);
	const [right, setRight] = useState(initialRight);

	const leftChecked = intersection(checked, left);
	const rightChecked = intersection(checked, right);

	const handleToggle = (item: string) => {
		const current = checked.indexOf(item);
		const next = [...checked];
		current === -1 ? next.push(item) : next.splice(current, 1);
		setChecked(next);
	};

	const handleToggleAll = (items: string[]) => {
		setChecked(items);
	};

	const moveRight = () => {
		const nextRight = [...right, ...leftChecked];
		const nextLeft = not(left, leftChecked);
		setLeft(nextLeft);
		setRight(nextRight);
		setChecked(not(checked, leftChecked));
		onChange?.(nextLeft, nextRight);
	};

	const moveAllRight = () => {
		const nextRight = [...right, ...left];
		setRight(nextRight);
		setLeft([]);
		setChecked(not(checked, left));
		onChange?.([], nextRight);
	};

	const moveLeft = () => {
		const nextLeft = [...left, ...rightChecked];
		const nextRight = not(right, rightChecked);
		setLeft(nextLeft);
		setRight(nextRight);
		setChecked(not(checked, rightChecked));
		onChange?.(nextLeft, nextRight);
	};

	const moveAllLeft = () => {
		const nextLeft = [...left, ...right];
		setLeft(nextLeft);
		setRight([]);
		setChecked(not(checked, right));
		onChange?.(nextLeft, []);
	};

	return (
		<Box
			display='flex'
			alignItems='center'
			gap={1}
		>
			<ListPanel
				title={leftTitle}
				items={left}
				checked={checked}
				onToggle={handleToggle}
				onToggleAll={handleToggleAll}
			/>

			<Box
				display='flex'
				flexDirection='column'
				gap={1}
			>
				<Button
					variant='outlined'
					size='small'
					onClick={moveAllRight}
					disabled={left.length === 0}
					aria-label='Move all right'
				>
					<KeyboardDoubleArrowRightIcon fontSize='small' />
				</Button>
				<Button
					variant='outlined'
					size='small'
					onClick={moveRight}
					disabled={leftChecked.length === 0}
					aria-label='Move selected right'
				>
					<KeyboardArrowRightIcon fontSize='small' />
				</Button>
				<Button
					variant='outlined'
					size='small'
					onClick={moveLeft}
					disabled={rightChecked.length === 0}
					aria-label='Move selected left'
				>
					<KeyboardArrowLeftIcon fontSize='small' />
				</Button>
				<Button
					variant='outlined'
					size='small'
					onClick={moveAllLeft}
					disabled={right.length === 0}
					aria-label='Move all left'
				>
					<KeyboardDoubleArrowLeftIcon fontSize='small' />
				</Button>
			</Box>

			<ListPanel
				title={rightTitle}
				items={right}
				checked={checked}
				onToggle={handleToggle}
				onToggleAll={handleToggleAll}
			/>
		</Box>
	);
}
