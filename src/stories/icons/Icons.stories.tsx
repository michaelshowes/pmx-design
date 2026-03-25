import { type Meta, type StoryFn } from "@storybook/react-vite";

import StarIcon from '@mui/icons-material/Star';

import { IconButton } from "../../components/inputs/icon-button.component";


export default {
  title: "Example/Icons",
  component: IconButton,
} as Meta<typeof IconButton>;


export const Icons: StoryFn<typeof IconButton> = () => (
  <>
    <IconButton color="primary" ><StarIcon/></IconButton>
  </>
);
