import { createItemStore } from './itemsStore';
import { createDateFormatStore } from './dateFormatStore';
import { createUploadDateFormatStore } from './uploadDateFormatStore'
import { createUtfErrorStore } from './utfError'
import { createIsSnackBarOpenStore } from './isSnackBarOpen'
import { createCurrentTabStore } from './currentTabStore'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { createDefaultItemsStore } from './defaultItemsStore'
import { createFileNameStore } from './fileNameStore'
import { createDateValueFromStore } from './dateValueFromStore'
import { createDateValueToStore } from './dateValueToStore'
import { createErrorStore } from './errorStore'
import { createDelimiterStore } from './delimiterStore'
import { createExportDelimiterStore } from './exportDelimiterStore'

export const createRootStore = () => {
  const rootStore = {
    items: createItemStore(),
    dateFormat: createDateFormatStore(),
    uploadDateFormat: createUploadDateFormatStore(),
    utfError: createUtfErrorStore(),
    isSnackBarOpen: createIsSnackBarOpenStore(),
    currentTab: createCurrentTabStore(),
    defaultData: createDefaultItemsStore(),
    fileName: createFileNameStore(),
    dateFrom: createDateValueFromStore(),
    dateTo: createDateValueToStore(),
    error: createErrorStore(),
    delimiter: createDelimiterStore(),
    exportDelimiter: createExportDelimiterStore(),
  };

  return rootStore;
};

export type RootStore = ReturnType<typeof createRootStore>;
