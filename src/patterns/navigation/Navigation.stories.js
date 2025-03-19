import { fn } from '@storybook/test';

import { Navigation } from './Navigation';

export default {
  title: 'Patterns/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    useBrandColors: false,
  },
};

export const Default = {};

export const WithBrandColors = {
  args: {
    useBrandColors: true,
  },
};
