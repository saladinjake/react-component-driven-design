import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Create } from "components/basic/SvgPack";
import Icon from "components/shared/Icons/Icon";
import { Table } from "components/shared/Tables";
import TablePagination from "components/shared/Tables/TablePagination";
import TableFilter from "components/shared/Tables/TableFilter";
import Main from "layout/Main"
import { Button, Box } from "components/shared/library"
import { mainHeaderLink } from "./utilities/headerLinks";

import ArrowSets from "components/shared/BackButton/ArrowSets";
import Indicator from "components/shared/Indicator";
import { isValidV4UUID, reGroup } from "utils";

import { Success, Error } from "components/shared/Modal";
import useSendToAPI from "utils/hooks/useSendToApi";
import { useQuery } from "@tanstack/react-query";
import useForm, { hasError } from "utils/hooks/useForm";
import {
  getUsersByFilter
} from "api/services/User"

const InformationTip = ({status, message,ref}) => (
<div className="centered box" ref={ref}>
  <h6 className="statusInfo">{status}</h6>
  <p className="messageInfo"> {message}</p>
</div>
)

function Home() {
  const navigate = useNavigate();


  const defaultErrorTitle = "Sample text creation failed";
  const defaultErrorMessage =
    "Sample text failed due to invalid inputs or your internet connection may be unstable.";
  const defaultSuccessTitle = "Sample text created";
  const defaultSuccessMessage =
    "You have successfully created an Sample text.";
  const { id, type } = useParams();
  const [editable, setEditable] = useState(false);
  const [headerLinks, setHeaderLinks] = useState([]);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState(defaultErrorTitle);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
  const [successTitle, setSuccessTitle] = useState(defaultSuccessTitle);
  const [successMessage, setSuccessMessage] = useState(defaultSuccessMessage);

  const [initialValues, setInitialValues] = useState({
    name: "",

  });

  const filterColumns = [
    { name: "sample", id: "name" },
    { name: "sample Code", id: "code" },
    { name: "Creation Date", id: "creationDate" },
  ];

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortColumn, setSortColumn] = useState("creationDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const [globalFilteration, setInitialGlobalFilterFunction] = useState(
    (value) => (value) => value
  );
  const [searchField, setSearchField] = useState("");

  const { data: response, isLoading } = useQuery(
    ["users", pageNumber, pageSize, sortColumn, sortOrder],
    () =>
    getUsersByFilter({
        pageSize,
        pageNumber,
        sortColumn,
        sortOrder,
      })
  );
 

  const columns = [
    {
      Header: "Mock 1",
      accessor: "name",
    },
    {
      Header: "Moc2",
      accessor: "",
    },

    {
      Header: "Address",
      accessor: "",
    },

    {
      Header: "Status",
      accessor: "",
      Cell: (data) => {
        if (data.cell.row.original.isActive == true)
          return (
            <Indicator
              title="Active"
              indicatorClass="online-indicator"
              blinkClass="blink"
            />
          );
        else
          return (
            <Indicator
              title="Inactive"
              indicatorClass="offline-indicator"
              blinkClass="blink-deactivated"
            />
          );
      },
    },
    {
      Header: "Action",
      accessor: "",
      Cell: (data) => (
        <Button onClick={() => navigate(`${data.cell.row.original.id}`)}>
          Manage
        </Button>
      ),
    },
  ];

  const handleSort = (value: string) => {
    setSortOrder((val) => value);
  };

  const handleSortColumn = (value: string) => {
    const accessor = value;
    setSortColumn(accessor);
  };

  const handleSearch = (value: string) => {
    setSearchField(value);
  };

  return (
    <Main
      mainRoute
      links={mainHeaderLink}
      headerActions={
        <Button
          size="md"
          color="secondary"
          variant="outline"
          onClick={() => navigate("create")}
        >
          Create Sample
        </Button>
      }
    >
      <Box mb="5">
        <TableFilter
          filterColumns={filterColumns}
          onSort={handleSort}
          onSortColumn={handleSortColumn}
          onSearch={handleSearch}
          setInitialGlobalFilterFunction={(val) => globalFilteration(val)}
        />
      </Box>

      <Table
        tableColumns={columns}
        tableData={ []}
        isLoading={isLoading}
        pageSize={pageSize}
        gloBalFilter={searchField}
        setInitialGlobalFilterFunction={setInitialGlobalFilterFunction}
        selectedSortColumn={sortColumn}
        selectedSortOrder={sortOrder}
      />

      <Box mt="10">
        <TablePagination
          isLoading={isLoading}
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalRows={0}
        />
      </Box>
    </Main>
  );
}

export default Home;
