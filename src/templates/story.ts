export const story = (
  fileName: string
) => `import type { Meta, StoryObj } from '@storybook/react';
import ${fileName} from './${fileName}';

const meta = {
    title: '${fileName}',
    component: ${fileName},
    tags: ['autodocs'],
} satisfies Meta<typeof ${fileName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
`;
