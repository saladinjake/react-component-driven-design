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

  const {
    Briefcase,
    Dashboard,
    Decision,
    Guarantor,
    Loan,
    Savings,
    Users,
    LoanRequest,
    Whitelist,
    Karma,
    FeeNPricing,
    FeeNCharge,
    Pref,
    Reports,
    SavingsProduct,
    ServiceACC,
    Services,
    Settlement,
    Transaction,
  } = Svg;

  const getRoleId = () =>
    JSON.parse(localStorage.getItem("sampleAppUserData")).userRoleID;

  const Menus = [
    {
      name: "Users",
      icon: <Users />,
    },
    {
      name: "Guarantors",
      icon: <Guarantor />,
    },
    {
      name: "Loans",
      icon: <Loan />,
    },
    {
      name: "Decision Model",
      icon: <Decision />,
    },
    {
      name: "Savings",
      icon: <Savings />,
    },

    {
      name: "Loans Request",
      icon: <LoanRequest />,
    },

    {
      name: "WhiteList",
      icon: <Whitelist />,
    },

    {
      name: "Karma",
      icon: <Karma />,
    },
  ];

  const MenuBack = [
    {
      name: "Organization",
      icon: <Briefcase/>,
    },
    {
      name: "Loan Products",
      icon: <Loan />,
    },
    {
      name: "Savings Product",
      icon: <Savings/>,
    },
    {
      name: "Fees And Charges",
      icon: <FeeNCharge/>,
    },
    {
      name: "Transactions",
      icon: <Transaction />,
    },

    {
      name: "Services",
      icon: <Services />,
    },

    {
      name: "Service Account",
      icon: <ServiceACC/>,
    },

    {
      name: "Settlements",
      icon: <Settlement />,
    },

    {
      name: "Reports",
      icon: <Reports />,
    },
  ];

  const settingMaps = [
    {
      name: "Prefrences",
      icon: <Pref/>,
    },
    {
      name: "Fees And Pricing",
      icon: <FeeNPricing />,
    },
    {
      name: "Audit Logs",
      icon: <Users />,
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
              name="Switch Organization"
              link="/dashboard"
              Icon={<Briefcase />}
              menuItem={dashboardMenuItem}
            />
          </Box>

          <Box mt="5" mb="4">
            <SideBarItem
              name="Dashboard"
              link="/dashboard"
              Icon={<Dashboard />}
              menuItem={dashboardMenuItem}
            />
          </Box>

          <Box mb="1">
            <SideBarGroup
              name="CUSTOMERS"
              menuItems={office}
              searchQuery={searchValue}
              isLoading={false}
            />
          </Box>

          <Box mb="1">
            <SideBarGroup
              name="BUSINESS"
              menuItems={business}
              searchQuery={searchValue}
              isLoading={false}
            />
          </Box>

          <Box mb="1">
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
