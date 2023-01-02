import { useLocation, useNavigate } from "react-router-dom";

import Text from "components/shared/library/components/Text-v1";
import Flex from "components/shared/library/components/Flex";
import Box from "components/shared/library/components/Box";
import { useAuth } from "context/AuthContext";
import styled from "styled-components";
import { Svg } from "assets/svg";
import {  SearchField } from "components/shared/library";

const pageMap = {
  dashboard: "Dashboard",
  sample1: "sample1",
};

const NavBar = () => {
  const { userProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const splitLocationPathName = location.pathname.split("/");

  return (
    <Flex
      height="100%"
      width="100%"
      mx="auto"
      justifyContent="between"
      style={{
        height:"90px",
        borderBottom: "1px solid #dbdce0",
        boxShadow:
          "box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
      }}
    >
      <Flex height="100%" alignItems="center">
        <Text color="#000" fontWeight="900" fontSize="17px">
        <div className="filter-global-search-container" style={{
          marginLeft:"50px"
        }}>
          <form
            onSubmit={(e) => {
             
            }}
          >
            <SearchField
              withBtn
              placeholder="Search"
              btnText="Search"
              width="100%"
              height="48px"
              value={"sample"}
              searchColumns={[]}
              onChange={(e) => {
                
              }}
              onResetSearch={() =>{
                
              }}
            />
          </form>
        </div>
        </Text>
      </Flex>

      <Flex height="100%" alignItems="center">
        <Svg.NotificationBell />
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
              src={userProfile?.picture}
              alt=""
              height="100%"
              rounded="100%"
              cursor="pointer"
            /><p>Adedeji</p>

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
