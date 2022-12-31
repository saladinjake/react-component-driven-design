import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    font-family: Muli, Open-Sans, Helvetica, Sans-Serif;
    background-color: #FBFDFF;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration:none;
  }


  /* &::-webkit-scrollbar {
    width: 10px;
  }

  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

 
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  } */
`;
