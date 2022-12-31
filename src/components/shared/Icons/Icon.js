import React from "react";
import PropTypes from "prop-types";
import { IconBox } from "./Icon.styles";

const Icon = ({ svg, size, viewBox, height, width, color }) => (
  <IconBox size={size} viewBox={viewBox} height={height} width={width}>
    <span
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{ fill: color || "inherit" }}
    ></span>
  </IconBox>
);

Icon.propTypes = {
  icon: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: "16",
  width: "2em",
  height: "2em",
  className: "",
  style: {},
  viewBox: "0 0 24 24",
  color: "black",
};

export default Icon;
