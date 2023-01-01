export default interface ITablePaginationProps {
  pageSize: number;
  setPageSize: (page: any) => void;
  pageNumber: number;
  setPageNumber: (pageNumber: any) => void;
  totalRows: number;
  isLoading: boolean;
}
