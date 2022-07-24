import React from 'react';

const useList = <T extends { id: string | number }>(
  initialState?: T[]
): [
  T[],
  React.Dispatch<React.SetStateAction<T[]>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  {
    get: (id: string | number) => T | undefined;
    add: (item: T) => void;
    remove: (id: string | number) => void;
    edit: (id: string | number, data: T) => void;
  }
] => {
  const [list, setList] = React.useState<T[]>(initialState || []);
  const [loading, setLoading] = React.useState<boolean>(false);

  const add = (item: T): void => {
    setList((prev) => [...prev, { ...item }]);
  };

  const get = (id: string | number): T | undefined =>
    list.find((item) => item.id === id);

  const remove = (id: string | number): void => {
    setList(list.filter((item) => item.id !== id));
  };

  const edit = (id: string | number, data: T): void => {
    setList(list.map((item) => (item.id === id ? { ...item, ...data } : item)));
  };

  return [list, setList, loading, setLoading, { get, add, remove, edit }];
};

export { useList };
