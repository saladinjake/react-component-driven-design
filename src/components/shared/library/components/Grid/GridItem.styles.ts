import styled from "styled-components";
import GridItemProps from "./GridItems.type";

const StyledGridItem = styled.div<GridItemProps>`
  grid-row: ${(props) =>
    props.rowSpan && props.rowStart
      ? props.rowStart + " / span " + props.rowSpan
      : props.rowStart
      ? props.rowStart + " / " + "auto"
      : props.rowSpan
      ? "auto / span " + props.rowSpan
      : "auto / auto"};
  grid-column: ${(props) =>
    props.colSpan && props.colStart
      ? props.colStart + " / span " + props.colSpan
      : props.colStart
      ? props.colStart + " / " + "auto"
      : props.colSpan
      ? "auto / span " + props.colSpan
      : "auto / auto"};
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "unset")};
  background: ${(props) => (props.bg ? props.bg : props.bg)};

  @media screen and (max-width: 1024px) {
    grid-column: ${(props) =>
      props.colStart && props.colSpan
        ? props.colStart + " / span 2"
        : props.colStart
        ? "2 / " + "auto"
        : props.colSpan
        ? "auto / span 2"
        : "auto / auto"};
  }
`;

export default StyledGridItem;
