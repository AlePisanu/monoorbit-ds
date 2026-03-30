import type { Meta, StoryObj } from '@storybook/angular';
import { DragDropComponent } from 'monoorbit-ds';

const meta: Meta<DragDropComponent> = {
  title: 'Components/Drag & Drop',
  component: DragDropComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<DragDropComponent>;

export const Default: Story = {
  args: {
    title: 'Drop files here or click to upload',
    maxSizeMb: 5,
  },
};

export const CustomAccept: Story = {
  args: {
    title: 'Upload an image (PNG, JPG)',
    accept: 'image/png,image/jpeg',
    maxSizeMb: 2,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Upload disabled',
    isDisabled: true,
  },
};
