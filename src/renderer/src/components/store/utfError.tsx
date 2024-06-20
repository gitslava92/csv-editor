import { makeAutoObservable } from "mobx";

export const createUtfErrorStore = () => {
  const store = {
    utfError: false as boolean,

    setUtfError(utfError: boolean) {
      store.utfError = utfError;
    }
  };

  makeAutoObservable(store);
  return store;
};
