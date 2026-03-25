import {
  IconButton as MuiIconButton,
  type IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
 

// Only include variant, size, and color
type BaseProps = Pick<MuiIconButtonProps, "size" | "color" | "loading">;

// Use all except disableRipple
// type BaseProps = Omit<MuiIconButtonProps, "disableRipple">;

// Extend the MUI Button props to include a children prop
export interface Props extends BaseProps {
  children: React.ReactNode;
}
 
// Create a Button component that uses the MUI Button and accepts a children prop
// The children prop will be used as the button's content
// The rest of the props will be passed down to the MUI Button
export const IconButton = ({ children, ...rest }: Props) => (
  <MuiIconButton {...rest}>{children}</MuiIconButton>
);