import { makeAutoObservable } from "mobx";
import dayjs, { Dayjs } from 'dayjs'

export const createDateValueToStore = () => {
  const store = {
    dateValueTo: dayjs() as Dayjs | null,

    setDateValueTo(dateValueTo: string) {
      store.dateValueTo = dateValueTo;
    }
  };

  makeAutoObservable(store);
  return store;
};
