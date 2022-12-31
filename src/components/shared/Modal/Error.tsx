import React from "react";
import StyledErrorModal from "./Error.styles";
import { Svg } from "assets/svg";
import Modal, { ModalProps } from "./Modal";
import { Button } from "../library";

const { errorAnimation } = Svg;

type ErrorProps = ModalProps & {
  hanndleTryAgain: () => void;
  handleCancel: () => void;
  message: string;
  isLoading?: boolean;
};

const Error: React.FC<ErrorProps> = ({
  showModal,
  title,
  message,
  width = "411px",
  hanndleTryAgain,
  handleCancel,
  isLoading,
}) => {
  return (
    <Modal showModal={showModal} title={title} width={width}>
      <StyledErrorModal>
        <img src={errorAnimation} alt="successful" />
        <div className="content">
          <p>{message}</p>
        </div>
        <div className="error-footer">
          <div>
            <Button
              variant="outline"
              color="secondary"
              onClick={() => handleCancel()}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button loading={isLoading} onClick={hanndleTryAgain}>
              Try Again
            </Button>
          </div>
        </div>
      </StyledErrorModal>
    </Modal>
  );
};

export default Error;
