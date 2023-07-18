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
