import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  overflow-y: hidden;
  height: 100vh;
  :hover {
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }






`;

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 330px;
  background-color: #fff;

  transition: 0.5s;
  position: fixed;
`;

export default StyledSidebar;
