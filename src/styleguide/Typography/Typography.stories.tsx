import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Button, Card, Stack, Typography } from '@mui/material';
import { typographyVariants } from './typographyVariants';

export default {
	title: 'Style Guide/Typography',
	tags: ['!autodocs']
} as Meta;

export const Default: StoryObj = {
	render: () => (
		<div>
			<div>
				<h1>Typography</h1>
				<ul>
					<li>B1 is the primary **Body** text typography [i.e., body text]</li>
					<li>
						H6 is the primary **Title** text typography [i.e., container
						headers]
					</li>
					<li>
						B2 is the primary **Subtitle** text typography [i.e., modal headers]
					</li>
					<li>
						US Army Regular is the primary **Application Name (Dashboard)**
						typography
					</li>
				</ul>
			</div>

			<div>
				{typographyVariants.map((variant) => (
					<div>
						<h2>{variant.title}</h2>
						{variant.variants.map((item) => {
							return (
								<div
									style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}
								>
									<p
										style={{
											fontSize: '14px',
											color: '#8d8d8d',
											fontWeight: 500
										}}
									>
										{item.fontSize}px
									</p>
									<Typography
										variant={item.variant}
										fontSize={item.fontSize}
										fontWeight={item.fontWeight}
										fontFamily={item.font}
									>
										{item.text}
									</Typography>
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	)
};

export const Example1: StoryObj = {
	render: () => (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%'
			}}
		>
			<Card
				sx={{
					padding: 5,
					width: 444
				}}
			>
				<Stack spacing={5}>
					<Typography variant='body2'>Session Timeout</Typography>
					<Stack spacing={3}>
						<Typography variant='body1'>
							For your security, you are logged out after a period of
							inactivity.
						</Typography>
						<Typography variant='body1'>
							You will be automatically logged out in:
						</Typography>
					</Stack>
					<Stack
						spacing={3}
						direction={'row'}
					>
						<Button
							variant='outlined'
							color='primary'
						>
							Log Out
						</Button>
						<Button
							variant='contained'
							color='primary'
						>
							Stay Logged In
						</Button>
					</Stack>
				</Stack>
			</Card>
		</div>
	)
};
