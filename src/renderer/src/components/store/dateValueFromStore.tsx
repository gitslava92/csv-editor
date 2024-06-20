import { makeAutoObservable } from "mobx";
import dayjs, { Dayjs } from 'dayjs'

export const createDateValueFromStore = () => {
  const store = {
    dateValueFrom: dayjs() as Dayjs | null,

    setDateValueFrom(dateValueFrom: string) {
      store.dateValueFrom = dateValueFrom;
    }
  };

  makeAutoObservable(store);
  return store;
};
