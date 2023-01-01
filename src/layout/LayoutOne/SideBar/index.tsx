import { useState, useRef, useMemo } from "react";
import StyledSidebar, { Wrapper } from "./Sidebar.styles";
import { Svg } from "assets/svg";
import { getSiteMapByRoleID } from "api/services/sitemaps";
import comparator from "utils/comparator";
import SearchInput from "components/shared/SearchInput";
import SideBarGroup from "./components/SideBarGroup";
import SideBarItem from "./components/SideBarItem";
import Box from "components/shared/library/components/Box";
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
      name: "Users",
    },
    {
      name: "Guarantors",
    },
    {
      name: "Loans",
    },
    {
      name: "Decision Model",
    },
    {
      name: "Savings",
    },

    {
      name: "Loans Request",
    },

    {
      name: "WhiteList",
    },

    {
      name: "Karma",
    },
  ];

  const MenuBack = [
    {
      name: "Organization",
    },
    {
      name: "Loan Products",
    },
    {
      name: "Savings Product",
    },
    {
      name: "Fees And Charges",
    },
    {
      name: "Transactions",
    },

    {
      name: "Services",
    },

    {
      name: "Service Account",
    },

    {
      name: "Settlements",
    },

    {
      name: "Reports",
    },
  ];

  const settingMaps = [
    {
      name: "Prefrences",
    },
    {
      name: "Fees And Pricing",
    },
    {
      name: "Audit Logs",
    },
  ];

  const office = useMemo(
    () =>
      Menus?.filter((menu) =>
        menu.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const business = useMemo(
    () =>
      MenuBack?.filter((menu) =>
        menu.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const settings = useMemo(
    () =>
      settingMaps?.filter((menu) =>
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
        borderBottomColor="#fafafa"
        borderWidth="1px"
        borderBottomStyle="solid"
      >
        <Box height="90px" width="90%" mx="auto">
          <Flex justifyContent="between" alignItems="center" height="100%">
            <Svg.SampleLogo />
          </Flex>
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

          <Box mb="7">
            <SideBarGroup
              name="CUSTOMERS"
              menuItems={office}
              searchQuery={searchValue}
              isLoading={false}
            />
          </Box>

          <Box mb="7">
            <SideBarGroup
              name="BUSINESS"
              menuItems={business}
              searchQuery={searchValue}
              isLoading={false}
            />
          </Box>

          <Box mb="7">
            <SideBarGroup
              name="SETTINGS"
              menuItems={settings}
              searchQuery={searchValue}
              isLoading={false}
            />
          </Box>
        </Box>
      </Wrapper>
    </StyledSidebar>
  );
}

export default Sidebar;
