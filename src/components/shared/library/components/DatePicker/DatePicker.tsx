import { Flex } from "components/shared/library";

import {
  DatePickerLabel,
  RequiredAsterix,
  StyledCalendarIcon,
  StyledDatePicker,
  Error,
  StyledErrorIcon,
  InputWrapper,
} from "./DatePicker.styles";

import IDatePickerProps from "./DatePicker.types";

import { Svg } from "../../assets/svg";

const { Error: ErrorIcon } = Svg;

const DatePicker = (props: IDatePickerProps) => {
  const {
    date,
    setDate,
    label,
    required,
    error,
    message,
    disabled,
    width = "314px",
  } = props;

  return (
    <Flex direction="column" style={{ opacity: disabled ? 0.7 : 1 }}>
      {label && (
        <DatePickerLabel>
          {label} {required && <RequiredAsterix>*</RequiredAsterix>}
        </DatePickerLabel>
      )}
      <InputWrapper width={width}>
        <StyledCalendarIcon />
        <StyledDatePicker
          selected={date}
          onChange={setDate}
          disabled={disabled}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          dateFormat="dd-MM-yyyy"
        />
      </InputWrapper>

      {error && (
        <Error>
          <StyledErrorIcon src={ErrorIcon} alt="error-icon" />
          {message}
        </Error>
      )}
    </Flex>
  );
};

export default DatePicker;
