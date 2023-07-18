export const test = (fileName: string) => `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ${fileName} from './${fileName}';

describe('${fileName}', () => {
    it('is displaying component', async () => {
        render(<${fileName} />);
        expect(true).toBeTruthy();
    });
});
`;
