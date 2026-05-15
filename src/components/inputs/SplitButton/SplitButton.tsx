import {
	ButtonGroup,
	Button,
	ClickAwayListener,
	Grow,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	type ButtonGroupProps as MuiButtonGroupProps
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRef, useState } from 'react';

export interface SplitButtonOption {
	label: string;
	disabled?: boolean;
}

type SplitButtonBaseProps = Pick<MuiButtonGroupProps, 'disabled' | 'size' | 'color'>;

export interface SplitButtonProps extends SplitButtonBaseProps {
	options: SplitButtonOption[];
	onClick?: (index: number) => void;
	onOptionSelect?: (index: number) => void;
}

export default function SplitButton({
	options,
	onClick,
	onOptionSelect,
	disabled,
	size = 'medium',
	color = 'primary'
}: SplitButtonProps) {
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const anchorRef = useRef<HTMLDivElement>(null);

	const handleClick = () => onClick?.(selectedIndex);

	const handleMenuItemClick = (_: MouseEvent, index: number) => {
		setSelectedIndex(index);
		onOptionSelect?.(index);
		setOpen(false);
	};

	const handleClose = (event: MouseEvent | TouchEvent) => {
		if (anchorRef.current?.contains(event.target as HTMLElement)) return;
		setOpen(false);
	};

	return (
		<>
			<ButtonGroup
				variant='contained'
				color={color}
				size={size}
				disabled={disabled}
				disableElevation
				ref={anchorRef}
				sx={{
					'& .MuiButtonGroup-grouped:not(:last-of-type)': {
						borderRight: '1px solid',
						borderRightColor: 'divider'
					}
				}}
			>
				<Button onClick={handleClick}>{options[selectedIndex]?.label}</Button>
				<Button
					sx={{ px: 1, minWidth: 'auto' }}
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-haspopup='menu'
					aria-label='select action'
					onClick={() => setOpen((prev) => !prev)}
				>
					<ArrowDropDownIcon />
				</Button>
			</ButtonGroup>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				placement='bottom-end'
				transition
			>
				{({ TransitionProps }) => (
					<Grow {...TransitionProps}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									id='split-button-menu'
									autoFocusItem
								>
									{options.map(({ label, disabled: optDisabled }, index) => (
										<MenuItem
											key={label}
											selected={index === selectedIndex}
											disabled={optDisabled}
											onClick={(e) => handleMenuItemClick(e.nativeEvent, index)}
										>
											{label}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
}
