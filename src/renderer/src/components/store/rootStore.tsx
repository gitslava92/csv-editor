import { createItemStore } from './itemsStore';
import { createDateFormatStore } from './dateFormatStore';
import { createUploadDateFormatStore } from './uploadDateFormatStore'
import { createUtfErrorStore } from './utfError'
import { createIsSnackBarOpenStore } from './isSnackBarOpen'
import { createCurrentTabStore } from './currentTabStore'
import { createDefaultItemsStore } from './defaultItemsStore'
import { createFileNameStore } from './fileNameStore'
import { createDateValueFromStore } from './dateValueFromStore'
import { createDateValueToStore } from './dateValueToStore'
import { createErrorStore } from './errorStore'
import { createDelimiterStore } from './delimiterStore'
import { createExportDelimiterStore } from './exportDelimiterStore'

export const createRootStore = () => {
  return {
    items: createItemStore(),
    dateFormat: createDateFormatStore(),
    uploadDateFormat: createUploadDateFormatStore(),
    utfError: createUtfErrorStore(),
    isSnackBarOpen: createIsSnackBarOpenStore(),
    currentTab: createCurrentTabStore(),
    defaultItems: createDefaultItemsStore(),
    fileName: createFileNameStore(),
    dateFrom: createDateValueFromStore(),
    dateTo: createDateValueToStore(),
    error: createErrorStore(),
    delimiter: createDelimiterStore(),
    exportDelimiter: createExportDelimiterStore(),
  };
};

export const rootStore = createRootStore();
export type RootStore = ReturnType<typeof createRootStore>;
