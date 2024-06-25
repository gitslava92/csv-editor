import { makeAutoObservable } from "mobx";

export enum ETabs {
  File, Period, Duplicates, Adding, Funnels
}

export const createCurrentTabStore = () => {
  const store = {
    currentTab: ETabs.File as ETabs,

    setCurrentTab(currentTab: ETabs) {
      store.currentTab = currentTab;
    }
  };

  makeAutoObservable(store);
  return store;
};
