import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from 'monoorbit-ds';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'white'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [size]="size" [isDisabled]="isDisabled" [isLoading]="isLoading" [block]="block">Click me</ds-button>`,
  }),
  args: {
    variant: 'primary',
    size: 'md',
    isDisabled: false,
    isLoading: false,
    block: false,
  },
};

export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-button variant="secondary" [size]="size">Secondary</ds-button>`,
  }),
  args: { size: 'md' },
};

export const Accent: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-button variant="accent" [size]="size">Accent</ds-button>`,
  }),
  args: { size: 'md' },
};

export const Ghost: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-button variant="ghost" [size]="size">Ghost</ds-button>`,
  }),
  args: { size: 'md' },
};

export const Loading: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-button variant="primary" [isLoading]="true">Loading...</ds-button>`,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-button variant="primary" [isDisabled]="true">Disabled</ds-button>`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <ds-button variant="primary" size="lg">Large</ds-button>
        <ds-button variant="primary" size="md">Medium</ds-button>
        <ds-button variant="primary" size="sm">Small</ds-button>
        <ds-button variant="primary" size="xs">XSmall</ds-button>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <ds-button variant="primary">Primary</ds-button>
        <ds-button variant="secondary">Secondary</ds-button>
        <ds-button variant="accent">Accent</ds-button>
        <ds-button variant="ghost">Ghost</ds-button>
      </div>
    `,
  }),
};
