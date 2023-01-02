import { useState, useRef, useEffect } from "react";
import { Flex } from "components/shared/library";

import ISelectProps from "./Select2.types";

import {
  MultiSelectLabel,
  Wrapper,
  SelectWrapper,
  SelectOption,
  Error,
  StyledErrorIcon,
  RequiredAsterisk,
} from "./Select2.styles";
import useOnClickOutside from "utils/hooks/useOnClickOutside";

import { Svg } from "../../assets/svg";

const { Error: ErrorIcon } = Svg;

function Select2(props: ISelectProps) {
  const {
    value = "",
    label,
    error,
    options,
    onChange,
    name = "",
    message,
    required,
    disabled,
    valueArg = "value",
  } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectValue, setSelectValue] = useState(value);

  const handleClick = () => {
    !disabled && setShowDropdown((showDropdown) => !showDropdown);
  };

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  useEffect(() => {
    if (selectValue) {
      onChange({ target: { name, value: selectValue } });
      setShowDropdown(false);
    }
  }, [selectValue]);

  const handleOptionClick = (value) => {
    setSelectValue(value);
  };

  const node = useRef();
  useOnClickOutside(node, handleClick);

  const computeValue = (value) => {
    if (!value && disabled) return "";
    if (!value) return "Select";
    if (options.includes(value)) return value;
    const result = options.find((item) => item[valueArg] === value.toString());
    if (result) return result.name;
    if (disabled) return "";
    return "Select";
  };

  const computeOption = (option, nameArg = "name") => {
    if (typeof option === "string") {
      return option;
    }

    return option[nameArg];
  };

  return (
    <Flex
      direction="column"
      position="relative"
      style={{ opacity: disabled ? "0.7" : 1 }}
    >
      <Flex>
        {label && <MultiSelectLabel>{label}</MultiSelectLabel>}
        {required && (
          <RequiredAsterisk as="span" ml="2">
            *
          </RequiredAsterisk>
        )}
      </Flex>

      <Wrapper alignItems="center" onClick={handleClick} disabled={disabled}>
        {computeValue(selectValue)}
      </Wrapper>

      {showDropdown && (
        <SelectWrapper direction="column" ref={node} position="absolute">
          {options.map((option, i) => (
            <SelectOption
              type="button"
              key={i}
              onClick={() =>
                handleOptionClick(option[valueArg] || option.name || option)
              }
            >
              {computeOption(option)}
            </SelectOption>
          ))}
        </SelectWrapper>
      )}

      {error && (
        <Error>
          <StyledErrorIcon src={ErrorIcon} alt="error-icon" />
          {message}
        </Error>
      )}
    </Flex>
  );
}

export default Select2;
