import styled from "styled-components";
import Base from "../Base";
import { IGridItemProps, IGridProps } from "./Grid.types";

export const GridRoot = styled(Base)<IGridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.gridTemplateColumn ? props.gridTemplateColumn : ""};
  grid-template-rows: ${(props) =>
    props.gridTemplateRow ? props.gridTemplateRow : ""};
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "")};
  grid-row-gap: ${(props) => (props.gridRowGap ? props.gridRowGap : "")};
  grid-column-gap: ${(props) =>
    props.gridColumnGap ? props.gridColumnGap : ""};
`;

export const Item = styled(Base)<IGridItemProps>`
  ${(props) => (props.gridColumn ? `grid-column: ${props.gridColumn}` : "")};
  ${(props) =>
    props.gridColumnStart ? `grid-column-start: ${props.gridColumnStart}` : ""};
  ${(props) =>
    props.gridColumnEnd ? `grid-column-end: ${props.gridColumnEnd}` : ""};
  ${(props) => (props.gridRow ? `grid-row: ${props.gridRow}` : "")};
  ${(props) =>
    props.gridRowStart ? `grid-row-start: ${props.gridRowStart}` : ""};
  ${(props) => (props.gridRowEnd ? `grid-row-end: ${props.gridRowEnd}` : "")};
`;
