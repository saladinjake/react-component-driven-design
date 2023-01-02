import { Flex, Box } from "components/shared/library";
import React, { useState, useEffect } from "react";
import { Select, SearchField, Grid, GridItem, Input, DatePicker } from "../../library";
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
    onResetSearch = () => {},
    values,
    handleChange,
    showModalFilter,
    setShowModalFilter
    
  } = props;

  const [searchValue, setSearchValue] = useState("");

  return (
     <StyledTableFilter>
      {showModalFilter && (
      <div className="filters-dropdown-container filters">
        <Box mb="3"></Box>
      <Box mb="3">
          <Flex direction="column" alignItems="start">
          
              <Select
                placeholder={"Organization"}
                width="300px"
                options={filterColumns || []}
                onGetSelectValue={(item) => {
                  onSortColumn(item.id);
                }}
                hasShadow={false}
              />
           
          </Flex>
          </Box>

          <Box mb="3">
          <Flex direction="column" alignItems="start">

            <Input
              required
              width="300px"
              label="User Name"
              isLoading={false}
              name="name"
              value={values?.firstName}
              onChangePure={handleChange}
              placeholder="Enter username"
            />
          </Flex>
        </Box>

        <Box mb="3">
          <Flex direction="column" alignItems="start">
            <Input
              required
              width="300px"
              label="Email"
              isLoading={false}
              name="name"
              value={values?.email}
              onChangePure={handleChange}
              placeholder="Enter email"
            />
          </Flex>
        </Box>

        <Box mb="3">
          <Flex direction="column" alignItems="start">
        <DatePicker
          required
          label="D.O.B"
          date={values?.dateOfBirth || ""}
          disabled={false}
          setDate={(value) =>
            handleChange({ target: { name: "dateOfBirth", value } })
          }
        />
          </Flex>
        </Box>




        <Box mb="3">
          <Flex direction="column" alignItems="start">
            <Input
              required
              width="300px"
              label="Phone Number"
              isLoading={false}
              name="name"
              value={values?.phoneNumber}
              onChangePure={handleChange}
              placeholder="Enter Phone Number"
            />
          </Flex>
        </Box>

        <Box mb="3">
          <Flex direction="column" alignItems="start">
            <Select
              placeholder={"Status"}
              width="300px"
              options={[
                { name: "Active", id: "asc" },
                { name: "Blocked", id: "desc" },
              ]}
              onGetSelectValue={(item) => {
                onSort(item.id);
              }}
              hasShadow={false}
            />
          </Flex>
        </Box>

        <GridItem colSpan={2}>
          <Flex height="100%">
            <div></div>

            <Box ml="4"></Box>
          </Flex>
        </GridItem>

        

        {children && children}
      </div>
      )}
    </StyledTableFilter>
  );
};

export default TableFilter;
