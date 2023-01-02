import styled from "styled-components";
import { useEffect } from "react";
export const VerticalDotMenu = ({
  handleDropdown,
  handleBlackListUser,
  handleViewDetail,
}) => {

  function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  useEffect(() => {
    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }, []);
  return (
    <ActionBtnStyled>
      <div className="headerx">
        <div className="dropdown">
          <ul
            className="dropbtn icons btn-right showLeft"
            onClick={showDropdown}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div id="myDropdown" className="dropdown-content">
            <a href="#home" onClick={handleBlackListUser}>
              Blacklist User
            </a>
            <a href="#about" onClick={handleViewDetail}>
              View Detail
            </a>
          </div>
        </div>
      </div>
    </ActionBtnStyled>
  );
};

const ActionBtnStyled=styled.div`
  .headerx{
     position:relative;
  }
  .showLeft {
    background-color: #fff !important;
    border: 1px solid #fff !important;
    text-shadow: #fff !important;
    color: #fff !important;
    padding: 2px;
  }
  .icons li {
    background: none repeat scroll 0 0 black;
    height: 7px;
    width: 7px;
    line-height: 0;
    list-style: none outside none;
    margin-right: 15px;
    margin-top: 3px;
    vertical-align: top;
    border-radius: 50%;
    pointer-events: none;
  }
  .btn-left {
    left: 0.4em;
  }
  .btn-right {
    right: 30px;
    margin-top:-35px;
  }
  .btn-left,
  .btn-right {
    /* position: absolute; */
    
  }
  .dropbtn {
    background-color: #fff;
    position: fixed;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  .dropbtn:hover,
  .dropbtn:focus {
    background-color: #fff;
  }
  .dropdown {
    position: absolute;
    display: inline-block;
    right: 0.4em;
  }
  .dropdown-content {
    display: none;
    position: relative;
    margin-top: 60px;
    background-color: #f9f9f9;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {
    background-color: #f1f1f1;
  }

  .show {
    display: block;
  }
`;
