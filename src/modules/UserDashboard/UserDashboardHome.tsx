import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Create } from "components/basic/SvgPack";
import Icon from "components/shared/Icons/Icon";
import { Table } from "components/shared/Tables";
import TablePagination from "components/shared/Tables/TablePagination";
import TableFilter from "components/shared/Tables/TableFilter";
import Main from "layout/Main";
import { Button, Box ,Flex} from "components/shared/library";
import { mainHeaderLink } from "./utilities/headerLinks";

import ArrowSets from "components/shared/BackButton/ArrowSets";
import Indicator from "components/shared/Indicator";
import { isValidV4UUID, reGroup } from "utils";
import { Svg } from "assets/svg";

import useSendToAPI from "utils/hooks/useSendToApi";
import { useQuery } from "@tanstack/react-query";
import useForm, { hasError } from "utils/hooks/useForm";
import { getAllUsers  } from "api/services/User";
import { IoMdFunnel } from "react-icons/io";
import { VerticalDotMenu } from "components/shared/library";
import validations  from "./validations"
import { setEnvironmentData } from "worker_threads";
import Pagination from "./components/Paginator";




function Home() {
  const navigate = useNavigate();

  const defaultErrorTitle = "Sample text creation failed";
  const defaultErrorMessage =
    "Sample text failed due to invalid inputs or your internet connection may be unstable.";
  const defaultSuccessTitle = "Sample text created";
  const defaultSuccessMessage = "You have successfully created an Sample text.";
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
  const { AllUsers, ActiveUsers, UserWithLoan, UserWithSavings } = Svg;

  const [initialValues, setInitialValues] = useState({
    allRecords: [],
    currentRecord: [],
    currentPage: null,
    totalPages: null
  });


  const onPageChanged = data => {
    const { allRecords } = initialValues;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentRecord = allRecords.slice(offset, offset + pageLimit);

    setInitialValues({ 
      ...initialValues,
      currentPage, 
      currentRecord, 
      totalPages
     });
  };

 

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

  const [showModalFilter, setShowModalFilter] = useState(false)
  const [allData,setAllData] = useState([])
  const [loadFromStore,setLoadFromStore] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("dataStored")){
      const prefetchedData = JSON.parse(localStorage.getItem("dataStored"))
      setAllData(prefetchedData)
      setLoadFromStore(true)
    }else{
      setLoadFromStore(false)
    }
  },[])

  const pageSizes = [1, 5, 10, 20, 50, 100];

  const getReadableDate = (utcDate:string | undefined):string => {
    if (!utcDate) {
      return 'Invalid Date'
    }
  
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',
    minute: 'numeric',
    second: 'numeric' }
    // @ts-ignore
    return new Date(utcDate).toLocaleDateString(undefined, options)
  }
 
  

  const handlePageSize = ({ target }) => {
    setPageNumber(1);
    setPageSize(Number(target.value));
  };


  const { data: response, isLoading } = useQuery(
    ["", pageNumber, pageSize, sortColumn, sortOrder],
    () =>
    getAllUsers({
        pageSize,
        pageNumber,
        //sortColumn,
        //sortOrder,
      }),
      {
       //enabled:allData?.length>0,
        onSuccess: (data) =>{
          const profileData = data.map(user =>{
            return {
              ...user.profile,
              id: user?.id,
              email: user?.email,
              orgName: user?.orgName,
              phoneNumber: user?.phoneNumber,
              createdAt: user?.createdAt

            }
          })
          let prefetchedStore = localStorage.setItem("dataStored", JSON.stringify(profileData))

          const offset = (1 - 1) * 10;
          const currentRecord = profileData.slice(offset, offset + 10);

          setAllData(profileData)
          setLoadFromStore(true)
          setInitialValues({ 
            ...initialValues,
            allRecords: profileData,
            currentRecord
           });

        }
  });
  console.log(response)

  const Card = (props) => {
    return (
      <div className="basic-column w-col w-col-3">
        <div className="tag-wrapper">
          <div className="number-card number-card-content1">
            <props.Icon></props.Icon>
            <div className="number-card-dollars">{props?.title}</div>
            <h1 className="number-card-number">{props?.value}</h1>

            <div className="number-card-divider"></div>
          </div>
        </div>
      </div>
    );
  };

  const mockFunc = (id) => {
   return  navigate(`manage/${id}`)
  };

 

  const { values, handleChange, handleSubmit, invalid, errors, touched } =
    useForm({
      initialValues,
      validations,
      onSubmit() {
        setShowInformationModal(true);
      },
    });



  const columns = [
    {
      Header: "ORGANIZATION",
      accessor: "orgName",
    },
    {
      Header: "USERNAME",
      accessor: "firstName",
    },

    {
      Header: "EMAIL",
      accessor: "email",
    },
    {
      Header: "PHONE NUMBER",
      accessor: "phoneNumber",
    },
    {
      Header: "DATE JOINED",
      accessor: "createdAt",
      Cell:(data) =>{
        return getReadableDate(data?.value)
      }
    },

    {
      Header: "STATUS",
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
        <VerticalDotMenu
          handleBlackListUser={mockFunc}
          handleDropdown={mockFunc}
          handleViewDetail={data?.value}
        />
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
        <></>
      }
    >
      <CardInfo>
        <div className="row w-row">
          <Card title="USERS" value="1200" Icon={AllUsers} />
          <Card title="ACTIVE USER" value="13000" Icon={ActiveUsers} />
          <Card title="USER WITH LOANS" value="13000" Icon={UserWithLoan} />
          <Card
            title="USER WITH SAVINGS"
            value="13000"
            Icon={UserWithSavings}
          />
        </div>
      </CardInfo>

      <Box mb="5">
        <TableFilter
          filterColumns={filterColumns}
          onSort={handleSort}
          onSortColumn={handleSortColumn}
          onSearch={handleSearch}
          setInitialGlobalFilterFunction={(val) => globalFilteration(val)}
          showModalFilter={showModalFilter} 
          setShowModalFilter={setShowModalFilter}
        />
      </Box>

      <Table
        tableColumns={columns}
        tableData={[...initialValues?.currentRecord]}
        isLoading={isLoading}
        pageSize={pageSize}
        gloBalFilter={searchField}
        setInitialGlobalFilterFunction={setInitialGlobalFilterFunction}
        selectedSortColumn={sortColumn}
        selectedSortOrder={sortOrder}
        values={values}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
        hasError={hasError}
        showModalFilter={showModalFilter} 
          setShowModalFilter={setShowModalFilter}
      />

     

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
      <Box mt="10">
      <Pagination
          totalRecords={100}
          pageLimit={10}
          pageNeighbours={1}
          onPageChanged={onPageChanged}
        />
      </Box>
     </Flex>
      <Box mt="10" mb="20"></Box>
    </Main>
  );
}

export default Home;

const CardInfo = styled.div`
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  h1 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 38px;
    line-height: 44px;
    margin-top: 20px;
  }
  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }
  .w-row:after {
    clear: both;
  }
  .w-col {
    position: relative;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .w-col-3 {
    width: 24%;
  }
  @media screen and (max-width: 767px) {
    .w-row {
      margin-left: 0;
      margin-right: 0;
    }
    .w-col {
      width: 100%;
      left: auto;
      right: auto;
    }
  }
  @media screen and (max-width: 479px) {
    .w-col {
      width: 100%;
    }
  }
  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 54px;
    font-weight: 400;
  }
  .divider {
    height: 1px;
    margin-top: 20px;
    margin-bottom: 15px;
    background-color: #eee;
  }
  .style-label {
    color: #bebebe;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .tag-wrapper {
    margin-top: 35px;
    margin-bottom: 35px;
    padding-right: 5px;
    padding-left: 5px;
  }
  .row {
    margin-bottom: 50px;
  }
  .number-card-number {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #545f7d;
    font-weight: 300;
  }
  .tagline {
    /* font-size:12px;
    font-weight:500;
    letter-spacing:2px;
    text-transform:uppercase; */
  }
  .tagline.number-card-currency {
    color: #213f7d;
    font-size: 14px;
    font-weight: 600px;
  }
  .basic-column {
    padding-right: 5px;
    padding-left: 5px;
  }
  .number-card {
    padding: 22px 30px;
    border-radius: 8px;
  }

  .number-card.number-card-content1 {
    background: #fff;
    box-shadow: -8px 2px 26px 3px rgba(161, 144, 144, 0.68);
    -webkit-box-shadow: -8px 2px 26px 3px rgba(161, 144, 144, 0.68);
    -moz-box-shadow: -8px 2px 26px 3px rgba(161, 144, 144, 0.68);
  }
  .number-card-progress-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .number-card-divider {
    height: 1px;
    margin-top: 10px;
    margin-bottom: 14px;
    background-color: hsla(0, 0%, 100%, 0.15);
  }
  .number-card-dollars {
    color: #000;
    font-size: 14px;
    line-height: 24px;
  }
  .number-card-progress {
    color: #000;
    text-align: right;
  }
  @media (max-width: 991px) {
    .number-card-number {
      font-size: 30px;
    }
    .number-card {
      padding-top: 12px;
      padding-bottom: 16px;
    }
  }
`;



const Arrow =
  "data:image/svg+xml;utf8,<svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.79691 0C1.6082 4.02553e-05 1.42335 0.0534754 1.26373 0.154131C1.10411 0.254786 0.976222 0.398554 0.894854 0.568819C0.813487 0.739084 0.781957 0.928898 0.803909 1.11633C0.82586 1.30375 0.900397 1.48114 1.01891 1.628L4.83291 6.351C4.97351 6.52511 5.15129 6.66556 5.35322 6.76204C5.55515 6.85853 5.77611 6.9086 5.99991 6.9086C6.2237 6.9086 6.44466 6.85853 6.64659 6.76204C6.84852 6.66556 7.0263 6.52511 7.16691 6.351L10.9819 1.628C11.1004 1.48114 11.175 1.30375 11.1969 1.11633C11.2189 0.928898 11.1873 0.739084 11.106 0.568819C11.0246 0.398554 10.8967 0.254786 10.7371 0.154131C10.5775 0.0534754 10.3926 4.02553e-05 10.2039 0H1.79691Z' fill='black'/></svg>";

export const PaginationDropdown = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: ${`url("${Arrow}")`};
  background-repeat: no-repeat;
  background-position-x: 85%;
  background-position-y: 50%;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  padding-left: 0.5rem;
  outline: 0;
  margin: 0 10px;
  width: 60px;
  height: 28px;
  font-weight: 13px;
`;

export const GoToPageInput = styled.input`
  display: inline-block;
  padding: 0.3rem;
  font-weight: 13px;
  width: 45px;
  height: 28px;
  background: #ffffff;
  border: 1px solid #dbdce0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const PlainButton = styled(Box)<{ $isActive?: boolean }>`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: red;
  display: flex;
  opacity: ${(props) => props.$isActive && 0.5};
`;

export const PaginationText = styled(Box)`
  font-size: 14px;
  font-weight: 600;
`;

export const PaginationInfoText = styled(Flex)`
  font-weight: 600;
  font-size: 13.5px;
`;

export const PaginationNumberText = styled(Flex)`
  font-weight: 600;
`;

export const PlainButtonWrapperLeft = styled(Box)`
  border-right: 1px solid #cacaca;
`;
export const PlainButtonWrapperRight = styled(Box)`
  border-left: 1px solid #cacaca;
`;
