import styled from "styled-components";

export default styled.div<{
  labelFontSize: string;
  radioButtonColor: string;
  disabled: boolean;
}>`
  font-size: ${(props) => (props.labelFontSize ? props.labelFontSize : "16px")};

  .radio--input {
    margin-right: 12px;
    border: 2px solid white;
    box-shadow: 0 0 0 1px
      ${(props) => (props.radioButtonColor ? props.radioButtonColor : "#000")};
    appearance: none;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: all ease-in 0.2s;
  }
  .radio--input:checked {
    background-color: ${(props) =>
      props.radioButtonColor ? props.radioButtonColor : "#000"};
  }
  .radio--label {
    color: ${(props) => (props.disabled ? "#979797" : "#000")};
    margin-bottom: 20px;
  }
`;
