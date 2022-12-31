import styled from "styled-components";
import Base from "../Base";
import { ITextProps } from "./Text.types";

const Text = styled(Base)<ITextProps>`
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight}` : "")};
  ${(props) => (props.align ? `text-align: ${props.align}` : "")};
`;

export default Text;
