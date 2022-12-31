import React, { useState, useEffect, useRef } from "react";
import StyledDashboard from "./Dashboard.styles";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { isValidV4UUID } from "utils/index";

import ArrowSets from "components/shared/BackButton/ArrowSets";
type DashboardProps = {
  moduleName: string;
  children: React.ReactNode;
};

function Dashboard({ moduleName, children }: DashboardProps) {
  document.title = `${moduleName}`;
  const [showSidebar, setShowSideBar] = useState(true);
  const mainArea = useRef<HTMLDivElement>();
  const sideArea = useRef<HTMLDivElement>();
  const [showBackButton, setShowBackButton] = useState(false);
  const [id, setID] = useState(null);
  const routeChange = useLocation();
  const navigation = useNavigate();
  const [reloadEnabled, setReloadEnabled] = useState(false);

 

  
  
  return (
    <StyledDashboard>
      <>{showSidebar && <div ref={sideArea} className="side-bar"></div>}</>
      <div className="main-area" ref={mainArea}>
        <div className="main-area_header">
          <>
            {!showSidebar && (
              <span>
                <div
                  className="hamburger-menu-close active"
                  onClick={() => {
                    setShowSideBar((prev) => !prev);
                    mainArea.current.classList.remove("full-width");
                    mainArea.current.classList.add("main-area");
                  }}
                >
                  <div className="menu-bar1"></div>
                  <div className="menu-bar2 long-arrow-left"></div>
                  <div className="menu-bar3"></div>
                </div>
              </span>
            )}
          </>
          {showBackButton && (
            <ArrowSets onClick={() => navigation(-1)}>
              <div className="baseBg">
                <span className="go-back"></span>
              </div>
            </ArrowSets>
          )}
          {moduleName}
        </div>

        {children}
      </div>
    </StyledDashboard>
  );
}

export default Dashboard;
