import { type Meta, type StoryFn } from "@storybook/react-vite";

import StarIcon from '@mui/icons-material/Star';

import { IconButton } from "../../components/inputs/icon-button.component";


export default {
  title: "Example/IconButton",
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Playground: StoryFn<typeof IconButton> = Template.bind({});
Playground.args = {
  children: <StarIcon/>,
};

export const Colors: StoryFn<typeof IconButton> = () => (
  <>
    <IconButton color="primary" ><StarIcon/></IconButton>
    <IconButton color="secondary" ><StarIcon/></IconButton>
    <IconButton color="success" ><StarIcon/></IconButton>
    <IconButton color="info"><StarIcon/></IconButton>
    <IconButton color="warning" ><StarIcon/></IconButton>
    <IconButton color="error" ><StarIcon/></IconButton>
  </>
);

export const Sizes: StoryFn<typeof IconButton> = () => (
  <>
      <IconButton size="small"><StarIcon/></IconButton>
      <IconButton size="medium"><StarIcon/></IconButton>
      <IconButton size="large"><StarIcon/></IconButton>
      <IconButton size="xlarge"><StarIcon/></IconButton>
      <IconButton size="xxlarge"><StarIcon/></IconButton>
      <IconButton size="xxxlarge"><StarIcon/></IconButton>
      <IconButton size="xxxxlarge"><StarIcon/></IconButton>
  </>
);

