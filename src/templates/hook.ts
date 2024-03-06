const currentYear = new Date().getFullYear();

export const index = (fileName: string) =>
  `// Copyright (c) StrangeBee ${currentYear}

export * from './${fileName}';\n`;

export const hook = (
  fileName: string
) => `// Copyright (c) StrangeBee ${currentYear}

export const ${fileName} = () => {
    return {};
};
`;

export const test = (
  fileName: string
) => `// Copyright (c) StrangeBee ${currentYear}

import { renderHook } from '@Testing';
import { describe, it, expect } from 'vitest';

import { ${fileName} } from './${fileName}';

describe('${fileName}', () => {
    it('returns', () => {
        const { result } = renderHook(() => ${fileName}());

        expect(result.current).toBeDefined();
    });
});
`;
