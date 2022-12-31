import React from "react";
import StyledRadio from "./Radio.styles";
import { RadioProps } from "./Radio.types";

const Radio: React.FC<RadioProps> = ({
  disabled,
  label,
  radioButtonColor,
  labelFontSize,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <StyledRadio
      labelFontSize={labelFontSize}
      radioButtonColor={radioButtonColor}
      disabled={disabled}
    >
      <input
        type="radio"
        className="radio--input"
        id={value}
        value={value}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="radio--label" htmlFor={value}>
        {label}
      </label>
    </StyledRadio>
  );
};

export default Radio;
