import { ChangeEvent, MouseEvent } from 'react'


export type Order = 'asc' | 'desc';

export interface FormProps {
  rows: Record<string, any>[];
  setData: Function;
  format: string;
  setUtfError: Function;
}


export interface DataTableHeaderProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, newOrderBy: any) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headers: any[];
}


export interface DataTableToolbarProps {
  rows: any[];
  selected: readonly string[];
  isEdit: boolean;
  setIsEdit: Function;
  setItems: Function;
  setSelected: Function;
  dense: boolean;
  setDense: Function;
  setUtfError: Function;
}
