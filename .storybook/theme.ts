import { create } from 'storybook/theming';

const base = 'light';
const brandImage =
	base === 'light' ? '/svg/pmx-logo-light.svg' : '/svg/pmx-logo-dark.svg';

export default create({
	base,
	brandTitle: 'PMx Design System',
	brandImage
});
