import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from 'monoorbit-ds';

const meta: Meta<TabsComponent> = {
  title: 'Components/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  args: {
    tabs: [
      { id: 'overview', label: 'Overview' },
      { id: 'features', label: 'Features' },
      { id: 'pricing', label: 'Pricing' },
    ],
    activeTabId: 'overview',
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { id: '1', label: 'Dashboard' },
      { id: '2', label: 'Analytics' },
      { id: '3', label: 'Reports' },
      { id: '4', label: 'Settings' },
      { id: '5', label: 'Notifications' },
    ],
    activeTabId: '1',
  },
};
