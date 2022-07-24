export const formatFieldName = (filedName: string): string => {
  return filedName.match(/([a-zA-Z]+)/g)?.reduce((acc, word) => {
    return acc + ' ' + `${word.charAt(1).toUpperCase()}${word.slice(2)}`;
  }, '') as string;
};
