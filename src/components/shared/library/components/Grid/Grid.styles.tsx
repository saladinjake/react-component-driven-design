import styled, { css } from "styled-components";
import theme from "../../theme";
import { GridProps } from "./Grid.types";

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.templateColumn ? props.templateColumn : ""};
  grid-template-rows: ${(props) =>
    props.templateRow ? props.templateRow : ""};
  grid-gap: ${(props) => (props.gap ? props.gap : "")};
  grid-row-gap: ${(props) => (props.rowGap ? props.rowGap : "")};
  grid-column-gap: ${(props) => (props.columnGap ? props.columnGap : "")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default StyledGrid;
