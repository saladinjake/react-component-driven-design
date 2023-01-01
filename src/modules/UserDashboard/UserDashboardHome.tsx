import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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

const CardInfo =styled.div`

h1{
    font-size:2em;
    margin:.67em 0;
}
 *{
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
   font-family: Roboto, sans-serif;
}
 h1{
    font-weight:bold;
    margin-bottom:10px;
}
 h1{
    font-size:38px;
    line-height:44px;
    margin-top:20px;
}
 .w-row:before,.w-row:after{
    content:" ";
    display:table;
}
 .w-row:after{
    clear:both;
}
 .w-col{
    position:relative;
    float:left;
    width:100%;
    min-height:1px;
    padding-left:10px;
    padding-right:10px;
}
 .w-col-3{
    width:15%;
}
 @media screen and (max-width:767px){
     .w-row{
        margin-left:0;
        margin-right:0;
    }
     .w-col{
        width:100%;
        left:auto;
        right:auto;
    }
}
 @media screen and (max-width:479px){
     .w-col{
        width:100%;
    }
}
 h1{
    margin-top:15px;
    margin-bottom:15px;
    font-size:42px;
    line-height:54px;
    font-weight:400;
}
 .divider{
    height:1px;
    margin-top:20px;
    margin-bottom:15px;
    background-color:#eee;
}
 .style-label{
    color:#bebebe;
    font-size:12px;
    line-height:20px;
    font-weight:500;
    text-transform:uppercase;
}
 .tag-wrapper{
    margin-top:35px;
    margin-bottom:35px;
    padding-right:5px;
    padding-left:5px;
}
 .row{
    margin-bottom:50px;
}
 .number-card-number{
    margin-top:0px;
    margin-bottom:0px;
    color:#fff;
    font-weight:300;
}
 .tagline{
    font-size:12px;
    font-weight:500;
    letter-spacing:2px;
    text-transform:uppercase;
}
 .tagline.number-card-currency{
    color:#fff;
}
 .basic-column{
    padding-right:5px;
    padding-left:5px;
}
 .number-card{
    padding:22px 30px;
    border-radius:8px;
    background-image:-webkit-linear-gradient(270deg, #1991eb, #1991eb);
    background-image:linear-gradient(180deg, #1991eb, #1991eb);
}
 .number-card.number-card-content3{
    background-image:-webkit-linear-gradient(270deg, #ed629a, #c850c0);
    background-image:linear-gradient(180deg, #ed629a, #c850c0);
}
 .number-card.number-card-content4{
    background-image:-webkit-linear-gradient(270deg, #ff8308, #fd4f00);
    background-image:linear-gradient(180deg, #ff8308, #fd4f00);
}
 .number-card.number-card-content2{
    display:block;
    background-image:-webkit-linear-gradient(270deg, #17cec4, #17cec4 0%, #08aeea);
    background-image:linear-gradient(180deg, #17cec4, #17cec4 0%, #08aeea);
    color:#333;
}
 .number-card.number-card-content1{
    background-image:-webkit-linear-gradient(270deg, #7042bf, #3023ae);
    background-image:linear-gradient(180deg, #7042bf, #3023ae);
}
 .number-card-progress-wrapper{
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:justify;
    -webkit-justify-content:space-between;
    -ms-flex-pack:justify;
    justify-content:space-between;
}
 .number-card-divider{
    height:1px;
    margin-top:10px;
    margin-bottom:14px;
    background-color:hsla(0, 0%, 100%, .15);
}
 .number-card-dollars{
    color:hsla(0, 0%, 100%, .8);
    font-size:16px;
    line-height:24px;
}
 .number-card-progress{
    color:#fff;
    text-align:right;
}
 @media (max-width: 991px){
     .number-card-number{
        font-size:30px;
    }
     .number-card{
        padding-top:12px;
        padding-bottom:16px;
    }
}

`