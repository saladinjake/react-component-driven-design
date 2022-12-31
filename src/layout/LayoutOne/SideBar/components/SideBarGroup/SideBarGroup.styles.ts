import styled from "styled-components";

const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonContentWrapper = styled.span<{ flip: boolean }>`
  display: inline-block;
  transition: 0.4s;
  ${(props) => (props.flip ? "transform: rotateX(-180deg)" : "")}
`;

const Container = styled.div<{ showMenu: boolean; listHeight: string }>`
  height: ${(props) => (props.showMenu ? `${props.listHeight}px` : "0px")};
  transition: height 0.5s;
  overflow: hidden;
`;

const styles = {
  Button,
  ButtonContentWrapper,
  Container,
};

export default styles;
