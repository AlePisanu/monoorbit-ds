import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from 'monoorbit-ds';

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Radio Button',
  component: RadioButtonComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    uniqueId: 'radio-1',
    name: 'group1',
    label: 'Option A',
    radioValue: 'a',
  },
};

export const Group: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <ds-radio-button uniqueId="r-1" name="demo" label="Option A" radioValue="a"></ds-radio-button>
        <ds-radio-button uniqueId="r-2" name="demo" label="Option B" radioValue="b"></ds-radio-button>
        <ds-radio-button uniqueId="r-3" name="demo" label="Option C" radioValue="c"></ds-radio-button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    uniqueId: 'radio-disabled',
    name: 'group2',
    label: 'Disabled',
    radioValue: 'x',
    isDisabled: true,
  },
};
