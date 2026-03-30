import type { Meta, StoryObj } from '@storybook/angular';
import { SearchSelectComponent } from 'monoorbit-ds';

const meta: Meta<SearchSelectComponent> = {
  title: 'Components/Search Select',
  component: SearchSelectComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<SearchSelectComponent>;

const sampleOptions = [
  { value: 'it', label: 'Italy' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'es', label: 'Spain' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'us', label: 'United States' },
  { value: 'nl', label: 'Netherlands' },
  { value: 'pt', label: 'Portugal' },
  { value: 'at', label: 'Austria' },
  { value: 'ch', label: 'Switzerland' },
];

export const Default: Story = {
  args: {
    uniqueId: 'country',
    label: 'Country',
    placeholder: 'Search country...',
    options: sampleOptions,
  },
};

export const Required: Story = {
  args: {
    uniqueId: 'country-req',
    label: 'Country',
    placeholder: 'Select a country...',
    options: sampleOptions,
    isRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    uniqueId: 'country-dis',
    label: 'Country',
    placeholder: 'Not available',
    options: sampleOptions,
    isDisabled: true,
  },
};
