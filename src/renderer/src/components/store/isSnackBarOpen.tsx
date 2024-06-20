import { makeAutoObservable } from "mobx";

export const createIsSnackBarOpenStore = () => {
  const store = {
    isSnackBarOpen: false as boolean,

    setIsSnackBarOpen(isSnackBarOpen: boolean) {
      store.isSnackBarOpen = isSnackBarOpen;
    }
  };

  makeAutoObservable(store);
  return store;
};
