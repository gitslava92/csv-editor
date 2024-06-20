import { makeAutoObservable } from "mobx";

export const createItemStore = () => {
  const store = {
    items: [] as any[],

    setItems(items: any[]) {
      store.items = items;
    }
  };

  makeAutoObservable(store);
  return store;
};
