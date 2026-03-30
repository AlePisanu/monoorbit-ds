import type { Meta, StoryObj } from '@storybook/angular';
import { InputFieldComponent } from 'monoorbit-ds';

const meta: Meta<InputFieldComponent> = {
  title: 'Components/Input Field',
  component: InputFieldComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<InputFieldComponent>;

export const Default: Story = {
  args: {
    uniqueId: 'input-default',
    label: 'Full Name',
    placeholder: 'Enter your name',
    isLabelVisible: true,
  },
};

export const WithError: Story = {
  args: {
    uniqueId: 'input-error',
    label: 'Email',
    placeholder: 'Enter your email',
    isError: true,
    labelError: 'Please enter a valid email address',
    isLabelVisible: true,
  },
};

export const Password: Story = {
  args: {
    uniqueId: 'input-password',
    label: 'Password',
    placeholder: 'Enter password',
    inputType: 'password',
    isLabelVisible: true,
  },
};

export const WithHelper: Story = {
  args: {
    uniqueId: 'input-helper',
    label: 'Account ID',
    placeholder: 'Enter account ID',
    helper: "Where can I find this?",
    isLabelVisible: true,
  },
};

export const TextArea: Story = {
  args: {
    uniqueId: 'input-textarea',
    label: 'Message',
    placeholder: 'Write your message...',
    isTextArea: true,
    textAreaRows: 4,
    isLabelVisible: true,
  },
};

export const Disabled: Story = {
  args: {
    uniqueId: 'input-disabled',
    label: 'Disabled',
    placeholder: 'Cannot type here',
    isDisabled: true,
    isLabelVisible: true,
  },
};

export const Required: Story = {
  args: {
    uniqueId: 'input-required',
    label: 'Required field',
    placeholder: 'This is required',
    isRequired: true,
    isLabelVisible: true,
  },
};

export const WithTick: Story = {
  args: {
    uniqueId: 'input-tick',
    label: 'Verified field',
    placeholder: 'Valid input',
    showTick: true,
    isLabelVisible: true,
  },
};
