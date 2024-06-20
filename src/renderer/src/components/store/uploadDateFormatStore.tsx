import { makeAutoObservable } from "mobx";

export const createUploadDateFormatStore = () => {
  const store = {
    uploadDateFormat: 'DD-MM-YYYY HH:mm:ss' as string,

    setUploadDateFormat(uploadDateFormat: string) {
      store.uploadDateFormat = uploadDateFormat;
    }
  };

  makeAutoObservable(store);
  return store;
};
