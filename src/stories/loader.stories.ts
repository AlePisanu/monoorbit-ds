import type { Meta, StoryObj } from '@storybook/angular';
import { LoaderComponent } from 'monoorbit-ds';

const meta: Meta<LoaderComponent> = {
  title: 'Components/Loader',
  component: LoaderComponent,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'accent', 'white'] },
  },
};
export default meta;

type Story = StoryObj<LoaderComponent>;

export const Default: Story = {
  args: { size: 'md', color: 'primary', isOverlay: false },
};

export const Small: Story = {
  args: { size: 'sm', color: 'accent' },
};

export const Large: Story = {
  args: { size: 'lg', color: 'primary' },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <ds-loader size="sm" color="primary"></ds-loader>
        <ds-loader size="md" color="accent"></ds-loader>
        <ds-loader size="lg" color="primary"></ds-loader>
      </div>
    `,
  }),
};
