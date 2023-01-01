import { Flex } from "components/shared/library";

import ITablePaginationProps from "./TablePagination.types";

import {
  LessThan,
  DoubleLessThan,
  GreaterThan,
  DoubleGreaterThan,
} from "../../../basic/SvgPack";

import {
  GoToPageInput,
  PaginationDropdown,
  PaginationInfoText,
  PaginationNumberText,
  PaginationText,
  PlainButton,
  PlainButtonWrapperLeft,
  PlainButtonWrapperRight,
} from "./TablePagination.styles";

const TablePagination: React.FC<ITablePaginationProps> = ({
  pageSize,
  setPageSize,
  pageNumber,
  setPageNumber,
  totalRows,
  isLoading = false,
}) => {
  const pageSizes = [1, 5, 10, 20, 50, 100];
  const noOfPages = !isLoading && Math.ceil(totalRows / pageSize);

  const handleGoToPage = (inputValue) => {
    if (inputValue > 0 && inputValue <= noOfPages) {
      setPageNumber(inputValue);
    }
  };

  const handlePageSize = ({ target }) => {
    setPageNumber(1);
    setPageSize(Number(target.value));
  };

  return (
    <Flex justifyContent="between" alignItems="center">
      <Flex alignItems="center">
        <PaginationText>Showing</PaginationText>{" "}
        <PaginationDropdown value={pageSize} onChange={handlePageSize}>
          {pageSizes.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </PaginationDropdown>
        <PaginationText>results per page</PaginationText>
      </Flex>

      <Flex alignItems="center">
        <PlainButton
          as="button"
          $isActive={isLoading || pageNumber < 2}
          onClick={() => setPageNumber(1)}
        >
          <DoubleLessThan />
        </PlainButton>

        <PlainButtonWrapperLeft pr="2.5">
          <PlainButton
            as="button"
            $isActive={isLoading || pageNumber < 2}
            onClick={() => setPageNumber((page) => page - 1)}
            disabled={isLoading || pageNumber < 2}
          >
            <LessThan />
          </PlainButton>
        </PlainButtonWrapperLeft>

        <Flex alignItems="center" color="kudaPurple" mx="2" px="3">
          <GoToPageInput
            type="number"
            value={pageNumber}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) : 1;
              handleGoToPage(page);
            }}
          />
          <PaginationInfoText mx="2.5">out of</PaginationInfoText>
          <PaginationNumberText style={{ fontWeight: 600 }}>
            {isLoading ? 1 : noOfPages}
          </PaginationNumberText>
        </Flex>

        <PlainButtonWrapperRight pl="2.5">
          <PlainButton
            as="button"
            $isActive={isLoading || pageNumber >= noOfPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={isLoading || pageNumber >= noOfPages}
          >
            <GreaterThan />
          </PlainButton>
        </PlainButtonWrapperRight>

        <PlainButton
          as="button"
          $isActive={isLoading || pageNumber >= noOfPages}
          onClick={() => setPageNumber(noOfPages)}
        >
          <DoubleGreaterThan />
        </PlainButton>
      </Flex>
    </Flex>
  );
};

export default TablePagination;
