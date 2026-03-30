import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: '#f8fafc' },
        { name: 'Surface', value: '#ffffff' },
        { name: 'Contrast', value: '#101828' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
