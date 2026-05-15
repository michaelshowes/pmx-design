import {
	Avatar as MuiAvatar,
	type AvatarProps as MuiAvatarProps
} from '@mui/material';

type AvatarBaseProps = Pick<MuiAvatarProps, 'src' | 'alt'>;

export interface AvatarProps extends AvatarBaseProps {
	label?: string;
	size?: number;
}

export default function Avatar({ label, size = 40, ...rest }: AvatarProps) {
	return (
		<MuiAvatar
			{...rest}
			sx={{ width: size, height: size }}
		>
			{label}
		</MuiAvatar>
	);
}
