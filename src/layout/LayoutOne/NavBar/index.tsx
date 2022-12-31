import { useLocation, useNavigate } from "react-router-dom";

import Text from "components/shared/library/components/Text-v1";
import Flex from "components/shared/library/components/Flex-v1";
import Box from "components/shared/library/components/Box-v1";
import { useAuth } from "context/AuthContext";
import styled from "styled-components";
import { Svg } from "assets/svg";

const pageMap = {
  dashboard: "Dashboard",
  "charges-management": "Charges Management",
  "customer-information-management": "Customer Information Management",
  "fees-management": "Fees Management",
  "general-ledger-(gl)-management": "General Ledger (GL) Management",
  "interests-management": "Interests Management",
  "lien-management": "Lien Management", //leave this lien management for aramide
  "loan-account-management": "Loan Account Management", //leave this loan account management for aramide
  "postings-management": "Postings Management", //leave this postings management for aramide
  "product-management": "Product Management", //leave product management for aramide
  "approval-management": "Approval Management",
  "audit-trail-management": "Audit Trail Management",
  "branch-management": "Branch Management",
  "business-operations-management": "Business Operations Management",
  "menu-management": "Menu Management",
  "page-management": "Page Management",
  "region-management": "Region Management",
  "system-setup-management": "System Setup Management",
  "user-function-management": "User Function Management",
  "user-role-management": "User Role Management",
};

const NavBar = () => {
  const { googleProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const splitLocationPathName = location.pathname.split("/");

  return (
    <Flex height="100%" width="95%" mx="auto" justifyContent="between" style={{
      boxShadow:"box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
    }}> 
      <Flex height="100%" alignItems="center">
        {splitLocationPathName.length > 2 ? (
          <StyledButtonWrapper
            as="button"
            backgroundColor="#4062FF"
            width="40px"
            height="31px"
            alignItems="center"
            justifyContent="center"
            mr="3"
            onClick={() => navigate(-1)}
          >
            <Svg.BackArrow />
          </StyledButtonWrapper>
        ) : null}

        <Text color="kudaWhite" fontWeight="900" fontSize="17px">
          {pageMap[splitLocationPathName[1]]}
        </Text>
      </Flex>

      <Flex height="100%" alignItems="center">
        <Svg.NotificationBell />

        <Box ml="8" style={{ marginTop: "2.5px" }}>
          <Svg.CogWheel />
        </Box>

        <Flex alignItems="center" ml="8">
          <Flex
            height="32px"
            width="32px"
            backgroundColor="grey"
            alignItems="center"
            justifyContent="center"
            style={{ borderRadius: "100%" }}
            mr="3"
          >
            <Box
              as="img"
              src={googleProfile?.picture}
              alt=""
              height="100%"
              rounded="100%"
              cursor="pointer"
            />
          </Flex>

          <Svg.Chevron />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;

const StyledButtonWrapper = styled(Flex)`
  border-radius: 63.9375px;
  border: 0;
  cursor: pointer;
`;
