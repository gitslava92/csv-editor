import { makeAutoObservable } from "mobx";

export const createDateFormatStore = () => {
  const store = {
    dateFormat: 'DD-MM-YYYY HH:mm:ss' as string,

    setDateFormat(dateFormat: string) {
      store.dateFormat = dateFormat;
    }
  };

  makeAutoObservable(store);
  return store;
};
