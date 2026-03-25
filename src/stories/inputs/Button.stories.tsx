import { type Meta, type StoryFn } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import StarIcon from '@mui/icons-material/Star';

import { Button } from "../../components/inputs/button.component";
import { Box, IconButton, Typography } from "@mui/material";

type ColorType = "inherit" | "secondary" | "primary" | "success" | "error" | "info" | "warning";
const colors = [ "primary", "success", "error"];

const createButtons = (color: ColorType): React.ReactNode => (
  <Stack key={`color-${color}`} spacing={2}>
    <Button color={color} variant="contained"  label="Start Icon " startIcon={<StarIcon />}/>
    <Button color={color} variant="outlined" label="End Icon" endIcon={<StarIcon />}/>
    <Button color={color} variant="contained" label="Contained Button" />
    <Button color={color} variant="outlined" label="Outlined Button" />
    <Button disabled color={color} variant="contained" label="Contained Disabled" />
    <Button disabled color={color} variant="outlined" label="Outlined Disabled" />
  </Stack>
)

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Playground: StoryFn<typeof Button> = Template.bind({});
Playground.args = {
  label: "Click me!",
};

export const Variants: StoryFn<typeof Button> = () => (
  <Stack spacing={4}>
    <Box>
      <Typography>Buttons</Typography>
      <Stack direction={'row'} spacing={3}>
        { colors.map((color) => createButtons(color as ColorType)) }
      </Stack>
    </Box>
    <Box>
      <Typography>Icon Buttons</Typography>
      <Stack direction={'row'} spacing={3}>
        <IconButton ><StarIcon/></IconButton>
      </Stack>
    </Box>
  </Stack>
);

export const Colors: StoryFn<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" label="Primary" />
    <Button variant="contained" color="secondary" label="Secondary" />
    <Button variant="contained" color="success" label="Success" />
    <Button variant="contained" color="info" label="Info" />
    <Button variant="contained" color="warning" label="Warning" />
    <Button variant="contained" color="error" label="Error" />
  </Stack>
);

export const Sizes: StoryFn<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" size="small" label="Small" />
    <Button variant="contained" size="medium" label="Medium" />
    <Button variant="contained" size="large" label="Large" />
  </Stack>
);

