import { Flex, Box } from "components/shared/library";
import React, { useState, useEffect } from "react";
import { Select, SearchField, Grid, GridItem, Input, DatePicker, Button } from "../../library";
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
             <Box ml="2" mb="4">Organization</Box>
              <Select
                placeholder={"Select Organization"}
                width="250px"
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
              width="250px"
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
              width="250px"
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
          width="250px"
        />
          </Flex>
        </Box>




        <Box mb="3">
          <Flex direction="column" alignItems="start">
            <Input
              required
              width="250px"
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
          <Box ml="2" mb="4">Status</Box>
            <Select
              placeholder={"Select Status"}
              width="250px"
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
            <div>
              <Button
                color="secondary"
                variant="outline"
                width="115px"
                onClick={() =>   setShowModalFilter(false)}
              >
                Reset
              </Button>
            </div>

            <Box ml="4">
              <Button
                type="submit"
                width="115px"
                loading={false}
                onClick={() => {}}
              >
                Filter
              </Button>
            </Box>
          </Flex>
        </GridItem>

        

        {children && children}
      </div>
      )}
    </StyledTableFilter>
  );
};

export default TableFilter;
