import React from "react";
import StyledText from "./Typography.styles";
import TypographyProps from "./Typography.type";

const Heading: React.FC<TypographyProps> = ({ text }) => {
  return( 
      <StyledText>
        <h1 className="heading">{text}</h1>
      </StyledText>
  );
}

export default Heading;