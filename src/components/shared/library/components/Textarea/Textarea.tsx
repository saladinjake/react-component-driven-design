import React from "react";
import { StyledTextarea } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";
import { Svg } from "../../assets/svg";

const { Error } = Svg;

const Textarea: React.FC<TextareaProps> = ({
  value,
  name,
  placeholder,
  label = "Description",
  onChange,
  onChangePure,
  disabled = false,
  cols = 20,
  rows = 2,
  resize,
  required,
  width,
  error = false,
  message,
}) => {
  return (
    <StyledTextarea width={width} resize={resize} disabled={disabled}>
      {label && (
        <label>
          {label} {required && <span>*</span>}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={(e) => {
          onChange && onChange(e.currentTarget.value);
          onChangePure && onChangePure(e);
        }}
        placeholder={placeholder}
        disabled={disabled}
        cols={cols}
        rows={rows}
      />
      {error && (
        <span className="error">
          <img src={Error} alt="error-icon" />
          {message}
        </span>
      )}
    </StyledTextarea>
  );
};

export default Textarea;
