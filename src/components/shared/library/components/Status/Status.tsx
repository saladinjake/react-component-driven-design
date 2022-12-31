import React from "react";
import StyledStatus from "./Status.styles";
import StatusProps from "./Status.types";

const Select: React.FC<StatusProps> = ({ statusText, active, inactive }) => {
  return (
    <StyledStatus>
      <span
        className={`status-icon ${
          active === "active" || active
            ? "status-icon--active"
            : "status-icon--inactive"
        }`}
      >
        &#11044;
      </span>
      <span>
        {`${statusText.substring(0, 1).toUpperCase()}${statusText
          .substring(1)
          .toLowerCase()}`}
      </span>
    </StyledStatus>
  );
};

export default Select;
