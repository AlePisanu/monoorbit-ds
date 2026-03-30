import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from 'monoorbit-ds';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};
export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'A brief description of the card content goes here.',
    imageUrl: 'https://picsum.photos/400/200',
    shadow: true,
    layout: 'vertical',
    compact: false,
  },
};

export const Horizontal: Story = {
  args: {
    title: 'Horizontal Card',
    description: 'This card uses a horizontal layout with the image on the left.',
    imageUrl: 'https://picsum.photos/200/200',
    layout: 'horizontal',
  },
};

export const NoImage: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ds-card title="No Image" description="A card without an image.">
        <p>Custom content goes here.</p>
        <div card-footer>
          <a href="#" style="color: var(--ds-color-brand, #1f4fd1); font-weight: 500;">Learn more</a>
        </div>
      </ds-card>
    `,
  }),
};

export const Compact: Story = {
  args: {
    title: 'Compact Card',
    description: 'A compact card with less padding.',
    imageUrl: 'https://picsum.photos/400/140',
    compact: true,
  },
};

export const NoShadow: Story = {
  args: {
    title: 'Flat Card',
    description: 'A card without the hover shadow effect.',
    shadow: false,
  },
};
