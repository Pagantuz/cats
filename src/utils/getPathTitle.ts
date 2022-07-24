export const getPathTitle = (path: string): string => {
  return `${path.charAt(1).toUpperCase()}${path.slice(2)}`;
};
