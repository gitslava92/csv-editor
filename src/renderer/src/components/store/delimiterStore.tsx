import { makeAutoObservable } from "mobx";

export const createDelimiterStore = () => {
  const store = {
    delimiter: ',' as string,

    setDelimiter(delimiter: string) {
      store.delimiter = delimiter;
    }
  };

  makeAutoObservable(store);
  return store;
};
