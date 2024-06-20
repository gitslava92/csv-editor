import { makeAutoObservable } from "mobx";

export const createExportDelimiterStore = () => {
  const store = {
    exportDelimiter: ',' as string,

    setExportDelimiter(exportDelimiter: string) {
      store.exportDelimiter = exportDelimiter;
    }
  };

  makeAutoObservable(store);
  return store;
};
