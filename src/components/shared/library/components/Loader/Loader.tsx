import React from "react";
import { StyledLoader } from "./Loader.styles";
import LoaderProps from "./Loader.types";

const Loader: React.FC<LoaderProps> = ({ variant }) => {
  return (
    <StyledLoader variant={variant}>
      <div className="spinner-wrap">
        <span className="spinner"></span>
      </div>
    </StyledLoader>
  );
};

export default Loader;
