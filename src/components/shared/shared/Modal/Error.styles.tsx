import styled from "styled-components";
import { ModalProps } from "./Modal";

const StyledErrorModal = styled.div<ModalProps>`
  .content {
    margin: 20px 15px;
    text-align: center;
    padding: 0 20px;
  }
  .error-footer {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
`;

export default StyledErrorModal;