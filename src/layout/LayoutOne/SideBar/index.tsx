import { useState, useRef, useMemo } from "react";
import StyledSidebar, { Wrapper } from "./Sidebar.styles";
import { Svg } from "assets/svg";
import { getSiteMapByRoleID } from "api/services/sitemaps";
import comparator from "utils/comparator";
import SearchInput from "components/shared/SearchInput";
import SideBarGroup from "./components/SideBarGroup";
import SideBarItem from "./components/SideBarItem";
import Box from "components/shared/library/components/Box-v1";
import Flex from "components/shared/library/components/Flex";
import { useQuery } from "@tanstack/react-query";

type SideBarProps = {
  width?: string;
  toggleSideBar?: (val: boolean) => void;
};

const queryKeys = {
  getSiteMap: "get_site_map",
};

function Sidebar({ width, toggleSideBar }: SideBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const refSideBar = useRef<HTMLDivElement>();

  const getRoleId = () =>
    JSON.parse(localStorage.getItem("sampleAppUserData")).userRoleID;

  

 

    const Menus = [
      {
       name: "Sample 1"
      },{
        name: "Sample 1"
      },{
        name: "sample Card"
      }
      
    ]

  const frontOffice = useMemo(
    () =>
      Menus?.filter((menu) =>
        menu.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  

  const handleSearch = (value) => setSearchValue(value);

  const dashboardMenuItem = {
    ID: "0",
    Name: "Dashboard",
    SubMenus: [],
  };

  return (
    <StyledSidebar ref={refSideBar}>
      <Box
        borderBottomColor="#DBDCE0"
        borderWidth="1px"
        borderBottomStyle="solid"
      >
        <Box height="90px" width="90%" mx="auto">
          <Flex justifyContent="between" alignItems="center" height="100%">
            <>My Sample UI</>
            <div>
              <Flex
                as="button"
                backgroundColor="transparent"
                borderStyle="none"
                cursor="pointer"
              >
                <Svg.Hamburger />
              </Flex>
            </div>
          </Flex>
        </Box>
      </Box>

      <Box
        mt="5"
        pb="5"
        borderWidth="1px"
        borderBottomColor="#DBDCE0"
        borderBottomStyle="solid"
      >
        <Box width="90%" mx="auto">
          <SearchInput onChange={handleSearch} />
        </Box>
      </Box>

      <Wrapper>
        <Box width="90%" mx="auto">
          <Box mt="5" mb="4">
            <SideBarItem
              name="Dashboard"
              link="/dashboard"
              menuItem={dashboardMenuItem}
            />
          </Box>

          { <Box mb="7">
            <SideBarGroup
              name="Quick Service"
              menuItems={frontOffice}
              searchQuery={searchValue}
              isLoading={false}
            />
          </Box>

          }
        </Box>
      </Wrapper>
    </StyledSidebar>
  );
}

export default Sidebar;
