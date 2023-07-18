export const index = (fileName: string) => `export { default as ${fileName} } from './${fileName}';`;

export const component = (fileName: string) => `// Copyright (c) StrangeBee 2023

import { memo } from 'react';

const ${fileName} = () => (
    <div>{/* Content */}</div>
);

export default memo(${fileName});

`;

export const style = `// Copyright (c) StrangeBee 2023

`;

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

export const test = (fileName: string) => `import React from 'react';
import { render, screen } from '@Testing';
import { describe, it, expect, vi } from 'vitest';

import ${fileName} from './${fileName}';

describe('${fileName}', () => {
    it('is displaying component', async () => {
        const { container } = render(<${fileName} />);
        expect(container).toBeInTheDocument();
    });
});

`;
