import { useState, useRef, useEffect } from "react";
import { Flex } from "components/shared/library";

import MultiSelectProps from "./MultiSelect.types";

import {
  MultiSelectLabel,
  Wrapper,
  SelectWrapper,
  SelectOption,
  Error,
  StyledErrorIcon,
  RequiredAsterisk,
  Pill,
} from "./MultiSelect.styles";
import useOnClickOutside from "utils/hooks/useOnClickOutside";

import { Svg } from "../../assets/svg";

const { Error: ErrorIcon } = Svg;

function MultiSelect(props: MultiSelectProps) {
  const {
    value = [],
    label,
    error,
    options,
    onChange,
    name,
    message,
    required,
    valueArg = "name",
    disabled,
  } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const [items, setItems] = useState(value);

  const handleClick = () => {
    !disabled && setShowDropdown((showDropdown) => !showDropdown);
  };

  useEffect(() => {
    setItems(value);
  }, [value]);

  useEffect(() => {
    onChange({ target: { name, value: items } });
  }, [items]);

  const handleOptionClick = (newItem) => {
    const result = items.find((item) => item[valueArg] === newItem[valueArg]);

    if (!result) {
      setItems((items) => [...items, newItem]);
    } else {
      setItems((items) =>
        items.filter((item) => item[valueArg] !== newItem[valueArg])
      );
    }
  };

  const node = useRef();
  useOnClickOutside(node, handleClick);

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

      <Wrapper
        alignItems="center"
        wrap="wrap"
        onClick={handleClick}
        disabled={disabled}
      >
        {items.map((item) => (
          <Pill>{item.name}</Pill>
        ))}
      </Wrapper>

      {showDropdown && (
        <SelectWrapper direction="column" ref={node} position="absolute">
          {options.map((option, i) => (
            <SelectOption
              type="button"
              key={i}
              onClick={() => handleOptionClick(option)}
            >
              <Flex alignItems="center">
                <input
                  type="checkbox"
                  style={{ marginRight: "1rem" }}
                  checked={Boolean(
                    items.find((item) => item.id === option[valueArg])
                  )}
                  readOnly
                />
                {option.name}
              </Flex>
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

export default MultiSelect;
