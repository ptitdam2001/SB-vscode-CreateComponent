const currentYear = new Date().getFullYear();

export const index = (fileName: string) =>
  `export \{ default as ${fileName} \} from './${fileName}';\n`;

export const component = (
  fileName: string
) => `// Copyright (c) StrangeBee ${currentYear}

import { memo } from 'react';
import { WithTestIdProps } from '@Common/types';

import './${fileName}.scss';

interface ${fileName}Props extends WithTestIdProps {}

const ${fileName} = ({ 'data-testid': testId }: ${fileName}Props) => <div data-testid={testId}>{/* Content */}</div>;

export default memo(${fileName});
`;

export const style = `/*
 * Copyright (c) StrangeBee ${currentYear}
 */

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

export const test = (
  fileName: string
) => `// Copyright (c) StrangeBee ${currentYear}

import React from 'react';
import { render, screen } from '@Testing';
import { describe, it, expect, vi } from 'vitest';

import ${fileName} from './${fileName}';

/**
 * Mock Fontawesome icon
 * @todo to remove if your component does not use icons
 */
vi.mock('@fortawesome/react-fontawesome', async (importOriginal) => {
    const mod = await importOriginal<any>();

    return {
        ...mod,
        FontAwesomeIcon: (props: { icon: string }) => <span className={props.icon} data-testid={props.icon} />,
    };
});

describe('${fileName}', () => {
    it('is displaying component', async () => {
        const { container } = render(<${fileName} />);
        expect(container).toBeInTheDocument();

        screen.debug();
    });
});
`;
