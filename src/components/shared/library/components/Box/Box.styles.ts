import styled, { css } from "styled-components";
import { BoxProps } from "./Box.types";
import theme from "../../theme";

export const StyledBox = styled.div<BoxProps>`
  border: 1px solid
    ${({ borderColor }) =>
      borderColor ? borderColor : theme.colors.BorderGrey};
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : "auto")};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
`;
