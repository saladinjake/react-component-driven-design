import React from "react";

export default interface TableFilterProps {
  children?: React.ReactNode;
  onSort?: (value: string | number) => void;
  onSortColumn?: (value: string | number) => void;
  onSearch: (value: string) => void;
  filterColumns?: any[];
  onChange?: (value: string) => void;
  preGlobalFilteredRows?: any[],
  globalFilter?: string,
  setInitialGlobalFilterFunction?: (value: string) => void;
  globalSearchEnaled?:boolean;
  withFilter?:boolean;
  withSort?:boolean;
  withSearch?: boolean;
  sortPlaceHolder?:string;
  filterPlaceHolder?:string;
  onResetSearch?:() => void;
}
