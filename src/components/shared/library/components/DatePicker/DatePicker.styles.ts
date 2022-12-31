import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerOverrides.css";

import { Svg } from "../../assets/svg";

const { Calendar } = Svg;

export const DatePickerLabel = styled.label`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;
  text-align: left;
`;

export const RequiredAsterix = styled.span`
  color: ${({ theme }) => theme.colors.Red || "#F7685B"};
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  background: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 46px;
  width: 100%;
  text-align: left;
  padding: 10px 12px;
`;

export const StyledCalendarIcon = styled(Calendar)`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;

export const Error = styled.small`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.Red};
`;

export const StyledErrorIcon = styled.img`
  display: inline-block;
  margin-right: 4px;
`;

export const InputWrapper = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "314px")};
  height: 46px;
  position: relative;
`;
