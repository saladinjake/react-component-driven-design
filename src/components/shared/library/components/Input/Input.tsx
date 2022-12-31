import React from "react";
import Skeleton from "components/shared/Skeleton";
import { Box, Flex } from "components/shared/library";
import {
  Label,
  InputWrapper,
  RequiredAsterisk,
  Error,
  StyledErrorIcon,
} from "./Input.styles";
import { InputProps } from "./Input.types";
import { Svg } from "../../assets/svg";

const { Error: ErrorIcon } = Svg;

const Input: React.FC<InputProps> = ({
  label = "Label",
  type = "text",
  error,
  message,
  width,
  placeholder = "Placeholder",
  required = false,
  value,
  onChange,
  onChangePure,
  disabled,
  name,
  isLoading,
}) => {
  return (
    <Flex direction="column" style={{ opacity: disabled ? "0.7" : 1 }}>
      {isLoading ? (
        <Skeleton width="30%" />
      ) : (
        <Flex>
          <Label>{label}</Label>
          {required && (
            <RequiredAsterisk as="span" ml="2">
              *
            </RequiredAsterisk>
          )}
        </Flex>
      )}

      {isLoading ? (
        <Box mt="4">
          <Skeleton height="40px" width="100%" />
        </Box>
      ) : (
        <InputWrapper
          width={width}
          type={type}
          placeholder={disabled ? "" : placeholder}
          required={required}
          name={name}
          value={value}
          onChange={(e) => {
            onChangePure && onChangePure(e);
            onChange && onChange(e.currentTarget.value);
          }}
          disabled={disabled}
        />
      )}

      {error && (
        <Error>
          <StyledErrorIcon src={ErrorIcon} alt="error-icon" />
          {message}
        </Error>
      )}
    </Flex>
  );
};

export default Input;
