import styled from "styled-components";

import { SearchFieldProps } from "./SearchField.types";

export const StyledSearchField = styled.div<SearchFieldProps>`
  display: flex;
  align-items: center;
  border: 1px solid #dbdce0;
  border-radius: 5px;
  padding: 13px 7px;
  width: ${(props) => props.width || "auto"};
  background-color: #fff;
  height: ${(props) => (props.height ? props.height : "auto")};

  .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  input {
    flex-grow: 1;
    border: none;
    outline: none;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    .icon {
      width: 2rem;
    }
  }


  .tooltip{
	position: absolute;
	background: #D7E3F9;
  margin-bottom:-130px;
	color: #4C4C80;
	padding: 0.7rem 1rem;
	border-radius: 10px;
	border-top-left-radius: 0;
	z-index: 300;
	font-size: 12px;
	line-height: 1.5rem;
	border: 1px solid #A3B7DC;
	box-shadow: 1px 2px 8px rgba(0,0,100,0.2);
	opacity: 0;
	transition-duration: 0.2s;
	transition-properties: opacity;
}


`;
