import styled from "styled-components";
import { Box, Flex } from "components/shared/library";

const Arrow =
  "data:image/svg+xml;utf8,<svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.79691 0C1.6082 4.02553e-05 1.42335 0.0534754 1.26373 0.154131C1.10411 0.254786 0.976222 0.398554 0.894854 0.568819C0.813487 0.739084 0.781957 0.928898 0.803909 1.11633C0.82586 1.30375 0.900397 1.48114 1.01891 1.628L4.83291 6.351C4.97351 6.52511 5.15129 6.66556 5.35322 6.76204C5.55515 6.85853 5.77611 6.9086 5.99991 6.9086C6.2237 6.9086 6.44466 6.85853 6.64659 6.76204C6.84852 6.66556 7.0263 6.52511 7.16691 6.351L10.9819 1.628C11.1004 1.48114 11.175 1.30375 11.1969 1.11633C11.2189 0.928898 11.1873 0.739084 11.106 0.568819C11.0246 0.398554 10.8967 0.254786 10.7371 0.154131C10.5775 0.0534754 10.3926 4.02553e-05 10.2039 0H1.79691Z' fill='black'/></svg>";

export const PaginationDropdown = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: ${`url("${Arrow}")`};
  background-repeat: no-repeat;
  background-position-x: 85%;
  background-position-y: 50%;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  padding-left: 0.5rem;
  outline: 0;
  margin: 0 10px;
  width: 60px;
  height: 28px;
  font-weight: 13px;
`;

export const GoToPageInput = styled.input`
  display: inline-block;
  padding: 0.3rem;
  font-weight: 13px;
  width: 45px;
  height: 28px;
  background: #ffffff;
  border: 1px solid #dbdce0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const PlainButton = styled(Box)<{ $isActive?: boolean }>`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: red;
  display: flex;
  opacity: ${(props) => props.$isActive && 0.5};
`;

export const PaginationText = styled(Box)`
  font-size: 14px;
  font-weight: 600;
`;

export const PaginationInfoText = styled(Flex)`
  font-weight: 600;
  font-size: 13.5px;
`;

export const PaginationNumberText = styled(Flex)`
  font-weight: 600;
`;

export const PlainButtonWrapperLeft = styled(Box)`
  border-right: 1px solid #cacaca;
`;
export const PlainButtonWrapperRight = styled(Box)`
  border-left: 1px solid #cacaca;
`;
