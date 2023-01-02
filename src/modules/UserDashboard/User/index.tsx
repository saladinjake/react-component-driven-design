import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Flex,
  Avatar,
} from "components/shared/library";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "context/AuthContext";
import LoadingBoxes from "../components/LoadingBoxes";

import Main from "layout/Main";
import HeaderActions from "../components/HeaderActions";
import { Svg } from "assets/svg";

import { Input, Select, Radio, Button } from "components/shared/library";

import {
  createLinks,
  manageLinks,
} from "modules/UserDashboard/utilities/headerLinks";


import { getUserById } from "api/services/User";




const queryKeys = {
  getById: "user",
};

function UserDetail() {
  const defaultErrorTitle = "Region creation failed";
  const defaultErrorMessage =
    "Sample creation failed due to invalid inputs or your internet connection may be unstable.";
  const defaultSuccessTitle = "Branch created";
  const defaultSuccessMessage = "You have successfully created a new sample";
  const { id } = useParams();
  const [editable, setEditable] = useState(false);
  const [headerLinks, setHeaderLinks] = useState([]);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState(defaultErrorTitle);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
  const [successTitle, setSuccessTitle] = useState(defaultSuccessTitle);
  const [successMessage, setSuccessMessage] = useState(defaultSuccessMessage);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const { user } = useContext(AuthContext);

  const [initialValues, setInitialValues] = useState({
    code: "",
    name: "",
    isHeadOffice: false,
    regionID: "",
    address: "",
    branchStatus: 0,
    isActive: false,
  });

  
  useEffect(() => {
    if (id === "create") {
      setEditable(true);
      setHeaderLinks(createLinks);
    } else {
      setHeaderLinks(manageLinks(id));
    }
  }, [id]);

  const navigate = useNavigate();

  const {data: results,  isFetching , isLoading} = useQuery(
    [queryKeys.getById, id],
    () => getUserById(id),
    {
      enabled: id !== "create",
      onSuccess({ data: response }) {
        setInitialValues((initialValues) => ({
          ...initialValues,
        }));
      },
    }
  );

  console.log(results)

  const tabs = [
    { id: 1, name: "General Detail", type: "1" },
    { id: 2, name: "Documents", type: "2" },

    { id: 3, name: "BanK Details", type: "3" },
    { id: 4, name: "Loans", type: "4" },
    { id: 5, name: "Savings", type: "5" },

    { id: 6, name: "App And System", type: "6" },
  ];

  const [currentTab, setCurrentTab] = useState(1);



  if(isLoading){
    return (
     <LoadingBoxes />
    )
  }

  return (
    <Main
      subRoute
      subRouteLinks={headerLinks}
      headerActions={
        <HeaderActions
          isActive={initialValues.isActive}
          setEditable={setEditable}
          handleStatusUpdate={() => setShowAlertModal(true)}
        />
      }
    >
      <StyledInformationModal>
        <Grid templateColumn="repeat(4,1fr)" gap="32px 49px">
          <GridItem>
            <Flex
              direction="row"
              alignItems="start"
              style={{
                borderRight: "1px solid #545F7D",
                height: "50px",
              }}
            >
              <Avatar shape="rounded" type="text" src={results?.profile?.avatar} />
              <Box ml="3">
                <DetailLabel>{results?.profile?.firstName + " "+ results?.profile?.lastName }</DetailLabel>
                <DetailValue>{results?.accountNumber
}</DetailValue>
              </Box>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              direction="column"
              alignItems="start"
              style={{
                borderRight: "1px solid #545F7D",
                height: "50px",
              }}
            >
              <DetailLabel>User's tier</DetailLabel>
              <DetailValue>
                <Svg.TiersStar />
                <Svg.TiersStar />
                <Svg.TiersStar />
              </DetailValue>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              direction="column"
              alignItems="start"
              style={{
                height: "50px",
              }}
            >
              <DetailLabel>N{results?.accountBalance
}</DetailLabel>
              <DetailValue>{"9912345678/Providus Bank"}</DetailValue>
            </Flex>
          </GridItem>
        </Grid>
        <Wrapper px="6">
          <TabContainer>
            {tabs.map((tab) => (
              <Tab
                as="button"
                active={tab.id === currentTab}
                cursor="pointer"
                alignItems="center"
                position="relative"
                justifyContent="center"
                onClick={() => setCurrentTab(tab.id)}
              >
                <TabText>{tab.name}</TabText>

                {tab.id === currentTab && <Line />}
              </Tab>
            ))}
          </TabContainer>
        </Wrapper>
      </StyledInformationModal>

      <StyledInformationModal>
        {currentTab === 1 && (
          <Grid templateColumn="repeat(4,1fr)" gap="32px 49px">
            <GridItem colSpan={5}>
              <Flex justifyContent="start">
                <Heading text="Personal Information" />
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>FULL NAME</DetailLabel>
                <DetailValue>{results?.profile?.firstName + " "+ results?.profile?.lastName }</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>PHONE NUMBER</DetailLabel>
                <DetailValue>{results?.profile?.phoneNumber}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>EMAIL ADDRESS</DetailLabel>
                <DetailValue>{results?.email}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>BVN</DetailLabel>
                <DetailValue>{results?.profile?.bvn}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>GENDER</DetailLabel>
                <DetailValue>{results?.profile?.gender}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>MARITAL STATUS</DetailLabel>
                <DetailValue>{"N/A"}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>CHILDREN</DetailLabel>
                <DetailValue>{"N/A"}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>TYPE OF RESIDENCE</DetailLabel>
                <DetailValue>{"N/A"}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem colSpan={5}>
              <Flex justifyContent="start">
                <Heading text="Education And Employment" />
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>LEVEL OF EDUCATION</DetailLabel>
                <DetailValue>{results?.education?.level}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>EMPLOYMENT STATUS</DetailLabel>
                <DetailValue>{results?.education?.employmentStatus}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>SECTOR OF EMPLOYMENT</DetailLabel>
                <DetailValue>{results?.education?.sector}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>DURATION OF EMPLOYMENT</DetailLabel>
                <DetailValue>{results?.education?.duration}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>OFFICIAL EMAIL</DetailLabel>
                <DetailValue>{results?.education?.officeEmail}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>MONTHLY INCOME</DetailLabel>
                <DetailValue>{Array.isArray(results?.education?.monthlyIncome)? results?.education?.monthlyIncome[0]: "N/A"}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>LOAN REPAYMENT</DetailLabel>
                <DetailValue>{results?.education?.loanRepayment}</DetailValue>
              </Flex>
            </GridItem>

          

            <GridItem colSpan={5}>
              <Flex justifyContent="start">
                <Heading text="Socials" />
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>TWITTER</DetailLabel>
                <DetailValue>{results?.socials?.twitter}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>FACEBOOK</DetailLabel>
                <DetailValue>{results?.socials?.facebook}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>INSTAGRAM</DetailLabel>
                <DetailValue>{results?.socials?.instagram}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem colSpan={5}>
              <Flex justifyContent="start">
                <Heading text="Guarantors" />
              </Flex>
            </GridItem>


            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>FULL NAME</DetailLabel>
                <DetailValue>{results?.guarantor?.firstName+ " " +results?.guarantor?.lastName}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>PHONE NUMBER</DetailLabel>
                <DetailValue>{results?.guarantor?.phoneNumber}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>EMAIL ADDRESS</DetailLabel>
                <DetailValue>{results?.guarantor?.email || "N/A"}</DetailValue>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex direction="column" alignItems="start">
                <DetailLabel>RELATIONSHIP</DetailLabel>
                <DetailValue>{"N/A"}</DetailValue>
              </Flex>
            </GridItem>
            <hr/>

            
          </Grid>
        )}

        {currentTab === 2 && <>Hire me</>}
        {currentTab === 3 && <>Hire me</>}
      </StyledInformationModal>
    </Main>
  );
}

export default UserDetail;

export const StyledLabel = styled.div`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const StyledInformationModal = styled.div`
  text-align: start;

  margin-bottom: 20px;

  padding: 40px;
  background: #ffffff;
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

export const DetailLabel = styled.div`
  font-size: 13px;
  color: #979797;
  margin: 5px;
`;

export const DetailValue = styled.div`
  font-size: 15px;
  color: black;
  margin: 7px;
`;

const Line = styled.div<{ tabContainerWidth?: number | string }>`
  border-radius: 10px 10px 0px 0px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  background-color: #39cdcc;
  height: 4px;
  position: absolute;
`;

const TabText = styled.span`
  font-weight: 800;
  font-size: 15px;
`;

const TabContainer = styled(Flex)`
  column-gap: 22px;
`;

const Tab = styled(Flex)<{ active: boolean }>`
  border: none;
  background: ${(props) => (props.active ? "white" : "#fff")};
  height: 56px;
  width: 250px;
  margin-top: 30px;
  color: ${(props) => (props.active ? "#39CDCC" : "#000")};
`;

const TabNotification = styled(Flex)`
  background: #f7685b;
  color: white;
  font-size: 11px;
  font-weight: 900;
`;

const Wrapper = styled(Flex)`
  border-bottom: 1px solid #dbdce0;
  margin-top: 30px;
  margin-bottom: 0px;
`;
