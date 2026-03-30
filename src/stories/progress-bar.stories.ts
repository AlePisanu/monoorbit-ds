import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from 'monoorbit-ds';

const meta: Meta<ProgressBarComponent> = {
  title: 'Components/Progress Bar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  args: {
    steps: 4,
    currentStep: 1,
    labels: ['Account', 'Details', 'Review', 'Complete'],
  },
};

export const FirstStep: Story = {
  args: {
    steps: 4,
    currentStep: 0,
    labels: ['Account', 'Details', 'Review', 'Complete'],
  },
};

export const LastStep: Story = {
  args: {
    steps: 4,
    currentStep: 3,
    labels: ['Account', 'Details', 'Review', 'Complete'],
  },
};

export const NoLabels: Story = {
  args: {
    steps: 5,
    currentStep: 2,
  },
};
