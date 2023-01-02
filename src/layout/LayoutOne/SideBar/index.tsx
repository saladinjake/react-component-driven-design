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
import styled from "styled-components";
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

  const { Briefcase,Dashboard,Decision,
    Guarantor,Loan,Savings,Users,
    LoanRequest,Whitelist,Karma,
    FeeNPricing,FeeNCharge,Pref,
    Reports,SavingsProduct,ServiceACC,
    Services, Settlement,Transaction,
    Logout
  } = Svg;

  const getRoleId = () =>
    JSON.parse(localStorage.getItem("sampleAppUserData")).userRoleID;

  const Menus = [
    {
      name: "Users",
      icon: <Users />,
      link:"/dashboard"
    },
    {
      name: "Guarantors",
      icon: <Guarantor />,
      link:"/dashboard"
    },
    {
      name: "Loans",
      icon: <Loan />,
      link:"/dashboard"
    },
    {
      name: "Decision Model",
      icon: <Decision />,
      link:"/dashboard"
    },
    {
      name: "Savings",
      icon: <Savings />,
      link:"/dashboard"
    },

    {
      name: "Loans Request",
      icon: <LoanRequest />,
      link:"/dashboard"
    },

    {
      name: "WhiteList",
      icon: <Whitelist />,
      link:"/dashboard"
    },

    {
      name: "Karma",
      icon: <Karma />,
      link:"/dashboard"
    },
  ];

  const MenuBack = [
    {
      name: "Organization",
      icon: <Briefcase/>,
      link:"/dashboard"
    },
    {
      name: "Loan Products",
      icon: <Loan />,
      link:"/dashboard"
    },
    {
      name: "Savings Product",
      icon: <Savings/>,
      link:"/dashboard"
    },
    {
      name: "Fees And Charges",
      icon: <FeeNCharge/>,
      link:"/dashboard"
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

  const Organizations = () =>{
    return(
      <StyledDropdowns>
          <div className="dropdown-form">
          <Briefcase />
      <select name="hockeyList">
        <option>Switch Organization</option>
        <option value="a">Rangers</option>
        <option value="b">Islanders</option>
        <option value="c">Penguins</option>
      </select>
    </div>

      </StyledDropdowns>
    
      
    )
  }

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
          <Organizations/>
           
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

          <hr/>
          <Box mt="5" mb="4">
            <SideBarItem
              name="Logout"
              link="/login"
              Icon={<Logout/>}
              menuItem={dashboardMenuItem}
            />
          </Box>

          <Box mt="5" mb="4">
            <SideBarItem
              name="V.1.20"
              link="/login"
              
              menuItem={dashboardMenuItem}
            />
          </Box>
        </Box>
      </Wrapper>
    </StyledSidebar>
  );
}

const StyledDropdowns=styled.div`
.dropdown-form, .dropdown-options {
  border:none;
  margin-left:25px;
}

select {
  padding: 5px;
  border-radius: 4px;
  font-size: 16px;
  border:none;
}

.dropdown-options {
  font-family: Arial;
}
`

export default Sidebar;
