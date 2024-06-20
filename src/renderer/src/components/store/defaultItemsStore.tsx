import { makeAutoObservable } from "mobx";

export const createDefaultItemsStore = () => {
  const store = {
    defaultItems: [] as any[],

    setDefaultItems(defaultItems: any[]) {
      store.defaultItems = defaultItems;
    }
  };

  makeAutoObservable(store);
  return store;
};
