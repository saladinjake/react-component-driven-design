import React from "react";
import { StyledLoader } from "./Loader.styles";
import PropTypes from "prop-types";

const Loader = ({ variant }) => {
  return (
    <StyledLoader variant={variant}>
      <div className="spinner-wrap">
        <span className="spinner"></span>
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  variant: PropTypes.string,
  spinning: PropTypes.bool,
  speed: PropTypes.string,
};

Loader.defaultProps = {
  variant: "white",
  spinning: true,
};

export default Loader;
