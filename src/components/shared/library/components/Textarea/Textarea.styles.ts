import styled from "styled-components";
import { TextareaProps } from "./Textarea.types";
import theme from "../../theme";

export const StyledTextarea = styled.div<TextareaProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "200px"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  label {
    font-weight: normal;
    font-size: 13.5px;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
    text-align: left;
    span {
      color: ${theme.colors.Red};
    }
  }

  textarea {
    background: #ffffff;
    height: 88px;
    border: 1px solid #f4f4f4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    resize: ${(props) => props.resize || "both"};
    padding: 10px 10px;
    outline: none;
    line-height: 20px;
    background: ${(props) =>
      !props.disabled ? "#fff" : "rgba(239, 239, 239, 0.3)"};
    transition: all 0.6s;
    &:hover,
    &:focus {
      border: ${(props) =>
        !props.disabled ? "1px solid rgba(64, 25, 109, 0.3)" : ""};
    }
  }

  textarea::placeholder {
    color: #cacaca;
  }

  .error {
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.Red};

    img {
      display: inline-block;
      margin-right: 4px;
    }
  }
`;
