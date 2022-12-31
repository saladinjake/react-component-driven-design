import styled, { css } from "styled-components";

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.size === "sm" &&
    css`
      width: 10px;
      height: 10px;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      width: 30px;
      height: 30px;
    `}
`;
