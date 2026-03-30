import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from 'monoorbit-ds';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-accordion [title]="title" [isOpen]="isOpen">
      <p>This is the accordion content. It can contain any HTML.</p>
    </ds-accordion>`,
  }),
  args: {
    title: 'Click to expand',
    isOpen: false,
  },
};

export const OpenByDefault: Story = {
  render: (args) => ({
    props: args,
    template: `<ds-accordion title="Opened by default" [isOpen]="true">
      <p>This accordion starts open.</p>
    </ds-accordion>`,
  }),
};

export const Multiple: Story = {
  render: () => ({
    template: `
      <ds-accordion title="Section 1">
        <p>Content for section 1.</p>
      </ds-accordion>
      <ds-accordion title="Section 2">
        <p>Content for section 2.</p>
      </ds-accordion>
      <ds-accordion title="Section 3">
        <p>Content for section 3.</p>
      </ds-accordion>
    `,
  }),
};
