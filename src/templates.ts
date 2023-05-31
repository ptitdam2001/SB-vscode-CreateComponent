export const index = (fileName: string) =>
  `export {default as ${fileName} } from './${fileName}'`;

export const component = (fileName: string) => `import React from 'react';

const ${fileName} = () => {
  return (
    <div>
      {/* Content */}
    </div>
  );
};

export default ${fileName};
`;

export const style = "";

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
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ${fileName} from './${fileName}';

describe('${fileName}', () => {
    it('is displaying component', async () => {
        // Given
        render(<${fileName} />);

        // When
        // Then
        expect(true).toBeTruthy();
    });
});
`;
