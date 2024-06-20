import { makeAutoObservable } from "mobx";

export const createFileNameStore = () => {
  const store = {
    fileName: '' as string,

    setFileName(fileName: string) {
      store.fileName = fileName;
    }
  };

  makeAutoObservable(store);
  return store;
};
