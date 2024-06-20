import { makeAutoObservable } from "mobx";

export const createErrorStore = () => {
  const store = {
    error: '' as string,

    setError(error: string) {
      store.error = error;
    }
  };

  makeAutoObservable(store);
  return store;
};
