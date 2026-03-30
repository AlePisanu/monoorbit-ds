import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from 'monoorbit-ds';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    uniqueId: 'cb-1',
    label: 'I accept the terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    uniqueId: 'cb-checked',
    label: 'Already checked',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    uniqueId: 'cb-disabled',
    label: 'Disabled checkbox',
    isDisabled: true,
  },
};

export const Group: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <ds-checkbox uniqueId="opt-1" label="Option A"></ds-checkbox>
        <ds-checkbox uniqueId="opt-2" label="Option B"></ds-checkbox>
        <ds-checkbox uniqueId="opt-3" label="Option C"></ds-checkbox>
      </div>
    `,
  }),
};
