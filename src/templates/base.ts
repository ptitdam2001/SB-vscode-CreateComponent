export const index = (fileName: string) =>
  `export { default as ${fileName} } from './${fileName}'`;
