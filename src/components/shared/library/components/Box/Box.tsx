import React from "react";
import { StyledBox } from "./Box.styles";
import { BoxProps } from "./Box.types";

const Box: React.FC<BoxProps> = ({
  children,
  width = "100%",
  height,
  padding = "32px",
  borderColor,
  borderRadius = "5px",
}) => {
  return (
    <StyledBox
      width={width}
      height={height}
      padding={padding}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
