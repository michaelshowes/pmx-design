/**
 * Storybook preview configuration for MUI components.
 * This file sets up global parameters, themes, and decorators for Storybook.
 */

// Import necessary types from Storybook
import type { Preview } from "@storybook/react-vite";

// Import Roboto font and Material Icons for MUI components
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

import { withMuiTheme } from "./with-mui-theme.decorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "blue_light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "blue_light", title: "Blue Theme - Light mode" },
        { value: "blue_dark", title: "Blue Theme - Dark mode" },
        { value: "purple_light", title: "Purple Theme - Light mode" },
        { value: "purple_dark", title: "Purple Theme - Dark mode" },
        { value: "yellow_dark", title: "Yellow Theme - Dark mode" },
      ],
    },
  },
};

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
