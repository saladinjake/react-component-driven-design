import styled from "styled-components";
import { Flex, Box } from "kuda-component-library";

export const MultiSelectLabel = styled.label`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const RequiredAsterisk = styled(Box)`
  color: ${({ theme }) => theme.colors.KudaRed || "#F7685B"};
`;

export const Wrapper = styled(Flex)<{ disabled?: boolean }>`
  background: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 46px;
  width: 314px;
  text-align: left;
  padding: 10px 12px;
  position: relative;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  ${(props) =>
    !props.disabled
      ? `:after {
    position: absolute;
    content: "";
    top: 20px;
    right: 16px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #000000 transparent transparent transparent;
  }`
      : ""}
`;

export const SelectWrapper = styled(Flex)`
  position: absolute;
  z-index: 1000000;
  width: 100%;
  top: 80px;
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(64, 25, 109, 0.07);
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
  max-height: 400px;
  width: 314px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const SelectOption = styled.button`
  display: flex;
  padding: 15px;
  background: transparent;
  border-style: none;
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #f4f4f4;
  }
`;

export const Error = styled.small`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.kudaRed};
`;

export const StyledErrorIcon = styled.img`
  display: inline-block;
  margin-right: 4px;
`;
