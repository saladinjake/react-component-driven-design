import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";
import theme from "../../theme";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-style: normal;
  line-height: 25px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.6s;
  padding: 0px 20px;
  border: none;
  white-space: nowrap;
  border-radius: ${(props) => (props.size === "lg" ? "8px" : "5px")};
  outline: none;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) =>
    props.size === "sm"
      ? "24px"
      : props.size === "md"
      ? "40px"
      : props.size === "lg"
      ? "48px"
      : ""};
  background: ${(props) =>
    props.color === "primary"
      ? theme.colors.Purple
      : props.color === "secondary"
      ? "rgba(239, 241, 255, 0.5)"
      : props.color === "danger"
      ? theme.colors.Red
      : ""};

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 13px;
      font-weight: 700;
    `};

  ${(props) =>
    props.variant === "text" &&
    css`
      background: none;
      color: ${theme.colors.Purple};
      padding: 0;
    `};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `};

  ${(props) =>
    props.variant === "outline" &&
    css`
      border: 1px solid rgba(64, 25, 109, 0.3);
      background: rgba(239, 241, 255, 0.5);
      color: ${theme.colors.Purple};
    `};

  .icon-left {
    margin-right: 10px;
  }

  .icon-right {
    margin-left: 10px;
  }

  @media only screen and (max-width: 1024px) {
    height: 2rem;
    font-size: 0.9rem;
    width: fit-content;
  }
`;

export const StyledText = styled.div``;
