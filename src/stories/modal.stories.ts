import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent, ModalComponent } from 'monoorbit-ds';

const meta: Meta<ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;

type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  render: (args) => ({
    props: { ...args, isOpen: true },
    moduleMetadata: { imports: [ButtonComponent] },
    template: `
      <ds-modal [isOpen]="isOpen" [title]="title" [size]="size" (closed)="isOpen = false">
        <p>This is the modal content. Press Escape or click outside to close.</p>
        <div modal-footer>
          <ds-button variant="ghost" size="sm" (clicked)="isOpen = false">Cancel</ds-button>
          <ds-button variant="primary" size="sm">Confirm</ds-button>
        </div>
      </ds-modal>
    `,
  }),
  args: {
    title: 'Modal Title',
    size: 'md',
    showHeader: true,
    showFooter: true,
    closeOnOverlay: true,
  },
};

export const Small: Story = {
  render: (args) => ({
    props: { ...args, isOpen: true },
    template: `
      <ds-modal [isOpen]="isOpen" title="Small Modal" size="sm" (closed)="isOpen = false">
        <p>A small modal for confirmations.</p>
      </ds-modal>
    `,
  }),
};

export const Large: Story = {
  render: (args) => ({
    props: { ...args, isOpen: true },
    template: `
      <ds-modal [isOpen]="isOpen" title="Large Modal" size="lg" (closed)="isOpen = false">
        <p>A large modal for complex content or forms.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </ds-modal>
    `,
  }),
};
