import styled from "styled-components";

interface ModalMainPropsType {
  width?: string;
  minHeight?: string;
}

interface ModalHeaderPropsType {
  subtitle?: string;
}

export const StyledModalBackground = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(64, 25, 109, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  box-sizing: border-box;
  overflow: scroll;
`;

export const StyledModalMain = styled.div<ModalMainPropsType>`
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(64, 25, 109, 0.07);
  border-radius: 5px;
  max-height: 100%;
  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
  z-index: 2;
  position: relative;
  margin: 0 auto;
  overflow-x: visible;
  overflow-y: scroll;
  padding: 20px;

  .modal-hr {
    margin: 0 !important;
    opacity: 0.6;
    border: 1px solid #dbdce0;
    width: 100%;
  }

  width: ${(props) => (props.width ? props.width : "300px")};

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledModalFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0 40px 0;

  .secondaryBtn {
    margin-right: 25px;
  }
`;

export const StyledModalHeader = styled.header<ModalHeaderPropsType>`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 800;
    margin-bottom: ${(props) => (props.subtitle ? "16px" : 0)};
  }

  margin-bottom: 20px;
  text-align: center;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  overflow: auto;
  text-align: center;
`;
