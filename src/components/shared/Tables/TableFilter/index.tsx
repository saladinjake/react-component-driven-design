import { Flex, Box } from "components/shared/library";
import React, { useState, useEffect } from "react";
import { Select, SearchField } from "../../library";
import { TableFilter as StyledTableFilter } from "./TableFilter.styles";
import TableFilterProps from "./TableFilter.types";

const TableFilter: React.FC<TableFilterProps> = (props) => {
  const {
    onSort,
    onSortColumn,
    onSearch,
    children,
    filterColumns,
    setInitialGlobalFilterFunction,
    withSort = true,
    withFilter = true,
    withSearch = true,
    sortPlaceHolder = "Sort By",
    filterPlaceHolder = "Filter By",
    onResetSearch = () =>{}
  } = props;

  const [searchValue, setSearchValue] = useState("");

  return (
    <StyledTableFilter>
      <div className="filters-dropdown-container">
        <Flex>
          {withFilter && (
            <Box mr="2.5">
              <Select
                placeholder={filterPlaceHolder || "Creation Date"}
                width="200px"
                options={filterColumns || []}
                onGetSelectValue={(item) => {
                  onSortColumn(item.id);
                }}
                hasShadow={false}
              />
            </Box>
          )}

          {withSort && (
            <Select
              placeholder={sortPlaceHolder || "Descending Order"}
              width="200px"
              options={[
                { name: "Ascending Order", id: "asc" },
                { name: "Descending Order", id: "desc" },
              ]}
              onGetSelectValue={(item) => {
                onSort(item.id);
              }}
              hasShadow={false}
            />
          )}
        </Flex>

        {children && children}
      </div>

      {withSearch && (
        <div className="filter-global-search-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(searchValue);
            }}
          >
            <SearchField
              withBtn
              placeholder="Search"
              btnText="Search"
              width="100%"
              height="48px"
              value={searchValue}
              searchColumns={filterColumns}
              onChange={(e) => {
                setSearchValue(e.target.value);
                if( setInitialGlobalFilterFunction){
                  setInitialGlobalFilterFunction(e.target.value)
                }
               
              }}
              onResetSearch={onResetSearch}
            />
          </form>
        </div>
      )}
    </StyledTableFilter>
  );
};

export default TableFilter;
